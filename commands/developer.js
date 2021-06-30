module.exports = {
    name: "개발자",
    execute(message) {
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
            .setTitle("개발자는")
            .setDescription("바로 미간#8269 (이)야!")
            .setThumbnail("https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            .setColor("00FF21")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        message.channel.send(Embed);
    }
}