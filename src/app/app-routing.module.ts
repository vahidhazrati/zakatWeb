import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgoDashboardComponent } from './ngo-dashboard/ngo-dashboard.component';
import { NgoComponent } from './ngo/ngo.component';
import { AddngoComponent } from './addngo/addngo.component';
const routes: Routes = [
  {path:'user',component:AdduserComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'ngodashboard',component:NgoDashboardComponent},
  {path:'ngo',component:NgoComponent},
  {path:'addngo',component:AddngoComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
