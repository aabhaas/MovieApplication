import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import {Router} from '@angular/router'
import{LoginService} from './login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginDetail:any ={}
result;
  constructor(private logInService:LoginService,private router: Router) { }
 
  ngOnInit() {
  }
  
  validate(email,password){


this.loginDetail.EmailId=email;
this.loginDetail.password=password
this.result = this.logInService.validate(this.loginDetail).subscribe(result =>
{
  
  if(result["_body"]=="successful"){
    this.router.navigate(['']);
  }
  else{
    alert(result["_body"]);
  }
});
  }
}
