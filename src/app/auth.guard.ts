import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRegisterService } from './login-register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router:Router, private _logreg:LoginRegisterService){}
  canActivate(): boolean{
    if(this._logreg.loggedIn()){
        return true;
    }else{
        this._router.navigate(['/login'])
        return false;
    }
    
  }
  
}
