import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../login-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = {
    email:'',
    password:''
  }
  
  constructor(private loginregisterService:LoginRegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  tokenToLS(data:any){
    let token = data.token;
    localStorage.setItem('token',token);
    
    // alert(token)
  }

  login(){
    this.loginregisterService.LoginUser(this.loginForm)
    .subscribe(res=>{
      // this.router.navigate(['/home'])
      this.tokenToLS(res); 
      this.router.navigate(['/home'])     
    },
    err =>{
      console.log(err)
    })
  }

}
