const { inspect } = require('util')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'eval',
  aliases: ['Eval', '이발'],
  async run(client, message, args) {
    if (message.author.id !== client.owners)
      return message.reply('어라? 당신은 개발자가 아닌데요?')
    if (!args.join(' ')) return message.reply('코드를 작성해 주세요!')

    let evaled
    try {
      evaled = await eval(args.join(' '))
      message.react('✅')
      message.channel.send({
        content: `\`\`\`js
${inspect(evaled)}\`\`\``,
      })
    } catch (error) {
      message.channel.send({
        content: `\`\`\`js
${error}\`\`\``,
      })
      message.react('⚠️')
    }
  },
}
