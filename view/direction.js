function direction(bot, chat, callback_data){
    const reply_markup = {
        inline_keyboard: [
          [{ text: 'Ташкент',  callback_data }],
          [{ text: 'Дубай',  callback_data }],
          [{ text: 'Стамбул',  callback_data }],
          [{ text: 'Алматы',  callback_data }],
          [{ text: 'Бишкек',  callback_data }],
          [{ text: 'Москва',  callback_data }],
          [{ text: 'Душанбе',  callback_data }]
          
        ]
      }
    console.log(callback_data)
    bot.sendMessage(chat.id, 
        `${callback_data === 'to' ? 'Откуда' : 'Куда'} отправляетe  ?`,
        {reply_markup})
    
    
}
module.exports = {direction};