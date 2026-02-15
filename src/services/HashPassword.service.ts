import * as bcrypt from 'bcrypt';
import type { userAccountDetails } from '../modules/AccountDetails.module';
import dotenv from 'dotenv';
dotenv.config();

export class UseBcrypt {

    async hashPassword(userDetails: userAccountDetails): Promise<{ hashedPassword: string } | { error: string }> {
        try {
            const saltRounds = Number(process.env.SALT_ROUNDS);
            const hashedPassword = await bcrypt.hash(userDetails.plainPassword, saltRounds);

            return { hashedPassword: hashedPassword };
        }
        catch (error) {
            console.error('Cannot encrypt password. ', error);

            throw error;
        }
    }

    async VerifyPassword(userDetails: userAccountDetails): Promise<{ verdict: boolean } | { error: string }> {
        try {
            const verdict = await bcrypt.compare(userDetails.plainPassword, userDetails.hashedPassword);

            return { verdict: verdict };
        }
        catch (error) {
            console.error('Password verifying failed. ', error);

            throw error;
        }
    }
}