const { MessageEmbed } = require('discord.js')

module.exports = {
  name: '핑',
  aliases: ['ping'],
  async run(client, message, args) {
    const msg = await message.channel.send({
      embeds: [
        new MessageEmbed()
          .setTitle(':ping_pong:퐁!')
          .setDescription(`웹소켓 핑: 측정중\n메세지 핑: 측정중`)
          .setColor(client.EmbedColor)
          .setTimestamp(Date.now())
          .setFooter(message.author.tag, message.author.displayAvatarURL()),
      ],
    })
    setInterval(
      () =>
        msg.edit({
          embeds: [
            new MessageEmbed()
              .setTitle(':ping_pong:퐁!')
              .setDescription(
                `웹소켓 핑: \`${client.ws.ping}ms\`\n메세지 핑: \`${
                  msg.createdTimestamp - message.createdTimestamp
                }ms\``
              )
              .setColor(client.EmbedColor)
              .setTimestamp(Date.now())
              .setFooter(message.author.tag, message.author.displayAvatarURL()),
          ],
        }),
      1000
    )
  },
}
