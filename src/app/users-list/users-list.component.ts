import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UsersListService } from './users-list.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  public users: Array<User>;

  constructor(private userListService: UsersListService) {}

  async ngOnInit() {
    this.userListService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
