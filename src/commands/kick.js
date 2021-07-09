const Discord = require('discord.js');

module.exports = {
    name: "킥",
    async run(client, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("당신은 이 명령어를 사용할 권한이 없습니다!");
        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = " 없음";

        const kickEmbed = new Discord.MessageEmbed()
            .setColor("00FF21")
            .setTitle("추방")
            .setDescription(`당신은 ${message.guild.name}에서 추방되었습니다!\n이유: ${reason}`)
            .setTimestamp(Date.now())
            .setFooter(`관리자:${message.author.tag}`, message.author.displayAvatarURL());

        if (!args[0]) return message.reply("킥할 사용자를 지정해야 해요!");
        if(!mentionMember) return message.channel.send("이 사용자는 유효하지 않거나 더 이상 서버에 없습니다!");
        if(!mentionMember.kickable) return message.channel.send("이사용자는 킥을 할수없습니다!");

        try {
            await mentionMember.send(kickEmbed);
        } catch (err) {

        }

        try {
            await mentionMember.kick(reason);
        } catch (err) {
            return message.channel.send("이 사용자를 킥할수 없습니다!")
        }
    }
}