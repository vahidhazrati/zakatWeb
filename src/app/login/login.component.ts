import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../fakedata';
import { FakedataService } from '../fakedata.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() check = new EventEmitter<boolean>();
  @Output() Usertype = new EventEmitter<string>();
  checking: boolean;
  admin: Admin = new Admin;
  UserName: string = '';
  constructor(private rout: Router, public fake: FakedataService) {
    this.checking = true;
  }

  ngOnInit(): void {
    this.fake.user.subscribe(user => this.admin = user);
  }
  submit() {
    if (this.UserName) {
      this.admin = this.fake.GetAdmins().find(p => p.Username == this.UserName) || new Admin;
      console.log('from login : ' + this.admin.Usertype);
      if (this.admin.Usertype == 'ngo') {
        this.fake.setUser(this.admin);
      this.rout.navigate(['ngodashboard'], {});
      } else if (this.admin.Usertype == 'admin') {
        this.fake.setUser(this.admin);
      this.rout.navigate(['dashboard'], {});
      }
      this.checking = !this.checking;
      this.check.emit(this.checking);
    }
  }
}
