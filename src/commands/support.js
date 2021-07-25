module.exports = {
    name: "문의",
    run(client, message, args) {
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
            .setColor("00FF21")
            .setTitle("문의")
            .setDescription("문제가 발생 하셨나요? 아니면 이봇의 관한 궁금한 점이 있나요? 그럼 여기로 오세요.\n[공식디스코드 바로가기](https://discord.gg/S8pN4eD)")
            .setTimestamp(Date.now())
            .setFooter(message.author.tag, message.author.displayAvatarURL());
        message.channel.send(Embed)
    }
}