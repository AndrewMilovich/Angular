import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostInterface} from "../models/post.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<PostInterface[]> {
    return this.http
      .get<PostInterface[]>(this.url)
  }

  getPost(id: number): Observable<PostInterface> {
    return this.http
      .get<PostInterface>(this.url + '/' + id)
  }
}
