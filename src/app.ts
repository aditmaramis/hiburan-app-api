import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import cors from 'cors';
import path from 'path';
import { PORT } from './config';
import { AuthRouter } from './routers/auth.router';
import referralRouter from './routers/referral.router';
import profileRouter from './routers/profile.router';
import eventsRouter from './routers/events.router';
import uploadRouter from './routers/upload.router';
import transactionsRouter from './routers/transactions.router';
import bookingsRouter from './routers/bookings.router';
import statisticsRouter from './routers/statistics.router';
import mainRouter from './routers/index';
import reviewsRouter from './routers/reviews.router';
import { AppError } from './utils/app.error';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(
      cors({
        origin: [
          'http://localhost:3000',
          'http://localhost:8000',
          'http://127.0.0.1:3000',
          'http://localhost:3001',
          'https://hiburan-app-web.vercel.app',
          'https://hiburan-app-web-git-master-aditmaramiss-projects.vercel.app',
          'https://hiburan-app-web-jjn7p2vz0-aditmaramiss-projects.vercel.app',
        ],
        credentials: true,
      })
    );

    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private handleError(): void {
    // Not Found Handler
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res
          .status(404)
          .send(
            'We are sorry, the endpoint you are trying to access could not be found on this server. Please ensure the URL is correct!'
          );
      } else {
        next();
      }
    });

    // Error Handler
    this.app.use(
      (error: any, req: Request, res: Response, next: NextFunction) => {
        console.log(error);
        const statusCode =
          error.statusCode ||
          (error.name === 'TokenExpiredError' ||
          error.name === 'JsonWebTokenError'
            ? 401
            : 500);
        const message =
          error instanceof AppError || error.isOperational
            ? error.message ||
              error.name === 'TokenExpiredError' ||
              error.name === 'JsonWebTokenError'
            : 'Internal server error. Please try again later!';
        if (req.path.includes('/api/')) {
          res.status(statusCode).json({
            success: false,
            message: message,
          });
        } else {
          next();
        }
      }
    );
  }

  private routes(): void {
    const authRouter = new AuthRouter();

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student API!`);
    });

    this.app.use('/api/auth', authRouter.getRouter());
    this.app.use('/api/referral', referralRouter);
    this.app.use('/api/profile', profileRouter);
    this.app.use('/api/events', eventsRouter);
    this.app.use('/api/upload', uploadRouter);
    this.app.use('/api/transactions', transactionsRouter);
    this.app.use('/api/bookings', bookingsRouter);
    this.app.use('/api/statistics', statisticsRouter);
    this.app.use('/api/reviews', reviewsRouter);

    // Enhanced booking system with v1 prefix
    this.app.use(mainRouter);
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜ [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
