import type { Request, Response, NextFunction } from "express";
import { UseBcrypt } from "../services/bcrypt.service";

const bcryptService = new UseBcrypt();

export const IVerifyPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { plainPassword } = req.body;
        const result = await bcryptService.VerifyPassword(plainPassword);

        return res.status(result.status!).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};
