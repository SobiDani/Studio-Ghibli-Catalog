import { Component, Input, OnInit } from '@angular/core';
import { moviesInterface } from 'src/app/models/movies.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() public movie!: moviesInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
