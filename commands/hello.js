module.exports = {
    name: "안녕",
    execute(message) {
        const list = ["안녕", "hi", "안녕하세요", "hello", "좋은아침이에요!"];
        const random = Math.floor(Math.random() * 3);
        const hi = list[random];
        message.reply(hi);
    }
};