function initializeView(bot) {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg?.chat?.id;
    const firstName = msg?.chat?.first_name

    const reply_markup ={
      inline_keyboard: [
        [{ text: 'Отправить посылку', callback_data: 'button_pressed' }],
        [{ text: 'Выкуп товара', callback_data: 'button_pressed' }],
        [{ text: 'Наши адреса', callback_data: 'button_pressed' }]
      ]
    }
    bot.sendPhoto(chatId, './assets/logistics.jpg', {
      caption: firstName + " добро пожаловать в Ethno Logistics! \
        Мы очень рады, что Вы выбрали нас! \
        Как мы можем Вам помочь?:",
      reply_markup: reply_markup,
    },
    {
      filename: 'asset',
      contentType: 'image'
    }
    );
  });

  bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    const data = callbackQuery.data;

    if (data === 'button_pressed') {
      bot.sendMessage(message.chat.id, 'You pressed the button!');
    }
  });

}

module.exports = { initializeView }