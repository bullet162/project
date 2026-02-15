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
        const { plainPassword } = req.body;

        if (!plainPassword)
            return res.status(400).json({ error: "Password required", isLogged: false });

        const result = await bcrypt.VerifyPassword(plainPassword);

        return res.status(200).json(result);

    }
    catch (error) {
        return res.status(500).json({ error: "Verification process failed" });
    }
}