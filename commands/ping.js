module.exports = {
    name: "핑",
    execute(message, args) {
        const ping = Date.now() - message.createdTimestamp;
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const Embed = new Discord.MessageEmbed()
            .setTitle(":ping_pong:퐁!")
            .setDescription(`\`${ping}\`ms`)
            .setColor("00FF21")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        message.channel.send(Embed);
    }
}