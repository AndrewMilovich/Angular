import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMovie} from "../models/movies";
import {urls} from "../constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getAllFilms(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(urls.movies)

  }
}
