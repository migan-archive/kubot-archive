module.exports = {
    name: "도움말",
    run(client, message, args) {
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
            .setThumbnail("https://cdn.discordapp.com/avatars/415135882006495242/40b3f2e3fbb710522517b0e14dfb751b.webp?size=1024")
            .setTitle("필요한게 있으면 여기 와주세요.")
            .setDescription("[공식디스코드 바로가기](https://discord.gg/S8pN4eD)\n 봇 접두사=**`--`**")
            .setColor("#00FF21")
            .addFields(
                {
                    name: "도움 명령어",
                    value: "**`봇초대`**, **`도움말`**, **`사이트`**, **`디스코드`**"
                },
                {
                    name: "일반 명령어",
                    value: "**`안녕`**, **`놀자`**, **`바보`**, **`ㅋㅋ`**,  **`랜덤숫자`**"
                },
                {
                    name: "정보 명령어",
                    value: "**`안녕`**, **`놀자`**, **`바보`**, **`ㅋㅋ`**,  **`랜덤숫자`**"
                },
                {
                    name: "임시삭제 명령어",
                    value: "관리 명령어: 킥, 밴 (안정성 검증불가)"
                },
                // {
                //     name: "관리 명령어",
                //     value: "**`킥`**, **`밴`**"
                // } 이 명령어는 임시삭제
            )
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        message.channel.send(Embed);
    }
}