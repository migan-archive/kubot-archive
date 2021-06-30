module.exports = {
    name: "킥",
    run(client, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("당신은 권한이 부족해요!");
        if (message.mentions.members.first()) {
            try {
                message.mentions.members.first().kick().them(() => {
                    return message.reply(`성공적으로 ${message.mentions.members.first()}유저를 추방했어요!`);
                }).catch((error) => {
                    return message.reply(`에러 발생. 에러정보\n${error}`);
                })
            } catch (error) { }
        } else {
            return message.reply("유저를 멘션해주세요!");
        }
    }
}