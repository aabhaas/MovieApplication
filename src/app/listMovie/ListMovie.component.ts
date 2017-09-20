import {Component,OnInit,Input} from '@angular/core';

@Component({
    selector:'list-movie',
    templateUrl:'./ListMovie.component.html'
})
export class ListMovieComponent implements OnInit{
    value:any;
    @Input() movie:any;
    constructor() { }

    ngOnInit() {
        console.log(this.movie);
    }
    save(){
        console.log(this.movie);
    }    

}