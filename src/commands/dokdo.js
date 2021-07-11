const Discord = require('discord.js');
const Dokdo = require('dokdo');

module.exports = {
    name: "dokdo",
    async run(client, message, args) {
        if(message.author.id !== "415135882006495242") return message.channel.send(
            new Discord.MessageEmbed()
                .setColor("00FF21")
                .setTitle("Dokdo 커맨드")
                .setDescription("이 명령어는 개발자만 쓸쑤있어요!")
                .setTimestamp(Date.now())
                .setFooter(message.author.username, message.author.displayAvatarURL())
        );
        const DokdoHandler = new Dokdo(client, { aliases: ['dokdo', 'dok'], prefix: '--' });
        DokdoHandler.run(message);
    }
}