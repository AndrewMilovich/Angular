import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUserDetail} from "../../models/userDetail";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetailObj: IUserDetail

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value =>
     this.userDetailObj= history.state.data
    )
  }

}
