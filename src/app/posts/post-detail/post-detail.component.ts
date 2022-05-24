import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostInterface} from "../../models/post.interface";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  postDetail: PostInterface

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({postData}) => this.postDetail = postData);
  }
}
