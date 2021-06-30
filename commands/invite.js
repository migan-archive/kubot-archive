module.exports = {
    name: "봇초대",
    execute(message) {
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
            .setTitle("봇초대 링크")
            .setDescription("[초대하러 가기](https://discord.com/oauth2/authorize?client_id=704999866094452816&permissions=8&scope=bot)")
            .setColor("00FF21")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        message.channel.send(Embed);
    }
}