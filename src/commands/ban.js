const Discord = require('discord.js');

module.exports = {
    name: "밴",
    async run(client, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("당신은 이 명령어를 사용할 권한이 없습니다!");
        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = " 없음";

        const banEmbed = new Discord.MessageEmbed()
            .setColor("00FF21")
            .setTitle("차단")
            .setDescription(`당신은 ${message.guild.name}에서 차단되었습니다!\n이유: ${reason}`)
            .setTimestamp(Date.now())
            .setFooter(`관리자:${message.author.tag}`, message.author.displayAvatarURL());

        if (!args[0]) return message.reply("밴할 사용자를 지정해야 해요!");
        if(!mentionMember) return message.channel.send("이 사용자는 유효하지 않거나 더 이상 서버에 없습니다!");
        if(!mentionMember.bannable) return message.channel.send("이사용자는 밴을 할수없습니다!");

        await mentionMember.send(banEmbed);
        await mentionMember.ban({
            reason: reason
        }).then(() => message.channel.send(`성공적으로 밴을 하였습니다! 밴한 사용자: ${mentionMember.user.tag}`));
    }
}