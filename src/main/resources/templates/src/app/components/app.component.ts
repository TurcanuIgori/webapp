/**
 * Created by igori on 3/8/17.
 */
import { Component } from '@angular/core';
import {BooksComponent} from "./books.component";
import {BookService} from "../services/book.service";

@Component({
  selector: 'my-app',
  templateUrl: `app/templates/app-component.html`,
  directives: [BooksComponent],
  providers: [BookService]
})
export class AppComponent  {
  name = 'Administrator';
}

