// import { ToastMessage } from './../toast/toast';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginRegisterService } from './login-register.service';


@Injectable({
  providedIn: 'root'
})


export class DespatcherService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:1337/user';
  
   get(url:any, data:any, header = {}): Observable<any> {
    return this.http.get(url, { headers: header, params: data }).pipe(
      map((res) => { return res }),
      catchError(this.handleError));
  }


  post(url:any, data:any, headers = {}) {

    return this.http.post(url, data, headers).pipe(
      catchError(this.handleError));
  }

  put(url:any, data = {}, headers = {}) {
    return this.http.put(url, data, headers).pipe(
      catchError(this.handleError));
  }

  delete(url:any, data = {}) {
    return this.http.delete(url, { params: data }).pipe(
      catchError(this.handleError));
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = error?.error?.message ? error.error.message : (`Error Code: ${error.status}\nMessage: ${error.message}`);
    }
    console.log({ title: msg, icon: 'error' });

    return throwError(msg);
  }

}
