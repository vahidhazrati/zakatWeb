import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgoDashboardComponent } from './ngo-dashboard/ngo-dashboard.component';
import { NgoComponent } from './ngo/ngo.component';
import { AddngoComponent } from './addngo/addngo.component';
@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    LoginComponent,
    DashboardComponent,
    NgoDashboardComponent,
    NgoComponent,
    AddngoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
