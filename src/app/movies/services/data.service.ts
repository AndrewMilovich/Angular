import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IGenre} from "../../interfaces/genre";
import {MovieService} from "./movie.service";
import {IMovie} from "../../interfaces/movies";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  storage = new BehaviorSubject<IMovie>({page: 1, total_pages: 0, results: []})
  genreId: string
  currentPage: number

  constructor(private movieService: MovieService) {
    this.setStorage()
  }

  setStorage() {
    this.movieService.getAllFilms(this.currentPage, this.genreId).subscribe(value => {
        this.storage.next(value)
        this.currentPage = value.page
      }
    )
  }

}
