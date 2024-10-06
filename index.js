require('dotenv').config()

const TOKEN = process.env.TELEGRAM_BOT_TOKEN || '.';
const url = process.env.TELEGRAM_BASE_URL;
const port = process.env.PORT;

const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const bot = new TelegramBot(TOKEN);

bot.setWebHook(`${url}/bot${TOKEN}`);

const app = express();

app.use(express.json());

app.get('*', (req, res) => {
  res.send('You are alive')
})

app.post(`*`, (req, res) => {
  bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'I am alive!');
  });
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Express server is listening on ${port}`);
});
