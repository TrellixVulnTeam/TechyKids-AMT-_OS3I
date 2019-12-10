import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  intercept(req,next){
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: 'techykids '+localStorage.getItem('token'),
      }
    })
    return  next.handle(tokenizedReq)
  }
  constructor() { }
}
