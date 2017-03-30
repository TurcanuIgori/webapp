import {Injectable} from "@angular/core";
import {users} from "./mock-users";
/**
 * Created by Igor on 3/28/2017.
 */

@Injectable()
export class UserService{
  getUsers() {
    return users;
  }
}
