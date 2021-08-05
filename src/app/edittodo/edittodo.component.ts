import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRegisterService } from '../login-register.service';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {

  public todoUserData = {
    title:'',
    finishDate:'',
  }

  public id:any;

  constructor(private _router:Router,private activatedRoute: ActivatedRoute,
              private _logReg:LoginRegisterService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.id = params.id;      
      }
    );
  }

  

  logout(){
    localStorage.clear();
    this._router.navigate(['/login'])
  }

  addTodo(){
    let id = this.id
    this._logReg.updateTodo(id,this.todoUserData)
        .subscribe((data)=>{
          console.log(data)
        })
    this._router.navigate(['/todo'])
  }

  goBack(){
    this._router.navigate(['/todo'])
  }


}
