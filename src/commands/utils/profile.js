module.exports = {
    name: "프로필",
    aliases: ["profile", "유저정보", "userinfo", "ui"],
    run(client, message, args) {
        const Discord = require('discord.js');
        const guild = new Discord.Guild(client);
        const member = new Discord.GuildMember(client, guild);
        const user = message.mentions.users.first() || message.author;
        const Embed = new Discord.MessageEmbed()
            .setTitle(`${user.username}님의 프로필`)
            .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
            .setColor(client.EmbedColor)
            .addFields(
                {
                    name: "이름",
                    value: user.username
                },
                {
                    name: "가입일",
                    value: new Date(user.createdTimestamp).toLocaleDateString('ko-KR', { timeZone: 'Asia/Seoul' })
                },
                {
                    name: "ID",
                    value: user.id
                },
                {
                    name: "상태",
                    value: user.presence.status
                },
                {
                    name: "봇여부",
                    value: user.bot
                }
            )
            .setTimestamp(Date.now())
            .setFooter(message.author.tag, message.author.displayAvatarURL());
        message.channel.send(Embed);
    }
}