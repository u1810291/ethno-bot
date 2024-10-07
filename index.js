require('dotenv').config()

const TOKEN = process.env.TELEGRAM_BOT_TOKEN || '.';
const port = process.env.PORT;

const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const { initializeView } = require('./view');

const bot = new TelegramBot(TOKEN, {
  filepath: './assets'
});

const app = express();

app.use(express.json());

app.get('*', (req, res) => {
  res.send('You are alive1')
})

app.post(`*`, (req, res) => {
  bot.processUpdate(req.body);

  res.sendStatus(200);
});

initializeView(bot)

app.listen(port, () => {
  console.log(`Express server is listening on ${port}`);
});
