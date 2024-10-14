const { Cities } = require('../mocks/cities');
const { bot } = require('../config/bot.config');

function direction(chat, callback_data){
  const formattedText = callback_data === 'to' ? 'Откуда' : 'Куда';
  const reply_markup = {
    inline_keyboard: [
      [{ text: 'Ташкент',  callback_data: JSON.stringify({ direction: callback_data, ...Cities.tashkent}) }],
      [{ text: 'Дубай',  callback_data: JSON.stringify({ direction: callback_data, ...Cities.dubai }) }],
      [{ text: 'Стамбул',  callback_data: JSON.stringify({ direction: callback_data, ...Cities.stambul }) }],
      [{ text: 'Алматы',  callback_data: JSON.stringify({ direction: callback_data, ...Cities.almaty }) }],
      [{ text: 'Бишкек',  callback_data: JSON.stringify({ direction: callback_data, ...Cities.bishkek }) }],
      [{ text: 'Москва',  callback_data: JSON.stringify({ direction: callback_data, ...Cities.moscow }) }],
      [{ text: 'Душанбе',  callback_data: JSON.stringify({ direction: callback_data, ...Cities.dushanbe }) }]
      
    ]
  };
  bot.sendMessage(chat.id, `${formattedText} отправляете  ?`, { reply_markup });
}

module.exports = { direction };
