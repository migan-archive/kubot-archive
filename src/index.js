require('dotenv').config()
const { Koreanbots } = require('koreanbots')
const { Client, Collection } = require('discord.js')
const client = new Client({
  intents: [
    'GUILDS',
    'GUILD_MESSAGES',
    'DIRECT_MESSAGES',
    'GUILD_MEMBERS',
    'GUILD_PRESENCES',
  ],
})
const fs = require('fs')
const { prefix } = require('../config.json') // 이 파일 안에 접두사를 넣으면 됩니다.
const Dokdo = require('dokdo')
const koreanbots = new Koreanbots({
  api: {
    token: process.env.KRBOTS_TOKEN,
  },
  clientID: '704999866094452816', // 여기엔 자신의 봇 아이디를 적어주세요.
})
client.prefix = prefix
client.DokdoHandler = new Dokdo(client, {
  aliases: ['dokdo', 'dok', '독도', 'debug', 'debugging', 'Dok', 'Dokdo'],
  prefix: client.prefix,
  noPerm: msg => {
    msg.react('❌')
    msg.reply('어라? 당신은 개발자가 아닌데요?')
  } /* 여기는 개발자가 아닐때 보내는 메세지 입니다. */,
})
client.commands = new Collection()
client.EmbedColor = '00FF21'
client.owners = '415135882006495242' // 여기 있는 오너 아이디를 바꿔주셔야 합니다.

client.serverUpdate = servers =>
  koreanbots.mybot
    .update({ servers, shards: client.shard?.count })
    .then(res =>
      console.log(
        '서버 수를 정상적으로 업데이트하였습니다!\n반환된 정보:' +
          JSON.stringify(res)
      )
    )
    .catch(console.error)

const eventFiles = fs
  .readdirSync(__dirname + '/events')
  .filter(file => file.endsWith('.js'))

for (const file of eventFiles) {
  const event = require(__dirname + `/events/${file}`)
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client))
  } else {
    client.on(event.name, (...args) => event.execute(...args, client))
  }
}

const commandFolders = fs.readdirSync(__dirname + '/commands')

for (const folder of commandFolders) {
  const commandFiles = fs
    .readdirSync(__dirname + `/commands/${folder}`)
    .filter(file => file.endsWith('.js'))
  for (const file of commandFiles) {
    const command = require(__dirname + `/commands/${folder}/${file}`)
    client.commands.set(command.name, command)
  }
}

client.login(process.env.TOKEN)
