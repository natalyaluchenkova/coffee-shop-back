// подключить модель для сущности
const product = require("../models/product");
// Create => POST
exports.post = function (request, response) {
    console.log("Run POST");
    const element = new product(request.body);
    element.save(function (err) {
        if (err) {
            console.log(err);
            response.json(err);
            return;
        }
        return response.json(element);
    });
}

// Read => GET
exports.get = function (request, response) {
    console.log("Run GET");
    product.find({},
        function (err, allData ) {
            if (err){
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}

// Read => GET
exports.getById = function (request, response) {
    let id = request.params.id;
    console.log("Run GET");
    product.findById(id,
        function (err, allData ) {
            if (err){
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}

// Update => PUT
exports.put = function (request, response) {
    console.log("Run PUT");
}

// Delete => DELETE
exports.delete = function (request, response) {
    console.log("Run DELETE");
}

exports.autocomplete = function (request, response) {
    const searchString = request.query.searchString;
    // /api/product?searchString=Samsung
    console.log("searchString: " + searchString);
    if(searchString.length < 2) {
        response.json([]);
        return;
    }
    product.find({slug: {$regex:searchString, "$options" : "-i" }},
        function (err, allData ) {
            if (err){
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}

exports.getByCategory = function (request, response) {
    const categoryName = request.params.categoryName;
    console.log("categoryName: " + categoryName);
    product.find({category: categoryName},
        function (err, allData ) {
            if (err){
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}

exports.getBySubCategory = function (request, response) {
    const subCategoryName = request.params.subCategoryName;
    console.log("categoryName: " + subCategoryName);
    product.find({subCategory: subCategoryName},
        function (err, allData ) {
            if (err){
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}

exports.getBySale = function (request, response) {
    console.log("Get Sale");
    product.find({sale: "sale"},
        function (err, allData ) {
            if (err){
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}

// exports.getByNew = function (request, response) {
//     console.log("Get New");
//     product.find({new: "new"},
//         function (err, allData ) {
//             if (err){
//                 console.log(err);
//                 response.json(err);
//                 return;
//             }
//             response.json(allData);
//         }
//     );
// }

// exports.getByPopular = function (request, response) {
//     console.log("Get Popular");
//     product.find({popular: "popular"},
//         function (err, allData ) {
//             if (err){
//                 console.log(err);
//                 response.json(err);
//                 return;
//             }
//             response.json(allData);
//         }
//     );
// }
// Я сообщу наружу поля, по которым можно построить фильтр
// Их типы, названия и доступные параметры
// Для движков обычно возвращает набор в зависимости от ID категории

// получить параметры фильтрации и отдать продукты с их учетом
exports.getByFields = function (request, response) {
    response.send("Ok");
}