
const { lavender } = require('color-name');
const TelegramApi = require('node-telegram-bot-api');
const token = '1798820061:AAG3hRTNiJwCZfCzDOkxtFahEyRytUeXDA0';
const { Keyboard } = require('telegram-keyboard');
var fetch = require('node-fetch');
const request = require('request');
const bot = new TelegramApi(token, { polling: true });

//ключ привязан к почте emranakalaev@yandex.ru//
const apiKey = "";
//город который ввел пользователь//

//ссылка на api//
var url = `http://api.openweathermap.org/data/2.5/weather?q=москва&lang=ru&units=metric&appid=c1917a906f9e5843a7ae004bf25efef6`;
//получаем данные api JSON//




bot.setMyCommands([
    { command: '/start', description: 'Начальное приветсвие' },
    { command: '/info', description: 'Информация о БОТЕ' },

])




const start = () => {
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === "/start") {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/b23/18d/b2318d70-5188-3faf-927d-b1be87d2e83f/2.webp')
            await bot.sendMessage(chatId, 'Добро пожаловать! Давай я подскажу тебе, какая погода на улице?')
            return bot.sendMessage(chatId, 'напиши города на английском :)')
        }


        if (text === "/info") {
            await bot.sendMessage(chatId,
                'Я бот, который подскажет тебе, какая погода на улице!'
            )
            return bot.sendMessage(chatId,
                'Для того, что бы узнать погоду напиши слово ПОГОДА и следуй дальнейшим инструкциям'
            )

        }
        if (text) {
            const text = msg.text;
            var city = text;
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e93b3d15872f914c6929fed9ea71e9a`)
                .then(data => data.json())
                .then(data => {
                    if (data !== null)
                    var temp = Math.round(data.main.temp - 273);
                    return bot.sendMessage(chatId, `температура воздуха: ${temp} градусов`)
                })
        }

        
    })

}

start()