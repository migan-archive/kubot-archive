const Discord = require('discord.js');
const pretty = require('pretty-ms');

module.exports = {
    name: "dev",
    aliases: ["DEV", "Dev"],
    async run(client, message, args) {
        if (message.author.id !== client.owners) return message.reply('어라? 당신은 개발자가 아닌데요?');

        const os = require('os');

        let modules = require(process.cwd() + "/package.json");
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
                    value: `\`${client.ws.ping}\`ms`,
                    inline: true
                }
            )
            .setTimestamp(Date.now())
            .setFooter(message.author.tag, message.author.displayAvatarURL());
        for (let module of Object.entries(modules.dependencies)) {
            Embed.addField(module[0], '`' + remove(module[1]) + '`', true);
        }
        function remove(string) {
            if (string.startsWith('^')) {
                return string.replace('^', '');
            } else return string;
        }

        message.channel.send(Embed);
    }
}
