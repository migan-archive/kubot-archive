module.exports = {
    name: "랜덤숫자",
    run(client, message, args) {
        const random = Math.floor(Math.random() * 10000000000001);
        message.channel.send(random);
    }
}