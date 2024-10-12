function sendProduct(bot, chat,){
    const sendproduct ={
        inline_keyboard: [
          [{ text: 'Документ',  callback_data: 'from' }],
          [{ text: 'Одежда',    callback_data: 'from' }],
          [{ text: 'Техника',   callback_data: 'from' }],
          [{ text: 'Косметика', callback_data: 'from' }],
          [{ text: 'Питание',   callback_data: 'from' }],
          [{ text: 'Другое',    callback_data: 'from' }],
          [{ text: 'Назад',     callback_data: 'kirish' }]
        ]
      }
    console.log('sendProduct'),
    bot.sendMessage(chat.id, 'Что хотите отправить?', {reply_markup:sendproduct})
    
    
}
module.exports = {sendProduct};