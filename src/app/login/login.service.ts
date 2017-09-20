import { Injectable } from '@angular/core';
import {Http,Headers,}   from '@angular/http';
 
@Injectable()
export class LoginService {

  result:any="";
  constructor(private http :Http) { }

  validate(loginDetails){
  return  this.http.post('http://localhost:60384/api/user',loginDetails,{
      headers:new Headers({'Content-Type':'application/json'})
  });
  
}
}
