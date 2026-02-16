import { Router } from 'express';
import { IHashPassword, IVerifyPassword } from '../controller/bcrypt.controller';

export const bcryptRouter = Router();

bcryptRouter.post('/hash', IHashPassword);
bcryptRouter.post('/verify', IVerifyPassword);