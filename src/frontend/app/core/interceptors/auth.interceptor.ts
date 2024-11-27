import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('http://localhost:8000')) {
    req = req.clone({
      withCredentials: true
    });
  }
  
  return next(req);
}; 