import express from 'express';
//import exphbs from 'express-handlebars';
import { engine } from 'express-handlebars';
import path from 'path';


// importing routes 

import IndexRoutes from './routes';
import BooksRoutes from './routes'

// inicializaciones 
const app = express();


// setting
//app.engine('handlebars', engine());

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
   // defaultLayout: 'main',
    defaultLayout: 'main.hbs'
}));
app.engine('hbs', require('exphbs'));

app.set('view engine', 'hbs');





// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// routes 

app.use('/', IndexRoutes);
app.use('/books', BooksRoutes);
//app.get('/books', (req, res)=>res.send('Books'));

// static files
app.use(express.static(path.join(__dirname, 'public')));



// startting the server 

app.listen(app.get('port', ), () =>{
    console.log(`server listening on ${app.get('port')}`)
});



// https://github.com/FaztWeb/node-typescript-books - codigo fuente 