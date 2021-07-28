const quiz = require('../../../quiz.json');

module.exports = {
    name: "퀴즈",
    aliases: ["quiz"],
    run(client, message, args) {
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const limit = 5;

        const filter = (response) => {
            return item.answer.some((answer) => answer === response.content);
        };

        message.channel.send(`${item.question} 제한시간: ${limit}초`)
            .then(() => {
                message.channel.awaitMessages(filter, { max: 3, time: limit * 1000 })
                    .then((collected) => {
                        message.channel.send(`${collected.first().author} 정답!`);
                    })
                    .catch((err) => {
                        message.channel.send(`제한시간 초과! 정답: ${item.answer}`);
                    });
            });
    }
}
