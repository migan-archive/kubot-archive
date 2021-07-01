module.exports = {
    name: "프로필",
    run(client, message, args) {
        const Discord = require('discord.js');
        const guild = new Discord.Guild(client);
        const member = new Discord.GuildMember(client, guild);
        const user = message.mentions.users.first() || message.author;
        const Embed = new Discord.MessageEmbed()
            .setTitle(`${user.username}님의 프로필`)
            .setThumbnail(`${user.displayAvatarURL()}`)
            .setColor("00FF21")
            .addFields(
                {
                    name: "가입일",
                    value: new Date(user.createdTimestamp).toLocaleDateString()
                },
                {
                    name: "이름",
                    value: user.username
                },
                {
                    name: "ID",
                    value: user.id
                },
                {
                    name: "봇여부",
                    value: user.bot
                }
            )
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        message.channel.send(Embed);
    }
}