module.exports = {
    name: "야",
    execute(message) {
        const list = ["뭐", "왜"];
        const random = Math.floor(Math.random() * 3);
        const hey = list[random];
        message.channel.send(hey);
    }
}