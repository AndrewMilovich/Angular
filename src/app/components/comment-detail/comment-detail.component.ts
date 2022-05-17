import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentsInterface} from "../../models/comments.interface";

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
    this.activatedRouted.params.subscribe(value =>
      this.commentDetails = history.state.data)
  }

}
