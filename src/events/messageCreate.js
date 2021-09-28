const { MessageEmbed, Message, Client } = require('discord.js')

module.exports = {
  name: 'messageCreate',
  /**
   *
   * @param {Message} msg
   * @param {Client} client
   */
  execute(msg, client) {
    if (msg.author.bot || msg.channel.type == 'dm') return
    client.DokdoHandler.run(msg)
    if (
      msg.content.includes(`<@!${client.user.id}>`) ||
      msg.content.includes(`<@${client.user.id}>`)
    ) {
      const developer = client.users.cache.get(client.owners)
      const Embed = new MessageEmbed()
        .setColor(client.EmbedColor)
        .setTitle(`${client.user.username}이에요!`)
        .setDescription(
          `저의 접두사는 \`${client.prefix}\`이에요!\n\`${client.prefix}도움말\`로 명령어를 확인해 주세요!\n개발자: ${developer.tag}`
        )
        .setTimestamp(Date.now())
        .setFooter(msg.author.tag, msg.author.displayAvatarURL())
      msg.reply({ embeds: [Embed] })
    }
    if (!msg.content.startsWith(client.prefix)) return
    if (msg.content.slice(0, client.prefix.length) !== client.prefix) return

    const args = msg.content.slice(client.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    let cmd =
      client.commands.get(command) ||
      client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))

    if (!cmd) return

    if (cmd) cmd.run(client, msg, args)
  },
}
