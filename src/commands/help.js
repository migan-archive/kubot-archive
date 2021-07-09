const Discord = require('discord.js');

module.exports = {
    name: "도움말",
    run(client, message, args) {
        const Embed = new Discord.MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`${client.user.username}의 도움말`)
            .setDescription("봇 접두사=**`--`**")
            .setColor("#00FF21")
            .addFields(
                {
                    name: "당신의 디스코드방을 편리하게 만듭니다.",
                    value: "[공식 디스코드 바로가기](https://discord.gg/S8pN4eD)\n[공식 사이트 바로가기](https://kubot.netlify.app/)"
                },
                {
                    name: "봇초대",
                    value: "[초대하러 가기](https://discord.com/oauth2/authorize?client_id=704999866094452816&permissions=8&scope=bot)"
                },
                {
                    name: "서버수",
                    value: `현재 ${client.user.username}의 서버수는 ${client.guilds.cache.size}서버 입니다.\n현재 한디리에서 ${client.user.username}의서버가 1서버로 표기되고있습니다.`
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
                    name: "소스코드",
                    value: "[깃허브](https://github.com/siwoo131/kubot-code)"
                },
                {
                    name: "핑",
                    value: `\`${client.ws.ping}\`ms`
                },
                {
                    name: "개발자",
                    value: "미간#8269 입니다."
                },
                {
                    name: "현재 공지",
                    value: "없음"
                },
                {
                    name: "도움 명령어",
                    value: "**`문의`**"
                },
                {
                    name: "일반 명령어",
                    value: "**`랜덤숫자`**, **`안녕`**"
                },
                {
                    name: "정보 명령어",
                    value: "**`프로필`**, **`핑`**"
                },
                {
                    name: "관리 명령어",
                    value: "**`킥`**, **`밴`**"
                }
                // {
                //     name: "임시삭제 명령어",
                //     value: "없음"
                // },
            )
            .setTimestamp(Date.now())
            .setFooter(message.author.tag, message.author.displayAvatarURL());
        message.channel.send(Embed);
    }
}