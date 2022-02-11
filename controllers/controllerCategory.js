const category = require("../models/category");

exports.seed = function (request, response) {
      category.deleteMany({}, function(err) {
          if (err) {
              console.log(err)
          } else {
              console.log("Delete many OK");
              //res.end('success');
          }
      });

    let one = new category();
    one.name = "Свежеобжаренный кофе";
    one.nameStr = "coffee";
    one.image = "/storage/category/catalog_beans.png";
    one.subCat = [
        {
            name : "Арабика",
            nameStr: "arabiсa",
            img: "/storage/category/arabica_rec.jpg"
        },
        {
            name: "Робуста",
            nameStr: "robusta",
            img: "/storage/category/robusta_rec.jpg"
        },
        {
            name:"Смесь арабики и робусты",
            nameStr: "arabiсa-robusta-blend",
            img: "/storage/category/mix_rec.png"
        }];
    one.save();
    let two = new category();
    two.name = "Чай и кофейные напитки";
    two.nameStr = "tea-coffee-drinks";
    two.image = "/storage/category/catalog_tea.png";
    two.subCat = [
        {name: "Черный чай",
            nameStr: "black-tea",
            img: "/storage/category/black_tea_sub.png"},
        {name: "Зеленый чай",
            nameStr: "grean-tea",
            img: "/storage/category/green_tea_sub.png"},
        {name: "Травяной чай",
            nameStr: "herbal-tea",
            img: "/storage/category/oolong_sub.png"}];
    two.save();
    let three = new category();
    three.name = "Продукция для вендинга";
    three.nameStr = "vending-products";
    three.image = "/storage/category/catalog_vending.png";
    three.subCat = [
            {name: "Гранулированный кофе",
                nameStr: "granulated-coffee",
                img: "/storage/category/vending_sub.png"},            
            {name: "Зерновой кофе",
                nameStr: "coffee-beans",
                img: "/storage/category/vending_sub.png"},            
            {name: "Кофе порошкообразный",
                nameStr: "powdered-coffee",
                img: "/storage/category/vending_sub.png"}];
    three.save();
    let four = new category();
    four.name = "Здоровое питание";
    four.nameStr = "healthy-food";
    four.image = "/storage/category/catalog_healthy.png";
    four.subCat = [
            {name: "Цикорий и корень цикория",
                nameStr: "chicory-root",
                img: "/storage/category/healthy_sub.png"},
            {name: "Ячменные напитки",
                nameStr: "barley-drinks",
                img: "/storage/category/healthy_sub.png"},                     
            {name: "Толокняные каши",
                nameStr: "oatmeal-porridge",
                img: "/storage/category/healthy_sub.png"}];
    four.save();
    
    response.send("Ok");
}
exports.getCategory = function (request, response) {
    console.log("Run GET");
    category.find({},
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
exports.getCategoryByName = function (request, response) {
    const name = request.params.name;
    category.find({nameStr: name},
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
