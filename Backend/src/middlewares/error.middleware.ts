import { Request, Response, NextFunction } from 'express';

class AppError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({ error: err.message });
};

export { AppError, errorHandler };
