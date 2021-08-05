import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../login-register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    email:'',
    // name:'',
    // number:'',
    password:''
  }

  constructor(private loginregisterService:LoginRegisterService) { }

  ngOnInit(): void {
    
  }
 

  register(){
    // console.log(this.registerUserData);
    let res;
    this.loginregisterService.registerUser(this.registerUserData)
    .subscribe(
      res => {       
        // localStorage.setItem('token', )
        // this._router.navigate(['/special'])
        // console.log(res);        
      },
      err => {
        console.log(err)
      }
    )  
  }

}
