import {Component, OnInit} from '@angular/core';
import {IGenre} from "../../interfaces/genre";
import {MovieService} from "../../movies/services/movie.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  changeTheme() {
    let body = document.body
    body.classList.toggle('dark')
  }
}
