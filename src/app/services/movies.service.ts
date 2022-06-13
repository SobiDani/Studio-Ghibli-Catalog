import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public moviesURL : string = "https://ghibliapi.herokuapp.com/films"
  constructor(private http: HttpClient ) { }

  public getMovies(){
    return this.http.get(this.moviesURL)
  }

}
