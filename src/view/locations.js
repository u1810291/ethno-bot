const { bot } = require('../config/bot.config');
const axios = require('axios')
function location(chatId){
  //const img = './assets/logistics.jpg';
  const data = axios.get('https://api.ethnologistics.com/api/Tracking?treknumber=533655470').then((res)=>{
    console.log(res) 
    return res.data
    }).catch((err)=>{
      console.log(err)
    });
  const caption = "Наши адреса";
  const reply_markup = {
    inline_keyboard: [
        [{ text: 'Ташкент',  url: 'https://t.me/ethnologisticsuz/1247'}],
        [{ text: 'Дубай',  url: 'https://t.me/ethnologisticsuz/1335'}],
        [{ text: 'Стамбул',  url: 'https://t.me/ethnologisticsuz/1253'}],
        [{ text: 'Алматы',  url: 'https://t.me/ethnologisticsuz/1255'}],
        [{ text: 'Бишкек',  url: 'https://t.me/ethnologisticsuz/1249'}],
        [{ text: 'Москва',  url: 'https://t.me/ethnologisticsuz/1258'}],
        [{ text: 'Душанбе',  url: 'https://t.me/ethnologisticsuz/1251'}],
        [{ text: 'nazad',  url: ''}]
    ]
  }
  bot.sendMessage(chatId, JSON.stringify(data), { caption, reply_markup });
}

module.exports = { location }