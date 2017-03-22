import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BooksComponent} from '../components/books.component';
import { FormsModule }   from '@angular/forms';
import {BookDetailComponent} from "../components/book-detail.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        BooksComponent,
        BookDetailComponent
    ],
    bootstrap: [BooksComponent]
})
export class booksModule{}