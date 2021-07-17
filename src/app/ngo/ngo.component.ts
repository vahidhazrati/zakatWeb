import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';
import { Admin } from '../fakedata';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent implements OnInit {

  ngos:Admin[]=[];
  constructor(private fake:FakedataService,private rout:Router) { }
addnew(){
this.rout.navigate(['/addngo'],{});
}
  ngOnInit(): void {
    this.ngos = this.fake.GetAdmins();
  }

}
