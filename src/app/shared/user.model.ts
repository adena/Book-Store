import { Book } from './book.model';

export class User {
    email: string;
    password: string;
    role: string;
    cart: Array<Book>;
}