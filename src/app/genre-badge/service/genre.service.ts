import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IGenre} from "../../interfaces/genre";
import {urls} from "../../constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) {

  }

  getAllGenre(): Observable<IGenre[]> {
    return this.http.get<IGenre[]>(urls.genres)
  }
}
