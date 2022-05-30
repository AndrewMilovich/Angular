import {Component, OnInit} from '@angular/core';
import {GenreService} from "../../genre-badge/service/genre.service";
import {IGenre} from "../../interfaces/genre";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  genreBadge: IGenre | any
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
