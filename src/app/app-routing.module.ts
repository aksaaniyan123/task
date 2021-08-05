import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { SudentComponent } from './sudent/sudent.component';

import { ViewdetailsComponent } from './viewdetails/viewdetails.component';


const routes: Routes = [
  {
    path:'' , component:HomeComponent
  },
  {
    path:'register' , component:RegisterComponent
  },
{
  path:'login' , component:LoginComponent
},
{
  path:'student' , component:SudentComponent 
},

{
  path:'viewdetails/:id' , component:ViewdetailsComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
