module.exports = {
    name: "서버수",
    execute(message) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const Embed = new Discord.MessageEmbed()
            .setTitle("Kubot의 서버수")
            .setDescription(`현재 Kubot의 서버수는 ${client.guilds.cache.size}서버 입니다.\n현재 한디리에서 Kubot서버가 1서버로 표기되고있습니다.`)
            .setColor("00FF21")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        message.reply(Embed);
    }
}