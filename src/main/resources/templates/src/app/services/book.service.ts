/**
 * Created by igori on 3/8/17.
 */
import {Injectable} from '@angular/core';
import {books} from './mock-books';

@Injectable()
export class BookService {
    getBooks() {
        return books;
    }
}