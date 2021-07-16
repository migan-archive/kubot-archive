const Discord = require('discord.js');

module.exports = {
    name: "따라해",
    run(client, message, args) {
        if (args[0] == null) return message.reply("따라할 메세지를 적어 주세요!");
        message.channel.send(args[0], { disableMentions: 'all' });
    }
}