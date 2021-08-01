const Discord = require('discord.js');

module.exports = {
    name: "문의",
    aliases: ["support"],
    async run(client, message, args) {
        let text = args.join(" ");
        if (!text) return message.reply("문의사항을 적어주세요!");

        const admin = await client.users.fetch('415135882006495242'); // 여기에 있는 id 는 수정해 주셔야 합니다.

        const date = new Date().getFullYear() + '/' + new Date().getMonth() + 1 + '/' + new Date().getDate();

        const SuccessEmbed = new Discord.MessageEmbed()
            .setColor(client.EmbedColor)
            .setTitle("문의")
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`문의가 성공적으로 전송되었습니다!\n문의 내용: \`${text}\`\n 문의 작성일자: \`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}\``)
            .setTimestamp(Date.now())
            .setFooter(message.author.tag, message.author.displayAvatarURL());

        const SupportEmbed = new Discord.MessageEmbed()
            .setColor(client.EmbedColor)
            .setTitle("문의 내역")
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`-------------------------\n\n\`${text}\`\n\n문의 작성일자: \`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}\`\n-------------------------`)
            .setTimestamp(Date.now());
        // .setFooter(`문의 작성자: ${message.author.tag}`, message.author.displayAvatarURL());

        await admin.send(SupportEmbed);
        await message.react("✅");
        await message.channel.send(SuccessEmbed);
    }
}