const TelegramBot = require('node-telegram-bot-api');

const express = require('express');
const bodyParser = require('body-parser');

const token = "7334337207:AAENaQmrvPYn9-2pHsJsREhRIWTd04lameg";
const bot = new TelegramBot(token);

// Replace with your ngrok HTTPS webhook URL
const webhookUrl = 'https://1f76-206-42-125-123.ngrok-free.app/webhook';  

bot.setWebHook(webhookUrl);


const app = express();

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Local server is listening on port ${port}`);
});
