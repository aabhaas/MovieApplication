import { Component, OnInit } from '@angular/core';
import {FavMovieService} from './fav-movie.service'
@Component({
  selector: 'app-fav-movie',
  templateUrl: './fav-movie.component.html',
  styleUrls: ['./fav-movie.component.css'],
  providers :[FavMovieService]
})
export class FavMovieComponent implements OnInit {
favMovie:any=[];
  constructor(private favMovieService:FavMovieService) {
    this.getFavMovie();
   }
 
  ngOnInit() {

  }
  getFavMovie(){
      this.favMovieService.getFavMovie().subscribe(favMovie=>this.favMovie=favMovie);
  }

  delete(fav){
    this.favMovieService.delete(fav);   
    const favIndex = this.favMovie.indexOf(fav);
    this.favMovie.splice(favIndex,1);
  }
  addReview(fav,review){
   this.favMovieService.addReview(fav,review);
  }
}
