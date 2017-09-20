import { Component,Output,EventEmitter } from '@angular/core';
import { MoviesService } from './searchmovie.service';
import { Http } from '@angular/http';
import { ActivatedRoute,ParamMap} from '@angular/router'

import 'rxjs/add/operator/switchMap';
@Component({
    selector: 'searchmovie',
    templateUrl: './searchmovie.component.html',
  // styleUrls:['./searchMovie.component.css'],
})


export class MovieSearchComponent  {
 title = 'Movies App';
constructor (private moviesSearchService:MoviesService,private route:ActivatedRoute){}
abc:string;
@Output() eventList:EventEmitter<any> = new EventEmitter();



    check_temp(temp:string):void
{
    if(temp != null)
    {
        this.moviesSearchService.show(temp).subscribe(abc => {
            console.log(abc)
            this.abc=abc});
            this.eventList.emit(this.abc);
            
                
        }
    
    
    else 
       alert("Please enter some text");
    
}
addFav(favMovie:any){
    this.moviesSearchService.addFav(favMovie)
}

}
