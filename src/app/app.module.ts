import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import {MoviesService} from './searchMovie/searchmovie.service';
import {MovieSearchComponent} from './searchMovie/searchmovie.component'
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule,Route} from '@angular/router';
import {LoginService} from './login/login.service'
//import { AppRoutingModule }     from './app-routing.module';
import {ListMovieComponent} from './listMovie/ListMovie.component';
import { FavMovieComponent } from './fav-movie/fav-movie.component';
import {FavMovieService} from './fav-movie/fav-movie.service';
import { ConnectorComponent } from './connector/connector.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
   
    ListMovieComponent,
    FavMovieComponent,
    ConnectorComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   
  
    NgxPaginationModule,
    RouterModule.forRoot([
    
    {path:'',component:MovieSearchComponent},
    {path:'movie/:value',component:MovieSearchComponent},
    {path:'favMovie',component:FavMovieComponent},
    {path:'connector/:value',component:ConnectorComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
    
     ])
    ],
  providers: [MoviesService,FavMovieService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
