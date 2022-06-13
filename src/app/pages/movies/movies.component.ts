import { Component, OnInit } from '@angular/core';
import { moviesInterface } from 'src/app/models/movies.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
public moviesList: moviesInterface[] = [];
  constructor(public movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data:any) => {
      const moviesAPI: moviesInterface[] = data.map((movie:any) =>(
        {
          image: movie.image,
          title: movie.original_title,
          title2: movie.title,
          year: movie.release_date,
          description: movie.description,
          director: movie.director,
        }));
        this.moviesList = moviesAPI;
    })

  }

}
