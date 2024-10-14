const TOKEN = process.env.TELEGRAM_BOT_TOKEN || '.';

const TelegramBot = require('node-telegram-bot-api');
const singleton = new TelegramBot(TOKEN);

module.exports = { bot: singleton }