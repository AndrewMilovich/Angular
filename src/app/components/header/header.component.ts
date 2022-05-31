import {Component, OnInit} from '@angular/core';
import {GenreService} from "../../genre-badge/service/genre.service";
import {IGenre} from "../../interfaces/genre";
import {FormControl, FormGroup} from "@angular/forms";
import {MovieService} from "../../movies/services/movie.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  genreBadge: IGenre | any
  genres: IGenre[]

  form: FormGroup;

  searchString: string

  constructor(private genreService: GenreService, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.getAllGenre()
    this._createForm()

  }

  getAllGenre() {
    this.genreService.getAllGenre().subscribe((value) => {
        this.genreBadge = value;
        this.genres = this.genreBadge.genres
      }
    )
  }

  // getFilmByName(name: string, currentPage: number) {
  //   const search = this.form.getRawValue();
  //   this.movieService.getFilmByName(search, 1)
  // }
  //
  // searchFilm(event: string) {
  //   this.searchString = event;
  //   this.getFilmByName('',1);
  // }

  _createForm(): void {
    this.form = new FormGroup({
      searchString: new FormControl(null),
    })
  }

}
