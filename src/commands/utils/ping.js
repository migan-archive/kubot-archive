const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "핑",
    aliases: ["ping"],
    run(client, message, args) {
        const Embed = new MessageEmbed()
            .setTitle(":ping_pong:퐁!")
            .setDescription(`웹소켓 핑: \`${client.ws.ping}\`ms\n메세지 핑: \`${Date.now() - message.createdTimestamp}\`ms`)
            .setColor(client.EmbedColor)
            .setTimestamp(Date.now())
            .setFooter(message.author.tag, message.author.displayAvatarURL());
        message.channel.send({ embeds: [Embed] });
    }
}