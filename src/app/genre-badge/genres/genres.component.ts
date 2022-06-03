import {Component, OnInit} from '@angular/core';
import {GenreService} from "../service/genre.service";
import {IGenre} from "../../interfaces/genre";
import {MovieService} from "../../movies/services/movie.service";
import {IResults} from "../../interfaces/movies";
import {urls} from "../../constants";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../movies/services/data.service";

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

  constructor(private genreService: GenreService, private movieService: MovieService,
              private route: ActivatedRoute, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.getGenre()
    this.urls = urls.image
    this.dataService.storage.subscribe(value => {
      this.movieList = value.results
      this.total = value.total_pages
    })
  }

  getGenre() {
    this.genreService.getAllGenre().subscribe((value) => {
        this.genres = value.genres;
      }
    )
  }

  pageChangeEvent(event: number) {
    this.currentPage = event;
    this.dataService.currentPage = event;
    this.dataService.currentPage = 1
    this.movieService.getAllFilms(event, this.dataService.genreId).subscribe(value => {
        this.dataService.storage.next(value)
      }
    )
  }

  withGenre(id: string) {
    this.dataService.genreId = id
    this.currentPage = 1
    this.movieService.getAllFilms(this.dataService.currentPage, id).subscribe(value => {
      this.dataService.storage.next(value)
    })
  }
}
