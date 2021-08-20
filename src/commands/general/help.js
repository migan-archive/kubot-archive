const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const pretty = require('pretty-ms');
const { prefix } = require(process.cwd() + '/config.json');

module.exports = {
    name: "도움말",
    aliases: ["help", "도움", "명령어", "commands", "HELP"],
    run(client, message, args) {
        const Developer = client.users.cache.get(client.owners);
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel('공식 디스코드')
                    .setStyle('LINK')
                    .setURL('https://discord.gg/S8pN4eD')
            ).addComponents(
                new MessageButton()
                    .setLabel('봇초대')
                    .setStyle('LINK')
                    .setURL('https://discord.com/oauth2/authorize?client_id=704999866094452816&permissions=8&scope=bot')
            ).addComponents(
                new MessageButton()
                    .setLabel('사이트')
                    .setStyle('LINK')
                    .setURL('https://kubot.netlify.app/')
            ).addComponents(
                new MessageButton()
                    .setLabel(`소스코드(만약 봇 소스코드 사용시 ${Developer.tag}로 문의 부탁드려요.)`)
                    .setStyle('LINK')
                    .setURL('https://github.com/siwoo131/kubot-code')
            );
        const Embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`${client.user.username}의 도움말`)
            .setDescription(`당신의 디스코드방을 편리하게 만듭니다.\n봇 접두사=**\`${prefix}\`**`)
            .setColor(client.EmbedColor)
            .addFields(
                {
                    name: "서버수",
                    value: `현재 ${client.user.username}의 서버수는 ${client.guilds.cache.size}서버 입니다.`
                },
                {
                    name: "이용자수",
                    value: `현재 ${client.user.username}의 이용자수는 ${client.users.cache.size}명 입니다.`
                },
                {
                    name: "라이선스",
                    value: `${client.user.username}은 현재 MIT 라이선스를 이용중입니다.`
                },
                {
                    name: "핑",
                    value: `웹소켓 핑: \`${client.ws.ping}\`ms\n메세지 핑: \`${Date.now() - message.createdTimestamp}\`ms`
                },
                {
                    name: "개발자",
                    value: `${Developer.tag}(${Developer.id})`
                },
                {
                    name: "현재 공지",
                    value: "현재 프로필 기능이 작동을안합니다. 양해부탁드립니다."
                },
                {
                    name: "업타임",
                    value: `${pretty(client.uptime)}`
                },
                {
                    name: "재미",
                    value: "~~`퀴즈(quiz, QUIZ)`~~"
                },
                {
                    name: "일반",
                    value: "`도움말(help, 도움, 명령어, commands, HELP)`, `문의(support)`, `개발자`, `정보 (info, Info)`"
                },
                {
                    name: "관리",
                    value: "`밴(차단, ban)`, `킥(추방, kick)`, `청소(채팅청소, clear)`"
                },
                {
                    name: "유틸리티",
                    value: "`핑(ping)`, ~~`프로필(proflie, 유저정보, userinfo, (ui)`~~, `랜덤숫자`, ~~`따라해`~~, `업타임(uptime)`"
                },
                {
                    name: "봇 개발자 전용 명령어",
                    value: "`dokdo(dok, Dok, debug, debugging, Dokdo, 독도)`, `eval(Eval, 이발)`"
                }
            )
            .setTimestamp(Date.now())
            .setFooter(message.author.tag, message.author.displayAvatarURL());
        message.reply({ embeds: [Embed], components: [row] });
    }
}
