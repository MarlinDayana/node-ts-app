"use strict";
//const express = require('express');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// inicializaciones 
const app = (0, express_1.default)();
// setting
app.set('port', 3000);
// middlewares
// routes 
// static files
// startting the server 
app.listen(app.get('port'), () => {
    console.log(`server listening on ${app.get('port')}`);
});
