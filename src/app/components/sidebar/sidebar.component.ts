import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Admin } from 'src/app/fakedata';
import {FakedataService} from '../../fakedata.service';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const AdminROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: '/user', title: 'NGO',  icon:'person', class: '' },
    // { path: '/login', title: 'Login',  icon:'person', class: '' },
    { path: '/ngo', title: 'NGO',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
export const NGOROUTES: RouteInfo[] = [
  { path: '/ngodashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/user', title: 'Add User',  icon:'person', class: '' },
  //  { path: '', title: 'Sign out',  icon:'person', class: '' }
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() check = new EventEmitter<boolean>();
  checking: boolean;

  menuItems: any[];
  user:Admin=new Admin;
  constructor(public fake:FakedataService) {
    this.menuItems=[];
    this.checking=true;
   }

  ngOnInit() {
  //  this.menuItems = ROUTES.filter(menuItem => menuItem);
  this.fake.user.subscribe(user => this.user = user);
  if(this.user.Usertype=='ngo'){
      this.menuItems = NGOROUTES.filter(menuItem => menuItem);
    } else if(this.user.Usertype == 'admin'){
      this.menuItems = AdminROUTES.filter(menuItem => menuItem);

    }
  }
  signout(e:string){
    console.log(e);
    if(e==='Sign out'){
      this.checking = !this.checking;
      this.check.emit(this.checking);
      console.log(this.checking)
    }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
