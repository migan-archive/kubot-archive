module.exports = {
    name: "밴",
    run(client, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("당신은 권한이 부족해요!");
        let User = message.mentions.members.first();
        if (!User) return message.reply("사용자를 찾을수 없어요!");
        if (User.hasPermission("BAN_MEMBERS")) return message.reply("본 사용자는 추방할수 없어요!");
        User.ban();
    }
}