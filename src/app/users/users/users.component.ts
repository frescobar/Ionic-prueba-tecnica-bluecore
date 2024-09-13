import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent  implements OnInit {

  users: any[] = [];
  selectedUser: any = null;
  showModal = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  openUserDetail(user: any) {
    this.selectedUser = user;
    this.showModal = true;
  }

}
