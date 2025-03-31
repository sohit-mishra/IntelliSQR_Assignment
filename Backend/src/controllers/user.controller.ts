import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { AppError } from '../middlewares/error.middleware';

const prisma = new PrismaClient();

export const userController = {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await prisma.user.create({
                data: { email, password: hashedPassword }
            });
            res.status(201).json({ message: 'User created', email :user.email, password:user.password });
        } catch (error) {
            next(new AppError('User registration failed', 400));
        }
    }
};