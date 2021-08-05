// import { Injectable, Injector } from '@angular/core';
// import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
// import { LoginRegisterService } from './login-register.service';
// import { Router } from '@angular/router';

import { Injectable, Injector } from '@angular/core'; // imports the class that provides local storage for token
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';
import { LoginRegisterService } from './login-register.service';




@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector){}
  intercept(req:HttpRequest<any>, next:HttpHandler) {

    if (req.url.indexOf('login') > 0
    || req.url.indexOf('register') > 0) {

    const secretheader = req.clone({ setHeaders: {} });
    return next.handle(secretheader);
    // const secretheader = request.clone({ setHeaders: { client_secret: this.clientSecret, lang: localStorage.getItem('lang') ? '' : 'en' } });
    // return next.handle(secretheader);

  }else{
    let authService = this.injector.get(LoginRegisterService)
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
      }
    )
    // console.log("========================================",tokenizedReq);
    return next.handle(tokenizedReq)
  }






  
  //   .pipe(
  //     catchError((error: HttpErrorResponse) => {
        
  //          if (error && error.status === 401) {
  //              console.log("ERROR 401 UNAUTHORIZED")
  //          }
  //          const err = error.error.message || error.statusText;
  //          return throwError(error);                   
  //     })
  //  )
  }

  // intercept(req: HttpRequest<any>, next: HttpHandler) :any {
  //   console.log("Interception In Progress"); 
  //   const token = localStorage.getItem('token');
  //   req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
  //   req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
  //   req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
 
  //   return next.handle(req)
  //       .pipe(
  //          catchError((error: HttpErrorResponse) => {
             
  //               if (error && error.status === 401) {
  //                   console.log("ERROR 401 UNAUTHORIZED")
  //               }
  //               const err = error.error.message || error.statusText;
  //               return throwError(error);                   
  //          })
  //       );
  // } 
}
