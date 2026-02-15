import type { Request, Response } from "express";
import { UseBcrypt } from "../services/bcrypt.service";

const bcrypt = new UseBcrypt();

export const IHashPassword = async (req: Request, res: Response) => {
    try {
        const { plainPassword } = req.body;

        const result = await bcrypt.hashPassword(plainPassword);

        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const IVerifyPassword = async (req: Request, res: Response) => {
    try {
        // hashedPassword property from database to be develop soon.
        const { plainPassword, hashedPassword } = req.body;

        if (!plainPassword || !hashedPassword)
            return res.status(400).json({ error: "Password required" });

        const result = await bcrypt.VerifyPassword(plainPassword, hashedPassword);

        if ('verdict' in result === true) {
            return res.status(200).json({ message: "Login successful!", isLogged: true });
        }
        else {
            return res.status(401).json({ message: 'Invalid password', isLogged: false });
        }

    }
    catch (error) {
        return res.status(500).json({ error: "Verification process failed" });
    }
}