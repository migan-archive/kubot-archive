module.exports = {
    name: "사이트",
    run(client, message, args) {
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
            .setTitle("공식사이트 링크")
            .setDescription("초라하긴 하지만 그래도 있어[공식사이트 바로가기](https://kubot.netlify.app/)")
            .setColor("00FF21")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        message.channel.send(Embed)
    }
}