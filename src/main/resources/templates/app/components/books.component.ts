import {Component, OnInit} from '@angular/core';
import {Book} from '../models/book'
import {BookService} from "../services/book.service";

@Component({
    selector: 'books',
    templateUrl: `app/templates/books.html`,
    styleUrls: [`app/templates/style.css`],
    providers: [BookService],
})
export class BooksComponent implements OnInit{

    books: Book[];
    selectedBook: Book;

    constructor(private _bookService: BookService){}

    ngOnInit(): void {
        this.getBooks();
    }

    getBooks(){
        this.books = this._bookService.getBooks()
    }

    onSelect(book: Book){
        this.selectedBook=book;
        console.log(book);
    }
}
