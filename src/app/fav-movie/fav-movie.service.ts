import { Injectable } from "@angular/core";
import { Http ,Headers} from "@angular/http";

@Injectable()
export class FavMovieService {
 
constructor(private http:Http){

}

    getFavMovie(){
        return this.http.get("http://localhost:60384/api/values").map(result=>result.json());

    }
  delete(fav){
       return this.http.delete("http://localhost:60384/api/values/"+fav.movie_id,
       {headers : new Headers({'Content-Type' : 'application/json'})}
    ).subscribe();
  }
addReview(fav,review){
    fav.review = review;
    return this.http.put("http://localhost:60384/api/values/"+fav.movie_id,fav,
    {headers : new Headers({'Content-Type' : 'application/json'})}
 ).subscribe();
}
}