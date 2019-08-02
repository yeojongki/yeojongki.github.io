import {
  NestMiddleware,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeaders = req.headers.authorization;
    const token = authHeaders ? (authHeaders as string).split(' ')[1] : false;
    if (!token) {
      throw new UnauthorizedException();
    }

    next()
  }
}
