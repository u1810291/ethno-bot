
const express = require('express');
const { initializeView } = require('../view');
const { bot } = require('../config/bot.config');

const router = express.Router();

router.get('*', (req, res) => {
  res.send('You are alive1')
})

router.post('*', (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

initializeView()

module.exports = router;