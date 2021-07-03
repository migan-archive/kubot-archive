module.exports = {
    name: "놀자",
    run(client, message, args) {
        const list = ["바빠", "뭐하고 놀건데?"];
        const random = Math.floor(Math.random() * 3);
        const enjoy = list[random];
        message.channel.send(enjoy);
    }
}