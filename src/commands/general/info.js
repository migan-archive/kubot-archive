const { MessageEmbed } = require('discord.js')
const pretty = require('pretty-ms')
const os = require('os')

module.exports = {
  name: '정보',
  aliases: ['info', 'Info'],
  async run(client, message, args) {
    const developer = client.users.cache.get(client.owners)
    let modules = require(process.cwd() + '/package.json')
    const Embed = new MessageEmbed()
      .setColor(client.EmbedColor)
      .setTitle('정보')
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        {
          name: '개발자',
          value: `\`${developer.tag}\``,
          inline: true,
        },
        {
          name: 'Node.js 버젼',
          value: `\`${process.version}\``,
          inline: true,
        },
        {
          name: '프로세스 PID',
          value: `\`${process.pid}\``,
          inline: true,
        },
        {
          name: 'os 플랫폼',
          value: `\`${os.platform()}\``,
          inline: true,
        },
        {
          name: 'os 아키텍처',
          value: `\`${os.arch()}\``,
          inline: true,
        },
        {
          name: '업타임',
          value: `\`${pretty(client.uptime)}\``,
          inline: true,
        },
        {
          name: '서버수',
          value: `\`${client.guilds.cache.size}\``,
          inline: true,
        },
        {
          name: '유저수',
          value: `\`${client.users.cache.size}\``,
          inline: true,
        },
        {
          name: '웹소켓 핑',
          value: `\`${client.ws.ping}\`ms`,
          inline: true,
        }
      )
      .setTimestamp(Date.now())
      .setFooter(message.author.tag, message.author.displayAvatarURL())
    for (let module of Object.entries(modules.dependencies)) {
      Embed.addField(module[0], '`' + remove(module[1]) + '`', true)
    }
    function remove(string) {
      if (string.startsWith('^')) {
        return string.replace('^', '')
      } else return string
    }

    message.reply({ embeds: [Embed] })
  },
}
