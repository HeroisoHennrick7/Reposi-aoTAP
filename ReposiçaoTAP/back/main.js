const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


//mongoose.connect('mongodb://localhost/mongorep');
mongoose.connect(process.env.DB_URL);  



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/cursos', require('./controllers/curso_controller'));
app.listen(parseInt(process.env.PORT_SERVER), () =>{
    console.log(`O servidor esta no ar em http://localhost:${process.env.PORT_SERVER}`);
    });


