import {Request, Response} from 'express';


class Indexcontroller {

public index (req:Request, res:Response) { 
    res.render('index', {title:'welcome the books app'})};
}


export const indexController = new Indexcontroller