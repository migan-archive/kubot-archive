const { owner } = require('../../../config.json');
const Discord = require('discord.js');
const pretty = require('pretty-ms');

module.exports = {
    name: "dev",
    aliases: ["DEV", "Dev"],
    async run(client, message, args) {
        if (message.author.id !== owner) return message.reply('어라? 당신은 개발자가 아닌데요?');

        const DokdoVer = require('../../../node_modules/dokdo/package.json');

        const KorenBotsVer = require('../../../node_modules/koreanbots/package.json');

        const dotenvVer = require('../../../node_modules/dotenv/package.json');

        const nodemonVer = require('../../../node_modules/nodemon/package.json');

        const prettyVer = require('../../../node_modules/pretty-ms/package.json');

        const Embed = new Discord.MessageEmbed()
            .setColor(client.EmbedColor)
            .setTitle('Dev Info')
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                {
                    name: "Node.js Version",
                    value: `\`${process.version}\``,
                    inline: true
                },
                {
                    name: "Process PID",
                    value: `\`${process.pid}\``,
                    inline: true
                },
                {
                    name: "Uptime",
                    value: `\`${pretty(client.uptime)}\``,
                    inline: true
                },
                {
                    name: "discord.js Version",
                    value: `\`${Discord.version}\``,
                    inline: true
                },
                {
                    name: "dokdo Version",
                    value: `\`${DokdoVer.version}\``,
                    inline: true
                },
                {
                    name: "dotenv Version",
                    value: `\`${dotenvVer.version}\``,
                    inline: true
                },
                {
                    name: "koreanbots Version",
                    value: `\`${KorenBotsVer.version}\``,
                    inline: true
                },
                {
                    name: "nodemon Version",
                    value: `\`${nodemonVer.version}\``,
                    inline: true
                },
                {
                    name: "pretty-ms Version",
                    value: `\`${prettyVer.version}\``,
                    inline: true
                }
            )
            .setTimestamp(Date.now())
            .setFooter(message.author.tag, message.author.displayAvatarURL());

        message.channel.send(Embed);
    }
}
