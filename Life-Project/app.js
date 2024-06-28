const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');

const apiRestFulResSender = require('./routes/api_restful_resources_sender');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const menuRouter = require('./routes/menu');
const compression = require("compression");
const helmet = require("helmet");
const cookieSession = require("cookie-session");


const app = express();
const RateLimit = require("express-rate-limit");
const configs = require("./configs/index");
app.set('trust proxy', 1);
app.use(compression());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);
//connect mongoose to database
// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = configs.DB.DB_URL;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const staticFolder = './public';
let numFiles;

app.use(
  cookieSession({
    name: "library-session",
    keys: [configs.COOKIE_SESSION.SECRET_KEY],
    httpOnly: true
  })
);
app.use(function (req, res, next){
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use('/', (req, res, next) => {
    fs.readdir('./public', (err, files) => {
        if (err) {
            console.error('Erro ao ler a pasta:', err);
	    next(); return;
        }
        const numFiles = files.length;
        console.log(`Number of files: ${numFiles}`);
        next();
    });
});

app.use('/', indexRouter);
app.use('/api-restful-resources-sende', apiRestFulResSender);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/menu', menuRouter);

const numPageChanges = numFiles * 6/* número de mudanças */;
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: numPageChanges,
});
app.use(limiter);
console.log(`Number of files: ${numPageChanges }`);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
