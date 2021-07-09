module.exports = {
    name: "핑",
    run(client, message, args) {
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
            .setTitle(":ping_pong:퐁!")
            .setDescription(`\`${client.ws.ping}\`ms`)
            .setColor("00FF21")
            .setTimestamp(Date.now())
            .setFooter(message.author.tag, message.author.displayAvatarURL());
        message.channel.send(Embed);
    }
}