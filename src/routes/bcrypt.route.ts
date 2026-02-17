import { Router } from 'express';
import { IVerifyPassword } from '../controller/bcrypt.controller';

export const bcryptRouter = Router();

bcryptRouter.post('/verify', IVerifyPassword);