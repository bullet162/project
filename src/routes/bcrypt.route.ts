import { Router } from "express";
import { IHashPassword, IVerifyPassword } from "../controller/bcrypt.controller";

export const bcryptRouter = Router();

bcryptRouter.post('/registerPassword', IHashPassword);
bcryptRouter.post('/verifyPassword', IVerifyPassword);
