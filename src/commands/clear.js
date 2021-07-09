const Discord = require('discord.js');

module.exports = {
    name: "청소",
    async run(client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("당신은 권한이 부족해요!");
        if (!args[0]) return message.reply("지울 메세지의 갯수를 입력해 주세요!");
        if (isNaN(args[0])) return message.reply("숫자를 입력해 주세요!");
        if (args[0] > 100) return message.reply("100개 이상은 지울수 없어요!");
        if (args[0] < 1) return message.reply("1이상으로 해주세요!");

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages);
        });
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor("00FF21")
                .setTitle("채팅 청소")
                .setDescription(`관리자 ${message.author.username}님의 요청으로 채팅 ${args[0]}개가 삭제되었습니다!`)
                .setTimestamp(Date.now())
                .setFooter(`관리자: ${message.author.tag}`, message.author.displayAvatarURL())
        );
    }
}