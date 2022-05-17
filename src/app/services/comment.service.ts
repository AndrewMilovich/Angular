import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentsInterface} from "../models/comments.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<CommentsInterface[]> {
    return this.http
      .get<CommentsInterface[]>(this.url)
  }
}
