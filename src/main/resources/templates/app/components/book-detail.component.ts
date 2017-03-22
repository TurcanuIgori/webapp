/**
 * Created by igori on 3/8/17.
 */
import {Component, Input} from '@angular/core';
import {Book} from "../models/book";

@Component({
    selector: "my-book-detail",
    templateUrl: `app/templates/details-book.html`,
})
export class BookDetailComponent{
    @Input()
    book: Book;
}
