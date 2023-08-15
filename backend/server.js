const express = require('express');
const morgan=require('morgan');

const app = express();

app.set('port', process.env.SERVER_PORT);
app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require('./src/routes/index'));

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});