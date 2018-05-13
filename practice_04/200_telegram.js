const Bot = require('node-telegram-bot-api');

const bot = new Bot('텔레그램봇TOKEN', { polling: true });

const onChatMessage = (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'oh, hello', {
        disable_notification: true,
    }).then(() => {
        console.log('replay sent');
    });
};

bot.on('message', (msg) => {
    console.log(msg);
    if (msg.text) {
        return onChatMessage(msg);
    }
});