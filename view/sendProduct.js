function sendProduct(bot, chat){
    const sendproduct ={
        inline_keyboard: [
          [{ text: 'Документ',  callback_data: 'direction' }],
          [{ text: 'Одежда',    callback_data: 'direction' }],
          [{ text: 'Техника',   callback_data: 'direction' }],
          [{ text: 'Косметика', callback_data: 'direction' }],
          [{ text: 'Питание',   callback_data: 'direction' }],
          [{ text: 'Другое',    callback_data: 'direction' }],
          [{ text: 'Назад',     callback_data: 'kirish' }]
        ]
      }
    console.log('sendProduct'),
    bot.sendMessage(chat.id, 'Что хотите отправить?', {reply_markup:sendproduct})
    
    
}
module.exports = {sendProduct};