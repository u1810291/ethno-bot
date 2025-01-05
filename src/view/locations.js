const { bot } = require('../config/bot.config');

function location(chatId){
  const reply_markup = {
    inline_keyboard: [
      [{ text: 'Ташкент',  url: 'https://t.me/ethnologisticsuz/1247'}],
      [{ text: 'Дубай',  url: 'https://t.me/ethnologisticsuz/1335'}],
      [{ text: 'Стамбул',  url: 'https://t.me/ethnologisticsuz/1253'}],
      [{ text: 'Алматы',  url: 'https://t.me/ethnologisticsuz/1255'}],
      [{ text: 'Бишкек',  url: 'https://t.me/ethnologisticsuz/1249'}],
      [{ text: 'Москва',  url: 'https://t.me/ethnologisticsuz/1258'}],
      [{ text: 'Душанбе',  url: 'https://t.me/ethnologisticsuz/1251'}],
    ]
  }
  bot.sendMessage(chatId, "Пожалуйста выберите адрес:", { reply_markup });
}

module.exports = { location }