const fetch = require("cross-fetch");

exports.post = function (request, response) {
    console.log("Run POST");
    console.error(request.body);
    let Bot_token = "2119917939:AAEYCbWZOirkT1zO7fks0rs9TurW1hMBPaE";
    let chat_id = "292650829";

    let txt =  encodeURI("name: " + request.body.name + "\n" + "body: " + request.body.body + "\n" + "tel: " + request.body.tel);
    let url = "https://api.telegram.org/bot" + Bot_token + "/sendMessage?chat_id=" + chat_id + "&text=" + txt;
    console.log(url);

    // fetch(url)
    //     .then(res => {
    //         console.log(res);
    //         response.send(res);
    //     })

    //     .catch(err => {
    //         console.log(err);
    //         response.send(err);
    //     });

    fetch(url)
		.then(res => {
			console.log(res);

		})
		.then()
		.catch()


        response.send(request.body);
}