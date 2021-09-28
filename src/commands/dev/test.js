const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'test',
  run(client, message, args) {
    if (message.author.id !== client.owners)
      return message.reply('어라? 당신은 개발자가 아닌데요?')
    try {
      const user = message.mentions.members.first() || message.member
      function a() {
        if (user.presence.status == null) {
          return '없음'
        } else {
          return user.presence.status
        }
      }
      const Embed = new MessageEmbed()
        .setTitle(`${user.user.username}님의 프로필`)
        .setThumbnail(`${user.user.displayAvatarURL({ dynamic: true })}`)
        .setColor(client.EmbedColor)
        .addFields(
          {
            name: '이름',
            value: `${user.user.username}`,
          },
          {
            name: '가입일',
            value: `${new Date(user.user.createdTimestamp).toLocaleDateString(
              'ko-KR',
              { timeZone: 'Asia/Seoul' }
            )}`,
          },
          {
            name: 'ID',
            value: `${user.user.id}`,
          },
          {
            name: '상태',
            value: a(),
          },
          {
            name: '봇여부',
            value: `${user.user.bot}`,
          }
        )
        .setTimestamp(Date.now())
        .setFooter(message.author.tag, message.author.displayAvatarURL())
      message.channel.send({ embeds: [Embed] })
    } catch (error) {
      console.log(error)
    }
  },
}
