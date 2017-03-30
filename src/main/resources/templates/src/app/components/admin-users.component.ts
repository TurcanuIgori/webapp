import {Component, OnInit} from "@angular/core";
import {User} from "../models/user";
import {UserService} from "../services/users.service";
/**
 * Created by Igor on 3/28/2017.
 */
@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/admin-users.html',
  providers: [UserService],
})
export class AdminComponent implements OnInit{

  username: "ADMIN";
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.users = this.userService.getUsers();
  }
}
