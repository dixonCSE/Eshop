import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class XjwtInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let xjwt = localStorage.getItem('xjwt');
    let xjwtToken = req.clone({
      setHeaders: {
        Authorization: '' + xjwt,
      },
    });
    return next.handle(xjwtToken);
  }
}
