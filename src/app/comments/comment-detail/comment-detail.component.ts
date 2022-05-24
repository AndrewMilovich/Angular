import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentsInterface} from "../../models/comments.interface";
import {CommentService} from "../comment-service/comment.service";

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  commentDetails: CommentsInterface

  constructor(private activatedRouted: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouted.data.subscribe(({commentDetail}) => this.commentDetails = commentDetail)

  }
}
