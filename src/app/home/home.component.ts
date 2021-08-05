import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../login-register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userName:any;
  public userId:any;
  constructor(private loginregister:LoginRegisterService,private _router:Router) { }

  ngOnInit(): void {
    this.loginregister.getAllUser()
    .subscribe(data=>{
      this.getName(data)
    },
    err=>{
      this._router.navigate(['/login'])
    })
   
  }

  logout(){
    localStorage.clear();
    this._router.navigate(['/login']);
  }

  getName(data:any){
    this.userName = data.user.email;
    this.userId   = data.user.id;
    localStorage.setItem('id',`${this.userId}`)
  }

  

}
