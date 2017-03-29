import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {AppComponent} from "../components/app.component";
import {BooksComponent} from "../components/books.component";
import {BookDetailComponent} from "../components/book-detail.component";
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
  },{
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        BooksComponent,
        BookDetailComponent
    ],
    bootstrap: [AppComponent]
})
export class booksModule{}
