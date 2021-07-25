const Discord = require('discord.js');

module.exports = {
    name: "밴",
    async run(client, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("당신은 이 명령어를 사용할 권한이 없습니다!");
        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = " 없음";

        if (!args[0]) return message.reply("밴할 사용자를 지정해야 해요!");
        if(!mentionMember) return message.channel.send("이 사용자는 유효하지 않거나 더 이상 서버에 없습니다!");
        if(!mentionMember.bannable) return message.channel.send("이사용자는 밴을 할수없습니다!");

        await mentionMember.ban({
            reason: reason
        }).then(() => message.channel.send(`성공적으로 밴을 하였습니다! 밴한 사용자: ${mentionMember.user.tag}`));
    }
}