const { mainMenu } = require('./menu');
const { bot } = require('../config/bot.config');

function commandsMatch() {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg?.chat?.id;
    const firstName = msg?.chat?.first_name;
    mainMenu(chatId, firstName);
  });
}

module.exports = { commandsMatch };
