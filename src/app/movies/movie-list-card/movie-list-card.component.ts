import {Component, OnInit} from '@angular/core';
import {MovieService} from "../services/movie.service";
import {IMovieDetailInterface} from "../../interfaces/movie-detail";
import {ActivatedRoute} from "@angular/router";
import {urls} from "../../constants";

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.css']
})
export class MovieListCardComponent implements OnInit {
  movieDetail: IMovieDetailInterface
  urls: string;

  constructor(private moviesService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({movieListCard}) =>
      this.movieDetail = movieListCard
    );
    this.urls = urls.image
    // this.activatedRouted.data.subscribe(({commentDetail}) => this.commentDetails = commentDetail)
  }

}
