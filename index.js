const TelegramBot = require('node-telegram-bot-api');
const token = '5998023665:AAGTY724U3MY_dwLOm3oJBwQRDipXt0j_Ig';
const webAppTest = "https://astonishing-sopapillas-f5bef1.netlify.app/";
const webAppGame = "https://games.mihailgok.ru";
const webApp = "https://astonishing-sopapillas-f5bef1.netlify.app/";
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
	const text = msg.text;

	if(text === '/start') {
		await bot.sendMessage(chatId, 'Привет, я бот для проверки телеграмм webapps!)\nЗапустить тестовые страницы можно нажав на кнопки.', 
		{
			reply_markup: {
				inline_keyboard: [
					[{text: 'Веб приложение', web_app: {url: webApp}}]
				]
			}
		});
		await bot.sendMessage(chatId, 'Ниже появится кнопка "Тестовая страница"', 
		{
			reply_markup: {
				keyboard: [
					[{text: 'Тестовая страница', web_app: {url: webAppTest}}],
					[{text: 'Игра', web_app: {url: webAppGame}}]
				]
			}
		});
	}
	if(msg?.web_app_data?.data) {
		try {
				const data = msg?.web_app_data?.data
				await bot.sendMessage(chatId, 'Спасибо за обратную связь!');
				await bot.sendMessage(chatId, 'Ваша сообщение: ' + data);

				setTimeout(async () => {
						await bot.sendMessage(chatId, 'Всю информацию вы получите в этом чате');
				}, 3000)
		} catch (e) {
				console.log(e);
		}
	}
});
