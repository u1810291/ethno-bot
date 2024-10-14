const { direction } = require('./direction');
const { bot } = require('../config/bot.config');
const { commandsMatch } = require('./commands');
const { sendProduct } = require('./sendProduct');
const { isJSONParsable, omit, pick } = require('../utils/helpers');

let parcelDirection;
function initializeView() {

  commandsMatch();

  bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    const data = isJSONParsable(callbackQuery.data) ? JSON.parse(callbackQuery.data) : callbackQuery.data;
    const chatId = message.chat.id;
    const firstName = message.chat.first_name;
    parcelDirection = {
      ...parcelDirection,
      ...(pick(data, 'direction') === 'to' && ({ from: omit(data, 'direction') })),
      ...(pick(data, 'direction') === 'calculate' && ({ to: omit(data, 'direction') }))
    }
    console.log(parcelDirection)
    if (data === 'send_product') {
      sendProduct(message.chat);
    } else if (data === 'document') {
      direction(message.chat, 'from');
    } else if (data === 'from'){
      direction(message.chat, 'to');
    } else if (data?.direction === 'to'){
      direction(message.chat, 'calculate')
    } else if (data?.direction === 'calculate'){
      bot.sendMessage(message.chat.id, parcelDirection.from?.name  + ' – '+ parcelDirection.to?.name)
    } else if (data === 'back') {
      main(chatId, firstName);
    }
  });

}

module.exports = { initializeView };
