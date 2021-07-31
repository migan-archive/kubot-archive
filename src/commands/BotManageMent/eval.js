const { inspect } = require('util');
const { owner } = require('../../../config.json');
const Discord = require('discord.js');

module.exports = {
    name: "eval",
    aliases: ["Eval", "이발"],
    async run(client, message, args) {
        if (message.author.id !== owner) return;
        if (!args.join(' ')) return message.reply('코드를 작성해 주세요!');

        let evaled;
        try {
            evaled = await eval(args.join(' '));

            const Embed = new Discord.MessageEmbed()
                .setColor(client.EmbedColor)
                .setTitle("Eval")
                .addFields(
                    {
                        name: "Input",
                        value: `\`\`\`js
${args.join(' ')}\`\`\``
                    },
                    {
                        name: "Output",
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
            const admin = await client.users.fetch('415135882006495242'); // 여기에 있는 id 는 수정해 주셔야 합니다.

            const Embed = new Discord.MessageEmbed()
                .setColor(client.EmbedColor)
                .setTitle("Eval")
                .addFields(
                    {
                        name: "Input",
                        value: `\`\`\`js
${args.join(' ')}\`\`\``
                    },
                    {
                        name: "Output",
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