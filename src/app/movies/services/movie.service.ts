import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMovie} from "../../interfaces/movies";
import {urls} from "../../constants";
import {Observable} from "rxjs";
import {IMovieDetailInterface} from "../../interfaces/movie-detail";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getAllFilms(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(urls.movies)
  }

  getMovieById(id: string): Observable<IMovieDetailInterface> {
    return this.http.get<IMovieDetailInterface>(urls.movie + `${id}?api_key=9d15905010c06db187e7f83aec2cef70`)
  }

}
