import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CommentsInterface} from "../../../models/comments.interface";
import {CommentService} from "../comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<CommentsInterface[]> {
  constructor(private commentsService: CommentService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentsInterface[]> | Promise<CommentsInterface[]> | CommentsInterface[] {
    return this.commentsService.getComments();
  }

}
