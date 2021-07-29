module.exports = {
    name: "핑",
    aliases: ["ping"],
    run(client, message, args) {
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
            .setTitle(":ping_pong:퐁!")
            .setDescription(`웹소켓 핑: \`${client.ws.ping}\`ms\n메세지 핑: \`${Date.now() - message.createdTimestamp}\`ms`)
            .setColor("00FF21")
            .setTimestamp(Date.now())
            .setFooter(message.author.tag, message.author.displayAvatarURL());
        message.channel.send(Embed);
    }
}