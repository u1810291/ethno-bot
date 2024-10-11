const {sendProduct} = require('./sendProduct');

function initializeView(bot) {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg?.chat?.id;
    const firstName = msg?.chat?.first_name
    main(bot, chatId, firstName)
    
  });

  bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    const data = callbackQuery.data;
    const chatId = message.chat.id;
    const firstName = message.chat.first_name;
    console.log('sendProduct');

    if (data === 'send_product') {
        sendProduct(bot, message.chat);
        return;
    }
    if (data === 'dokument') {
        bot.sendMessage(message.chat.id, 'dokument bosildi') 
      }
   if (data === 'kirish') {
        main(bot, chatId, firstName) 
      }
  });

}
function main(bot, chatId, firstName){
  const kirish ={
    inline_keyboard: [
      [{ text: 'Отправить посылку', callback_data: 'send_product' }],
      [{ text: 'Выкуп товара', callback_data: 'buy_product' }],
      [{ text: 'Наши адреса', callback_data: 'adress' }],
      [{ text: 'отслеживание посылки', callback_data: 'tracking'}]
    ]
  }
  bot.sendPhoto(chatId, './assets/logistics.jpg', {
    caption: firstName + " добро пожаловать в Ethno Logistics! \
      Мы очень рады, что Вы выбрали нас! \
      Как мы можем Вам помочь?:",
    reply_markup: kirish,
  },
  {
    filename: 'asset',
    contentType: 'image'
  }
  );
}

module.exports = {initializeView};