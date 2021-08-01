const Discord = require('discord.js');
const pretty = require('pretty-ms');

module.exports = {
    name: "dev",
    aliases: ["DEV", "Dev"],
    async run(client, message, args) {
        if (message.author.id !== client.owners) return message.reply('어라? 당신은 개발자가 아닌데요?');

        const os = require('os');

        const DokdoVer = require('../../../node_modules/dokdo/package.json');

        const KorenBotsVer = require('../../../node_modules/koreanbots/package.json');

        const dotenvVer = require('../../../node_modules/dotenv/package.json');

        const nodemonVer = require('../../../node_modules/nodemon/package.json');

        const prettyVer = require('../../../node_modules/pretty-ms/package.json');

        const Embed = new Discord.MessageEmbed()
            .setColor(client.EmbedColor)
            .setTitle('개발 정보')
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                {
                    name: "Node.js 버젼",
                    value: `\`${process.version}\``,
                    inline: true
                },
                {
                    name: "프로세스 PID",
                    value: `\`${process.pid}\``,
                    inline: true
                },
                {
                    name: "os 플랫폼",
                    value: `\`${os.platform()}\``,
                    inline: true
                },
                {
                    name: "os 아키텍처",
                    value: `\`${os.arch()}\``,
                    inline: true
                },
                {
                    name: "업타임",
                    value: `\`${pretty(client.uptime)}\``,
                    inline: true
                },
                {
                    name: "서버수",
                    value: `\`${client.guilds.cache.size}\``,
                    inline: true
                },
                {
                    name: "유저수",
                    value: `\`${client.users.cache.size}\``,
                    inline: true
                },
                {
                    name: "웹소켓 핑",
                    value: `\`${client.ws.ping}\``,
                    inline: true
                },
                {
                    name: "discord.js 버젼",
                    value: `\`${Discord.version}\``,
                    inline: true
                },
                {
                    name: "dokdo 버젼",
                    value: `\`${DokdoVer.version}\``,
                    inline: true
                },
                {
                    name: "dotenv 버젼",
                    value: `\`${dotenvVer.version}\``,
                    inline: true
                },
                {
                    name: "koreanbots 버젼",
                    value: `\`${KorenBotsVer.version}\``,
                    inline: true
                },
                {
                    name: "nodemon 버젼",
                    value: `\`${nodemonVer.version}\``,
                    inline: true
                },
                {
                    name: "pretty-ms 버젼",
                    value: `\`${prettyVer.version}\``,
                    inline: true
                }
            )
            .setTimestamp(Date.now())
            .setFooter(message.author.tag, message.author.displayAvatarURL());

        message.channel.send(Embed);
    }
}
