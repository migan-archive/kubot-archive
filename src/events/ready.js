const { Client } = require('discord.js')

module.exports = {
  name: 'ready',
  once: true,
  /**
   *
   * @param {Client} client
   */
  execute(client) {
    console.log(client.commands.map(c => c.name).join(', ') + ' Load Success')
    console.log(`Login: ${client.user.username}`)
    console.log('======================================')
    client.user.setActivity(`${client.prefix}도움말`, { type: 'WATCHING' })
    client.serverUpdate(client.guilds.cache.size)
    setInterval(() => client.serverUpdate(client.guilds.cache.size), 600000)
  },
}
