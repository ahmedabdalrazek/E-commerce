
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient: HttpClient , private _Router:Router) { }
 userdata:any;
 logout(){
  localStorage.removeItem('eToken');
   this._Router.navigate(['/login']);
 }
  userSavedtoken(){
  if(localStorage.getItem('eToken') !=null){
    let encodetoken :any=localStorage.getItem('eToken');
  let   decodetoken=jwtDecode(encodetoken);
 console.log(decodetoken);
 this.userdata=decodetoken;

  }
 }

  setregister( userdata:object):Observable <any>
  {
    return this._HttpClient.post(` https://route-ecommerce.onrender.com/api/v1/auth/signup   `, userdata)
  }
  setlogin( userdata:object):Observable <any>
  {
    return this._HttpClient.post(` https://route-ecommerce.onrender.com/api/v1/auth/signin   `, userdata)
  }
}

