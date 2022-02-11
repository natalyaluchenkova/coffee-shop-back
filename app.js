var express = require('express');
var app = express();

// Добавим модуль для разборки тела запроса
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

// Для проверки запросов
var cors = require('cors');
app.use(cors());

// Для ведения логов
var logger = require('morgan');
app.use(logger('dev'));

// Для куков
var cookieParser = require('cookie-parser');
app.use(cookieParser());

// Разрешение забирать статические файлы из папки
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// С файлами
const multer = require("multer");
// Сообщим верменную папку для хранения файлов
app.use(multer({dest: "public/upload"}).single("fileData"));

// Маршруты
const apiRoute = require("./routes/apiRouter");
app.use(apiRoute);


if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, 'public')));

    app.get('*', (req, res) => {

        res.sendFile(path.resolve(__dirname, 'public', 'index.html'));

    });

}

module.exports = app