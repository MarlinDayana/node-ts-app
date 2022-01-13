//const express = require('express');

import express from 'express';


// inicializaciones 
const app = express();


// setting

app.set('port', process.env.PORT || 3000)

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// routes 

// static files


// startting the server 

app.listen(app.get('port', ), () =>{
    console.log(`server listening on ${app.get('port')}`)
});