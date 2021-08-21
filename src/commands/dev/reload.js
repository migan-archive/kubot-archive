module.exports = {
    name: "리로드",
    aliases: ['reload'],
    async run(client, message, args) {
        if (message.author.id !== client.owners) return message.reply('어라? 당신은 개발자가 아닌데요?');
        if (!args[0]) return message.reply('인수가 누락되었습니다.');
        if (!args[1]) return message.reply('인수가 누락되었습니다.');
        if (!args[2]) return message.reply('인수가 누락되었습니다.');

        let category = args[0].toLowerCase();
        let command = args[1].toLowerCase();
        let name = args[2].toLowerCase();

        try {
            delete require.cache[require.resolve(`../${category}/${command}.js`)];
            client.commands.delete(name);

            let pull = require(`../${category}/${command}.js`);
            client.commands.set(name, pull);

            message.reply(`${name} 리로드 완료`)
        } catch (error) {
            console.error(error);
        }
    }
}
