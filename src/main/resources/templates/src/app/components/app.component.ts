/**
 * Created by igori on 3/8/17.
 */
import { Component } from '@angular/core';
import {BooksComponent} from "./books.component";
import {BookService} from "../services/book.service";

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  directives: [BooksComponent],
  providers: [BookService]
})
export class AppComponent  { name = 'Igor'; }

