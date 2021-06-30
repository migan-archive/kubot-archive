module.exports = {
    name: "랜덤숫자",
    execute(message) {
        const random = Math.floor(Math.random() * 10000000000001);
        message.channel.send(random);
    }
}