module.exports = {
    name: "디스코드",
    execute(message) {
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
            .setColor("00FF21")
            .setTitle("공식디스코드 링크")
            .setDescription("바로 여기야[공식디스코드 바로가기](https://discord.gg/S8pN4eD)")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        message.channel.send(Embed)
    }
}