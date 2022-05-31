import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../services/movie.service";
import {IMovie, IResults} from "../../interfaces/movies";
import {urls} from "../../constants";
import {DataService} from "../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: IResults[]
  urls: string;

  genreId: string

  currentPage: number;
  total: number;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.getFilms()
    this.urls = urls.image
  }

 getGenreFilm(){
   this.route.params.subscribe(({id}) => {
       this.movieService.getAllFilms(this.currentPage, id).subscribe((value) => {
         this.movieList = value.results;
         this.currentPage = value.page
         this.total = value.total_pages
       })
     }
   )
 }


  getDataFilm(){
    this.dataService.storage.subscribe((value) => {
        this.movieList = value.results
     this.currentPage = value.page
      this.total = value.total_pages
      }
    )
  }

  getFilms() {
    this.movieService.getAllFilms(this.currentPage, '').subscribe((value) => {
      this.movieList = value.results;
      this.currentPage = value.page
      this.total = value.total_pages

    })
  }



  pageChangeEvent(event: number) {
    this.currentPage = event;
    this.getFilms()
  }
}
