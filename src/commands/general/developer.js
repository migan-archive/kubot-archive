module.exports = {
    name: "개발자",
    async run(client, message, args) {
        const Developer = client.users.cache.get(client.owners);
        message.channel.send(`${Developer.tag}(${Developer.id})`);
    }
}