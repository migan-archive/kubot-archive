module.exports = {
    name: "라이선스",
    execute(message) {
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
            .setTitle("Kubot의 라이선스")
            .setColor("00FF21")
            .setDescription("해당봇은 MIT라이선스를 사용하고있습니다.")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        message.channel.send(Embed);
    }
}