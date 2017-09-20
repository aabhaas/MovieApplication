import {  OnInit } from '@angular/core';
import { Component,ViewChild } from '@angular/core';
import { Http,Response } from '@angular/http';
import { MoviesService } from '../searchMovie/searchmovie.service';
import {Router} from '@angular/router'
import {MovieSearchComponent} from '../searchMovie/searchmovie.component'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';


@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.css']
})
export class ConnectorComponent implements OnInit {
  data:any;
  title ='Movie'
  constructor(private moviesearch:MoviesService,private router:Router,
    private route: ActivatedRoute,
    private location: Location) { }
  temp:string;





  ngOnInit() {
    this.route.params.subscribe(params => {
      this.temp = (params['value']);
      this.check_temp()
      
   });
   
   
  }
  public setdata(data){
    this.data =data;
}  


  @ViewChild (MovieSearchComponent) child : MovieSearchComponent;    
  check_temp()
  {
      console.log(this.temp);
      
      if(this.temp==null)
      {
          alert("enter some text");
              
          } 
      else
          this.child.check_temp(this.temp);
  
  }
}
