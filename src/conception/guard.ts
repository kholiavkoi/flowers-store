import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('Guard');
    const request = context.switchToHttp().getRequest();
    const isAuth = request.headers.authorization === 'secret';
    if (!isAuth) {
      throw new UnauthorizedException('Not authorized');
    }
    return isAuth;
  }
}
