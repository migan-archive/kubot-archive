const Discord = require('discord.js');

module.exports = {
    name: "따라해",
    run(client, message, args) {
        if (args[0] == null) return message.reply("따라할 메세지를 적어 주세요!");
        if (args[0] === "@everyone") return message.reply("해당 메세지엔 에브리원이 들어가 있어 따라할수 없습니다!");
        message.channel.send(args[0]);
    }
}