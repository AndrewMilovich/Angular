import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICar} from "../../../models/car";
import {Observable} from "rxjs";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private  http:HttpClient) {
  }

  getAll(): Observable<ICar[]> {
    return this.http.get<ICar[]>(urls.cars);
  }

  getById(id: number): Observable<ICar> {
    return this.http.get<ICar>(`${urls.cars}/${id}`);
  }

  create(car: ICar): Observable<ICar> {
    return this.http.post<ICar>(urls.cars, car);
  }

  update(id: number | undefined, car: Partial<ICar>,): Observable<ICar> {
    return this.http.patch<ICar>(`${urls.cars}/${id}`, car);
  }

  deleteById(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${urls.cars}/${id}`)
  }
}
