var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var configDB = require('../mongodb/mongodb.json');
const connect = mongoose.connect(
  configDB.mongo.uri ,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log('connected to db'));



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var osRouter = require('./routes/os');
const router = require('./routes/products');
var Contactrouter = require('./routes/contact');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/info', osRouter);
app.use('/products', router);
app.use('/contact', Contactrouter);





app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Start server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



module.exports = app;
