import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Admin,person } from '../fakedata';
import { FakedataService } from '../fakedata.service';
@Component({
  selector: 'app-ngo-dashboard',
  templateUrl: './ngo-dashboard.component.html',
  styleUrls: ['./ngo-dashboard.component.css']
})
export class NgoDashboardComponent implements OnInit {
  user:Admin=new Admin;
  emploees:person[]=[];
constructor(private fake:FakedataService){}

ngOnInit() {
    this.fake.user.subscribe(user => this.user = user);
    this.emploees = this.fake.GetUsers(this.user.Id);
}

}
