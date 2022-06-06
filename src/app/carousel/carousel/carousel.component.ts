import {Component, OnInit} from '@angular/core';
import {DataService} from "../../movies/services/data.service";
import {IResults} from "../../interfaces/movies";
import {urls} from "../../constants";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private dataService: DataService) {
    this.itemsPerSlide = this.mobileDevice() ? 2 : 5;
  }

  movieList: IResults[]
  urls: string
  itemsPerSlide: number;

  ngOnInit(): void {
    this.GetFilms()
    this.urls=urls.image
  }

  GetFilms() {
    this.dataService.storage.subscribe(value => this.movieList = value.results)
  }

  mobileDevice(): boolean {
    return !!(navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i));
  }
}
