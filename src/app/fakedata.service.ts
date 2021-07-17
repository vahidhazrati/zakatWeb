import { Injectable } from '@angular/core';
import { Admin,person } from './fakedata';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor() { }
  NgoList:Admin[] = [
    {Id:1,Name:'GlasedCorp',Address:'Kuala Lampur',Email:'GC@gmail.com',Description:'GlasedCorp aims to act as a catalyst bringing sustainable change in the lives of underprivileged children, youth, women and overall society. It is an NGO which applies successful business strategie',Tell1:'+60111232433',Tell2:'',Username:'ngo',Ppassword:'',Usertype:'ngo' },
    {Id:2,Name:'Global Street Mission Kuala Lumpur (GSM)',Address:'Kuala Lampur',Email:'GSM@gmail.com',Description:'GSM aims to act as a catalyst bringing sustainable change in the lives of underprivileged children, youth, women and overall society. It is an NGO which applies successful business strategie',Tell1:'+60112433',Tell2:'',Username:'gsm',Ppassword:'',Usertype:'ngo' },
    {Id:3,Name:"Institut Onn Ja'afar" ,Address:'Kuala Lampur',Email:'Jafar@gmail.com',Description:'Jafar Institute aims to act as a catalyst bringing sustainable change in the lives of underprivileged children, youth, women and overall society. It is an NGO which applies successful business strategie',Tell1:'+60112999433',Tell2:'',Username:'jafar',Ppassword:'' ,Usertype:'ngo'},
    {Id:4,Name:"Insurance Admin User" ,Address:'Kuala Lampur',Email:'admin@gmail.com',Description:'user admin',Tell1:'+6017678933',Tell2:'',Username:'admin',Ppassword:'' ,Usertype:'admin'}
  ];
  users:person[]=[
    {Id:1,NgoId:1,Email:'test1@gmail.com',Tell1:'+6017911098',Tell2:'',Name:'khirul nafis',Username:'kheiri',Ppassword:'',Address:'Kuala lampur',
  Family:'bent abdul',IC:'9080706050',Postcode:'52100',Usertype:'need',picture:'',Description:'This person need help.'},
  {Id:2,NgoId:1,Email:'test2@gmail.com',Tell1:'+6017911098',Tell2:'',Name:'khirul nafis',Username:'kheiri',Ppassword:'',Address:'Kuala lampur',
  Family:'bent abdul',IC:'9080706050',Postcode:'52100',Usertype:'need',picture:'',Description:'This person need help.'},
  {Id:3,NgoId:1,Email:'test3@gmail.com',Tell1:'+6017911098',Tell2:'',Name:'khirul nafis',Username:'kheiri',Ppassword:'',Address:'Kuala lampur',
  Family:'bent abdul',IC:'9080706050',Postcode:'52100',Usertype:'need',picture:'',Description:'This person need help.'},
  {Id:4,NgoId:2,Email:'test4@gmail.com',Tell1:'+6017911098',Tell2:'',Name:'khirul nafis',Username:'kheiri',Ppassword:'',Address:'Kuala lampur',
  Family:'bent abdul',IC:'9080706050',Postcode:'52100',Usertype:'need',picture:'',Description:'This person need help.'},
  {Id:5,NgoId:2,Email:'test@gmail.com',Tell1:'+6017911098',Tell2:'',Name:'khirul nafis',Username:'kheiri',Ppassword:'',Address:'Kuala lampur',
  Family:'bent abdul',IC:'9080706050',Postcode:'52100',Usertype:'need',picture:'',Description:'This person need help.'},
  {Id:6,NgoId:3,Email:'test@gmail.com',Tell1:'+6017911098',Tell2:'',Name:'khirul nafis',Username:'kheiri',Ppassword:'',Address:'Kuala lampur',
  Family:'bent abdul',IC:'9080706050',Postcode:'52100',Usertype:'need',picture:'',Description:'This person need help.'},
  {Id:7,NgoId:3,Email:'test@gmail.com',Tell1:'+6017911098',Tell2:'',Name:'khirul nafis',Username:'kheiri',Ppassword:'',Address:'Kuala lampur',
  Family:'bent abdul',IC:'9080706050',Postcode:'52100',Usertype:'need',picture:'',Description:'This person need help.'},
  ];

  GetUsers(id:number):person[]{
    return this.users.filter(p=>p.NgoId==id);
  }
  GetAdmins(): Admin[] {
    return this.NgoList;
  }
  // use this property for property binding
  private usertype = new BehaviorSubject<Admin>(new Admin);
  user = this.usertype.asObservable();
  
  setUser(newUser:Admin){
    this.usertype.next(newUser); 
  }
}
