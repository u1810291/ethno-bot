const express = require('express');
const { initializeView } = require('../view');
const { bot } = require('../config/bot.config');
const path = require('path');

const router = express.Router();

// router.get('*', (req, res) => {
//   res.send('You are alive1')
// })
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
router.post('*', (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

initializeView();

module.exports = router;