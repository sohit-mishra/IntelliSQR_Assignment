import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middlewares/error.middleware';
import { ENV } from './config/env';

const app = express();

app.use(json());


app.use(cors({ origin: ENV.CORS_ORIGIN || '*' })); 

app.use('/api/users', userRoutes);
app.use(errorHandler);

export default app;
