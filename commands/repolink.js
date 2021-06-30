module.exports = {
    name: "소스코드",
    execute(message) {
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
            .setTitle("소스코드")
            .setColor("00FF21")
            .setDescription("봇의 코드입니다. [깃허브로 가기](https://github.com/siwoo131/kubot-code)")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        message.channel.send(Embed);
    }
}