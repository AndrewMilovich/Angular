import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IMovieDetailInterface} from "../../../../interfaces/movie-detail";
import {MovieService} from "../../../services/movie.service";

@Injectable({
  providedIn: 'root'
})
export class MovieListCardResolver implements Resolve<IMovieDetailInterface> {
  constructor(private movieService:MovieService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieDetailInterface> | Promise<IMovieDetailInterface> | IMovieDetailInterface {
    let id = route.params['id']
    return this.movieService.getMovieById(id);
  }

}
