// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Product = new Schema({
    name: String,    
    manufacturer: String,
    category: String,
    subCategory: String,
    slug: String,    
    sale: String,
    subCatName: String,    
    image: [],
    weight: [],
    price_action: Number,
    price_normal: Number,
    description: String,
    description_card: String,
    description_full: String,
    characteristics: [],
 });

// Экспортируем модель
module.exports = mongoose.model("Product", Product);