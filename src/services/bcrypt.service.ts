import * as bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import type { GlobalResponse } from '../middleware/ResponseGlobal.middleware';
import { error } from 'node:console';
dotenv.config();


export class UseBcrypt {

    async hashPassword(plainPassword: string): Promise<GlobalResponse> {
        try {
            const saltRounds = Number(process.env.SALT_ROUNDS) || 12;
            const salt = await bcrypt.genSalt(saltRounds);

            if (!plainPassword || plainPassword === null) {
                return {
                    success: false,
                    data: "",
                    message: "Password required",
                    error: "Input is missing",
                    status: 400
                };
            }

            const hashedPassword = await bcrypt.hash(plainPassword, salt);

            return {
                success: true,
                data: hashedPassword,
                message: "Password hashed successfully",
                error: "none",
                status: 200
            };
        }
        catch (error) {
            console.error('Cannot encrypt password. ', error);
            throw error;
        }
    }

    async VerifyPassword(plainPassword: string): Promise<GlobalResponse> {
        try {

            if (!plainPassword || plainPassword === null) {
                return {
                    success: false,
                    data: "",
                    message: "Password required",
                    error: "Input is missing",
                    status: 400
                };
            }

            //sample password but need database
            const hashedPassword: string = String(process.env.SAMPLE_PASSWORD);
            const verdict: boolean = await bcrypt.compare(plainPassword, hashedPassword);
            const message: string = verdict === true ? "Password verified" : "Incorrect password";
            const status = verdict === true ? 200 : 401;

            return {
                success: verdict,
                message: message,
                error: "none",
                status: status
            };
        }
        catch (error) {
            console.error('Password process failed. ', error);
            throw error;
        }
    }
}