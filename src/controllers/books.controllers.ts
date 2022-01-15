import {Request, Response} from 'express';

class BooksController {

    public index (req: Request, res: Response): void {
        res.render('books/index', {title: 'book'})
    }

    public renderBook (req: Request, res: Response): void {
        res.render('books/add', {title: 'add a book'})

    }

}

export const bookscontroller = new BooksController();