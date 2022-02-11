// let express = require('express');
// let router = express.Router();

// let cProduct = require('./../controllers/controllerProduct');
// let fillProduct = require('./../controllers/fillProduct');
// let cCategory = require('./../controllers/controllerCategory');


// router.get('/api/product/seed',fillProduct.seed); // Для наполнения базы

// router.get ('/api/product',cProduct.get);
// router.get ('/api/product/byid/:id',cProduct.getById);
// router.post('/api/product',cProduct.post);
// router.put('/api/product',cProduct.put);
// router.delete('/api/product',cProduct.delete);
// router.get('/api/product/autocomplete',cProduct.autocomplete); // Для автозаполнения формы
// router.get('/api/product/byfields',cProduct.getByFields); // Для получения товаров, соответствующих условиям фильтра
// router.get('/api/product/category/:categoryName',cProduct.getByCategory);
// router.get('/api/product/subcategory/:subCategoryName',cProduct.getBySubCategory);
// router.get('/api/product/sale',cProduct.getBySale);
// // router.get('/api/product/popular',cProduct.getByPopular);

// router.get('/api/category/seed',cCategory.seed)
// router.get('/api/category/getcategory',cCategory.getCategory); // Для получения доступных полей фильтра
// router.get('/api/category/getcategory/:name',cCategory.getCategoryByName);
// //let cFiles = require('./controllers/fileController');
// //router.post('/api/files', cFiles.createFile);

// let cMailer = require('../controllers/MailController');
// router.post('/api/sendmail', cMailer.nodemailer);

// let cTelegram = require('../controllers/SendTelegram')
// router.post('/api/sendTelegram',cTelegram.post);

// module.exports = router;

let express = require('express');
let router = express.Router();

let cProduct = require('./../controllers/controllerProduct');
let fillProduct = require('./../controllers/fillProduct');
let cCategory = require('./../controllers/controllerCategory');

router.get('/api/product/seed',fillProduct.seed); // Для наполнения базы

router.get ('/api/product',cProduct.get);
router.get ('/api/product/byid/:id',cProduct.getById);
router.post('/api/product',cProduct.post);
router.put('/api/product',cProduct.put);
router.delete('/api/product',cProduct.delete);
router.get('/api/product/autocomplete',cProduct.autocomplete); // Для автозаполнения формы
router.get('/api/product/byfields',cProduct.getByFields); // Для получения товаров, соответствующих условиям фильтра
router.get('/api/product/category/:categoryName',cProduct.getByCategory);
router.get('/api/product/subcategory/:subCategoryName',cProduct.getBySubCategory);
router.get('/api/product/sale',cProduct.getBySale);


router.get('/api/category/seed',cCategory.seed)
router.get('/api/category/getcategory',cCategory.getCategory); // Для получения доступных полей фильтра
router.get('/api/category/getcategory/:name',cCategory.getCategoryByName);
//let cFiles = require('./controllers/fileController');
//router.post('/api/files', cFiles.createFile);

let cMailer = require('../controllers/MailController');
router.post('/api/sendmail', cMailer.nodemailer);

let cTelegram = require('../controllers/SendTelegram')
router.post('/api/sendTelegram',cTelegram.post);

module.exports = router;