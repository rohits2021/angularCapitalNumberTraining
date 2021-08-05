import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../login-register.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todoUserData = {
    title:'',
    finishDate:'',
    userId: `${localStorage.getItem('id')}`
  }
  public userTodo:any;
  constructor(private _router:Router,private _logReg:LoginRegisterService) {
    
   }

  ngOnInit(): void {
    this.getTodo()
  }

  
  logout(){
      localStorage.clear();
      this._router.navigate(['/login'])
  }

  addTodo(){
      this._logReg.addTodo(this.todoUserData)
          .subscribe((res)=>{
            console.log(res)
          })
  }

  getTodo(){
    this._logReg.getTodo().subscribe((data)=>{
           this.todoArray(data)
    })
  }

  todoArray(data:any){
    this.userTodo = data.todo;
  }

  deleteTodo(id:any){
      this._logReg.deleteTodo(id)
        .subscribe((res)=>{
          console.log(res);      
        })
      this.getTodo();
  }

  editTodo(id:any){
     this._router.navigate(['/edit'], { queryParams: { id: `${id}`} })
  }

}
