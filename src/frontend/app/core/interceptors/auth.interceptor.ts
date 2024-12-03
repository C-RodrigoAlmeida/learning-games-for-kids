import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    withCredentials: true
  });

  return next(req);
}; 