import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {FavouriteMovie} from '../FavouriteMovie';

@Injectable()
export class MoviesService {
favMovie : FavouriteMovie={posterPath:"post",
    releaseDate: "rel",
    orignalTitle:"title"};
    constructor (private http:Http) {}
    show(temp:string) {
        return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=6bdcee6144d0ba0fe7f1da4c4175b340&query='+temp)
        .map(response =>response.json());
    }

addFav(favouriteMovie:any){
    console.log(favouriteMovie.poster_path);
    console.log(favouriteMovie.release_date);
    console.log(favouriteMovie.original_title);

    this.favMovie.posterPath="http://image.tmdb.org/t/p/w300"+favouriteMovie.poster_path;

    this.favMovie.releaseDate= favouriteMovie.release_date;
    this.favMovie.orignalTitle=favouriteMovie.original_title;

    this.http.post('http://localhost:60384/api/values',this.favMovie,{
        headers:new Headers({'Content-Type':'application/json'})
}).subscribe();
    }
}
