module.exports = {
    name: "따라해",
    run(client, message, args) {
        let text = args.join(" ");
        if (!text) return message.reply("따라할 메세지를 적어 주세요!");

        message.channel.send(`${text}\n\`${message.author.username}님이 따라하라고 했어요!\``, { disableMentions: 'all' });
    }
}