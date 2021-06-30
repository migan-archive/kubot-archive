module.exports = {
    name: "정보",
    run(client, message, args) {
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
            .setTitle("Kubot 의 정보")
            .setColor("00FF21")
            .addField("당신의 디스코드방을 편리하게 만듭니다.", "[공식 디스코드 바로가기](https://discord.gg/S8pN4eD)\n[공식 사이트 바로가기](https://kubot.netlify.app/)")
            .addField("이 빌드에서의 주의사항", "이 빌드(Build 42597.Dev)는 현재 개발중이며, 또한 불안정 할 수 있습니다.")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        message.channel.send(Embed);
    }
}