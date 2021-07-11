const Discord = require('discord.js');
const Dokdo = require('dokdo');

module.exports = {
    name: "dokdo",
    async run(client, message, args) {
        const DokdoHandler = new Dokdo(client, {
            aliases: ['dokdo', 'dok'], prefix: '--', owners: "415135882006495242", disableAttachmentExecution: true, noPerm: (message) => message.reply(
                new Discord.MessageEmbed()
                    .setColor("00FF21")
                    .setTitle("Dokdo 커맨드")
                    .setDescription("이 명령어는 개발자만 쓸쑤있어요!")
                    .setTimestamp(Date.now())
                    .setFooter(message.author.username, message.author.displayAvatarURL())
            )
        }); // 여기있는 prefix는 dokdo 커맨드 전용 접두사입니다./ owners 안애다가 오너의 ID를 넣어주세요!
        DokdoHandler.run(message);
    }
}