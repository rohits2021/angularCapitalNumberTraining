import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http'
// import { Router } from '@angular/router'
import { DespatcherService } from './despatcher.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  private url = 'http://localhost:1337/user';
  private todourl = 'http://localhost:1337/todo';
  
  constructor(private http:HttpClient) {    
  }

  registerUser(user:any){  
    return this.http.post(this.url+'/register',user)
  }

  LoginUser(user:any){
    return this.http.post(this.url+'/login',user)
  }

  getAllUser(){
    return this.http.get(this.url+'/getalluser')
  }

  addTodo(todo:any){
    return this.http.post(this.todourl+'/create',todo)
  }

  getTodo(){
    let userId = localStorage.getItem('id');
    return this.http.get(this.todourl+`/${userId}`)
  }

  deleteTodo(id:string){
    return this.http.delete(this.todourl+`/${id}`)
  }

  updateTodo(id:string,todo:any){
    return this.http.put(this.todourl+`/${id}`,todo)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}


