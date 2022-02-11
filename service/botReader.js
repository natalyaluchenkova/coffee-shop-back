const fetch = require("cross-fetch");
let offset = 0;

exports.listenTGBot = function () {
    console.log("Go To TG");

    let Bot_token = "2119917939:AAEYCbWZOirkT1zO7fks0rs9TurW1hMBPaE";
    let my_chat_id = "292650829";

    let url = "https://api.telegram.org/bot" + Bot_token;



    fetch(url + "/getUpdates?offset=" + offset)
        .then(res => {
            // console.log(res);
            return res.json();
        })
        .then(json => {
            console.log(json);
            if (json.ok === false) return; //    выйти если ничего нет
            if (json.result.length > 0){
                console.log("New Msg");
                for(let i = 0; i < json.result.length; i++ ){
                    // чтобы не повторяться    - я сохраняю номер последнего сообщения
                    offset = 1 + json.result[i].update_id; // запомнить последнее сообщение

                    //  - получаю кто прислал
                    let chat_id = json.result[i].message.from.id;
                    let first_name = json.result[i].message.from.first_name;
                    let msg = decodeURI(json.result[i].message.text);

                    // тут можно описать, что хочет пользователь и подготовить ему ответ
                    let text = encodeURI( "Hello");

                    // посылаю ответ
                    fetch(url + "/sendMessage?chat_id=" + chat_id + "&text=" + text)
                        .catch(err =>console.log(err));

                    // посылаю сообщение себе
                    let MyText = encodeURI( "user " + first_name +" send msg: \n" + msg);
                    fetch(url + "/sendMessage?chat_id=" + my_chat_id + "&text=" + MyText)
                        .catch(err =>console.log(err));
                }
            }
        })
        .catch( err => {
            console.log(err);
        });

}