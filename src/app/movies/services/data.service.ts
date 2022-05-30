import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IGenre} from "../../interfaces/genre";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storage = new BehaviorSubject<IGenre>({id: 0, name: ''})

  constructor() {
  }
}
