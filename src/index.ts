//const express = require('express');

import express from 'express';


// inicializaciones 
const app = express();


// setting

app.set('port', 4000)

// middlewares

// routes 

// static files


// startting the server 

app.listen(app.get('port', ), () =>{
    console.log(`server listening on ${app.get('port')}`)
});