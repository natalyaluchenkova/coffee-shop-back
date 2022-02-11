const nodemailer = require('nodemailer');

class MailService {

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: "smtp.ukr.net",
			port: 465,
			secure: true,
			auth: {
				user: "f11natalya@ukr.net",
				pass: "UkvLNqwXWGfmBxsA"
			}
		})
	}


	async sendMail(to) {
		await this.transporter.sendMail({
			from: "f11natalya@ukr.net",
			to,
			subject: 'Подписка на рассылку',
			// text: message,
			html:
				`
					<div>
						<h1>Miller Coffee Shop</h1>
						<p>Спасибо, что подписались на рассылку!</p>
					</div>
				`
		})
	}
}


module.exports = new MailService();