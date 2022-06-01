import {Component, OnInit} from '@angular/core';
import {GenreService} from "../service/genre.service";
import {IGenre} from "../../interfaces/genre";
import {MovieService} from "../../movies/services/movie.service";
import { IResults} from "../../interfaces/movies";
import {urls} from "../../constants";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: IGenre[]
  movieList: IResults[]
  urls: string;
  currentPage: number;
  total: number;
  id:number

  constructor(private genreService: GenreService, private movieService: MovieService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getGenre()
    this.getGenreFilm()
    this.urls = urls.image

  }

  getGenre() {
    this.genreService.getAllGenre().subscribe((value)=> {
     this.genres = value.genres;
      }
    )
  }

  getGenreFilm() {
    this.route.url.subscribe(value => {
      this.movieService.getAllFilms(this.currentPage, 18).subscribe((value) => {
        this.movieList = value.results;
        this.currentPage = value.page
        this.total = value.total_pages
      })
    })
  }

  pageChangeEvent(event: number) {
    this.currentPage = event;
    this.getGenreFilm();
  }
}
