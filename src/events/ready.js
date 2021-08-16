module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(client.commands.map(c => c.name).join(', ') + ' Load Success');
        console.log(`Login: ${client.user.username}`);
        console.log("Licence: MIT");
        console.log("Author: 미간#8269"); // 이건 수정 하시면 안됩니다.
        console.log(`prefix: ${client.prefix}`)
        console.log("======================================");
    },
};