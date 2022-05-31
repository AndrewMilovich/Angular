import {Component, OnInit} from '@angular/core';
import {GenreService} from "../service/genre.service";
import {IGenre} from "../../interfaces/genre";
import {MovieService} from "../../movies/services/movie.service";
import {IMovie, IResults} from "../../interfaces/movies";
import {urls} from "../../constants";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genreBadge: IGenre | any
  genres: IGenre[]
  movieList: IResults[]
  urls: string;
  genreId: string
  currentPage: number;
  total: number;

  constructor(private genreService: GenreService, private movieService: MovieService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = this.route.params
    console.log(id);
    this.getGenre()
    this.getGenreFilm()
    this.urls = urls.image
  }

  getGenre() {
    this.genreService.getAllGenre().subscribe((value) => {
        this.genreBadge = value;
        this.genres = this.genreBadge.genres
      }
    )
  }

  getGenreFilm() {
        this.movieService.getAllFilms(this.currentPage, this.genreId).subscribe((value) => {
          this.movieList = value.results;
          this.currentPage = value.page
          this.total = value.total_pages
        })
  }




  pageChangeEvent(event: number) {
    this.currentPage = event;
    this.getGenreFilm();
  }
}
