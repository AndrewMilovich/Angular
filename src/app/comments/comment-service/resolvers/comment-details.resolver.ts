import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {CommentsInterface} from "../../../models/comments.interface";
import {CommentService} from "../comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentDetailsResolver implements Resolve<CommentsInterface> {
  constructor(private commentsService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentsInterface> | Promise<CommentsInterface> | CommentsInterface {
    let id = route.params['id']
    return this.commentsService.getCommentById(id);
  }

}
