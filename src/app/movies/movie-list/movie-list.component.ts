import {Component, OnInit} from '@angular/core';
import {MovieService} from "../services/movie.service";
import {IMovie, IResults} from "../../interfaces/movies";
import {urls} from "../../constants";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: IMovie[] | IMovie | any
  results: IResults[]
  urls: string;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getAllFilms().subscribe((value) => {
      this.movieList = value;
      this.results = this.movieList.results
    })
    this.urls=urls.image
  }
}
