import {Component, OnInit} from '@angular/core';
import {Book} from '../models/book'
import {BookService} from "../services/book.service";
import {BookDetailComponent} from "./book-detail.component";

@Component({
    selector: 'books',
    templateUrl: `app/templates/books.html`,
    styleUrls: [`app/templates/style.css`],
    directives: [BookDetailComponent]
})
export class BooksComponent implements OnInit{

    books: Book[];
    selectedBook: Book;

    constructor(private bookService: BookService){}

    ngOnInit(): void {
        this.getBooks();
    }

    getBooks(){
        this.books = this.bookService.getBooks()
    }

    onSelect(book: Book){
        this.selectedBook=book;
        console.log(book);
    }
}
