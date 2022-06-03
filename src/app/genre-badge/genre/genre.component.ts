import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../movies/services/data.service";
import {IGenre} from "../../interfaces/genre";
import {IResults} from "../../interfaces/movies";
import {urls} from "../../constants";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres: IGenre[]
  movieList: IResults[]
  urls: string;
  currentPage: number;
  total: number;
  genreId:number

  constructor(private dataService:DataService) {
  }

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => {
      this.urls=urls.image
      this.movieList = value.results
    })
  }

}
