const { inspect } = require('util');
const Discord = require('discord.js');

module.exports = {
    name: "eval",
    aliases: ["Eval", "이발"],
    async run(client, message, args) {
        if (message.author.id !== client.owners) return message.reply('어라? 당신은 개발자가 아닌데요?');
        if (!args.join(' ')) return message.reply('코드를 작성해 주세요!');

        let evaled;
        try {
            evaled = await eval(args.join(' '));

            const Embed = new Discord.MessageEmbed()
                .setColor(client.EmbedColor)
                .setTitle("Eval")
                .addFields(
                    {
                        name: "입력",
                        value: `\`\`\`js
${args.join(' ')}\`\`\``
                    },
                    {
                        name: "출력",
                        value: `\`\`\`js
${inspect(evaled)}\`\`\``
                    }
                )
                .setTimestamp(Date.now())
                .setFooter(message.author.tag, message.author.displayAvatarURL());
            message.react('✅');
            message.channel.send(Embed);
        }
        catch (error) {
            const Embed = new Discord.MessageEmbed()
                .setColor(client.EmbedColor)
                .setTitle("Eval")
                .addFields(
                    {
                        name: "입력",
                        value: `\`\`\`js
${args.join(' ')}\`\`\``
                    },
                    {
                        name: "출력",
                        value: `\`\`\`js
${error}\`\`\``
                    }
                )
                .setTimestamp(Date.now())
                .setFooter(message.author.tag, message.author.displayAvatarURL());

            message.channel.send(Embed);
            message.react('❗');
            // admin.send(Embed);
        }
    }
}