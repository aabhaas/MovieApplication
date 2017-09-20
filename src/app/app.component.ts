import { Component,ViewChild } from '@angular/core';
import { Http,Response } from '@angular/http';
import { MoviesService } from './searchMovie/searchmovie.service';
import {Router} from '@angular/router'
import {MovieSearchComponent} from './searchMovie/searchmovie.component'
@Component({
 selector: 'my-app',
 templateUrl: './app.component.html',
 styleUrls:['./app.component.css']
})
export class AppComponent  {
 
    constructor(private router:Router){}

 route(name){

    if(name!=''){
        console.log(name);
    this.router.navigate(['/connector', name])}
    else 
        alert("enter some text");
 }

}