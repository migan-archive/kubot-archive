const Discord = require('discord.js');

module.exports = {
    name: "문의",
    async run(client, message, args) {
        let text = args.join(" ");
        if (!text) return message.reply("문의사항을 적어주세요!");
        const admin = await client.users.fetch('415135882006495242'); // 여기에 있는 id 는 수정해 주셔야 합니다.
        const Embed = new Discord.MessageEmbed()
            .setColor("00FF21")
            .setTitle("문의")
            .setDescription("문의가 성공적으로 전송되었습니다!")
            .setTimestamp(Date.now())
            .setFooter(message.author.tag, message.author.displayAvatarURL());
        await admin.send(text);
        await message.react("✅");
        await message.channel.send(Embed);
    }
}