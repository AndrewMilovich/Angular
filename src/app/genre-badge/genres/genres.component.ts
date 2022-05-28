import {Component, OnInit} from '@angular/core';
import {GenreService} from "../service/genre.service";
import {IGenre} from "../../interfaces/genre";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genreBadge: any
  genres: IGenre[]

  constructor(private genreService: GenreService) {
  }

  ngOnInit(): void {
    this.genreService.getAllGenre().subscribe((value) => {
        this.genreBadge = value;
        this.genres = this.genreBadge.genres
      }
    )
  }
}
