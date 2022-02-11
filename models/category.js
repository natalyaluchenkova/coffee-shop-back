// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Category = new Schema({
    name: String,
    nameStr: String,
    image: String,
    subCat: []    
});

// Экспортируем модель
module.exports = mongoose.model("Category", Category);