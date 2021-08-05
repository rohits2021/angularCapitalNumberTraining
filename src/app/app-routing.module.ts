import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard],
    // children: [
    //   {
    //     path:'edit', component: EdittodoComponent
    //   }
    // ]
  },
  {
    path:'todo',
    component:TodoComponent,
    canActivate:[AuthGuard],
  },
  {
    path:'edit',
    component:EdittodoComponent,
    canActivate:[AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
