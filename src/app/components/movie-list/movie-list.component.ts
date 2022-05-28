import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {IMovie, IResults} from "../../models/movies";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: IMovie[] | IMovie | any
results:IResults[]
  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getAllFilms().subscribe((value) => {
      this.movieList = value;
      console.log(this.movieList.results);
      this.results = this.movieList.results
    })
  }
}
