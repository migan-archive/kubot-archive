const pretty = require('pretty-ms');
const Discord = require('discord.js');

module.exports = {
    name: "업타임",
    aliases: ["uptime"],
    run(client, message, args) {
        const Embed = new Discord.MessageEmbed()
            .setColor(client.EmbedColor)
            .setTitle(":up:업타임")
            .setDescription(pretty(client.uptime))
            .setTimestamp(Date.now())
            .setFooter(message.author.tag, message.author.displayAvatarURL());
        message.channel.send(Embed);
    }
}