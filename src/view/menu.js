const { bot } = require('../config/bot.config');

function mainMenu(chatId, firstName){
  const img = './assets/logistics.jpg';
  const caption = firstName + " добро пожаловать в Ethno Logistics! \
    Мы очень рады, что Вы выбрали нас! \
    Как мы можем Вам помочь?:";
  const reply_markup = {
    inline_keyboard: [
      [{ text: 'Отправить посылку', callback_data: 'send_product' }],
      [{ text: 'Выкуп товара', callback_data: 'buy_product' }],
      [{ text: 'Наши адреса', callback_data: 'location' }],
      [{ text: 'отслеживание посылки', callback_data: 'tracking'}]
    ]
  }
  bot.sendPhoto(chatId, img, { caption, reply_markup });
}

module.exports = { mainMenu }