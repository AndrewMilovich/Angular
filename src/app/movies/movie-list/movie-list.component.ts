import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../services/movie.service";
import {IResults} from "../../interfaces/movies";
import {urls} from "../../constants";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../services/data.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: IResults[]
  urls: string;
  currentPage: number;
  total: number;
  searchString = ''
  form: FormGroup;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    this._createForm()
    this.getDataFilm()
    this.urls = urls.image
  }


  getDataFilm() {
    this.dataService.storage.subscribe((value) => {
        this.movieList = value.results
        this.currentPage = value.page
        this.total = value.total_pages
      }
    )
  }

  getFilmByName() {
    let {searchString} = this.form.getRawValue();
    this.searchString = searchString
    this.movieService.getFilmByName(searchString, this.currentPage).subscribe((value) => {
      this.dataService.storage.next(value)
    })
    this.form.reset()
  }

  _createForm(): void {
    this.form = new FormGroup({
      searchString: new FormControl(null),
    })
  }

  pageChangeEvent(event: number) {
    this.currentPage = event;
    this.dataService.currentPage = event

    if (this.searchString === '') {
      this.movieService.getAllFilms(event, '').subscribe(value => {
        this.dataService.storage.next(value)
      })
    }
    this.movieService.getFilmByName(this.searchString, event).subscribe((value) =>
      this.dataService.storage.next(value)
    )
  }


}
