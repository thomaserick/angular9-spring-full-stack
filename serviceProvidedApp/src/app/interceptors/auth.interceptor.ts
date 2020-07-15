import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const tokenJWT = this.storageService.getAcessToken();

    const url = request.url;

    if (tokenJWT && !url.endsWith(environment.tokenUrlAuth)) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + tokenJWT,
        },
      });
    }

    return next.handle(request);
  }
}
