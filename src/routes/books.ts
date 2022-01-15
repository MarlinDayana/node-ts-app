import {Router} from 'express';

import {bookscontroller} from '../controllers/books.controllers'

const router = Router();

router.get('/', bookscontroller.index);

router.get('/add', bookscontroller.renderBook)



export default router;