import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../../models/user.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserInterface[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({usersData}) => this.users= usersData)
  }

  ngOnInit(): void {

  }

}
