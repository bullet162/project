import * as bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

export class UseBcrypt {

    async hashPassword(plainPassword: string): Promise<{ hashedPassword: string } | { error: string }> {
        try {
            const saltRounds = Number(process.env.SALT_ROUNDS) || 12;
            const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

            return { hashedPassword: hashedPassword };
        }
        catch (error) {
            console.error('Cannot encrypt password. ', error);

            throw error;
        }
    }

    async VerifyPassword(plainPassword: string, hashedPassword: string): Promise<{ verdict: boolean } | { error: string }> {
        try {
            const verdict = await bcrypt.compare(plainPassword, hashedPassword);

            return { verdict: verdict };
        }
        catch (error) {
            console.error('Password process failed. ', error);

            throw error;
        }
    }
}