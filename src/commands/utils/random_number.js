module.exports = {
	name: '랜덤숫자',
	run(client, message, args) {
        if (!args[0]) return message.reply("랜덤으로 할 숫자를 알려주세요!");
        if (isNaN(args[0])) return message.reply("숫자를 입력해 주세요!");
        if (args[0] < 1) return message.reply("1이상으로 해주세요!");

        message.reply(`${Math.floor(Math.random() * args[0])}`);
	}
};
