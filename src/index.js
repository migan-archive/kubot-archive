require('dotenv').config();
const { Client, Collection, MessageEmbed } = require('discord.js');
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES'] });
const fs = require('fs');
const { prefix } = require('../config.json'); // 이 파일 안에 접두사를 넣으면 됩니다.
const Dokdo = require('dokdo');
const DokdoHandler = new Dokdo(
  client,
  {
    aliases: ['dokdo', 'dok', "독도", "debug", "debugging", "Dok", "Dokdo"],
    prefix: prefix,
    noPerm: msg => {
      msg.react('❌');
      msg.reply("어라? 당신은 개발자가 아닌데요?");
    } /* 여기는 개발자가 아닐때 보내는 메세지 입니다. */
  }
);

client.commands = new Collection();

client.EmbedColor = "00FF21";

client.owners = "415135882006495242"; // 여기 있는 오너 아이디를 바꿔주셔야 합니다. 

process.env.SHELL = '/bin/bash'; /* 이건 리눅스 bash 쉘입니다. */

client.commands.load = dir => {
  const commandFolders = fs.readdirSync(__dirname + '/commands');

  for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(__dirname + `/commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
      const command = require(__dirname + `/commands/${folder}/${file}`);
      client.commands.set(command.name, command);
    }
  }
  console.log(client.commands.map(c => c.name).join(', ') + ' Load Success');
}

client.commands.load(__dirname + "/commands");

client.on('ready', () => {
  console.log(`Login: ${client.user.tag}`);
  console.log("Licence: MIT");
  console.log("Author: ! 미간 !#8269"); // 이건 수정 하시면 안됩니다.
  console.log("======================================");
  client.user.setActivity(`${prefix}도움말`, { type: "PLAYING" });
});


client.on('messageCreate', msg => {
  if (msg.author.bot || msg.channel.type == "dm") return;
  DokdoHandler.run(msg);
  if (msg.content.includes(`<@!${client.user.id}>`)) {
    const developer = client.users.cache.get(client.owners);
    const Embed = new MessageEmbed()
      .setColor(client.EmbedColor)
      .setTitle(`${client.user.username}이에요!`)
      .setDescription(`저의 접두사는 \`${prefix}\`이에요!\n\`${prefix}도움말\`로 명령어를 확인해 주세요!\n개발자: ${developer.tag}`)
      .setTimestamp(Date.now())
      .setFooter(msg.author.tag, msg.author.displayAvatarURL());
    msg.react('<:kubot:876440012089077812>');
    msg.reply({ embeds: [Embed] });
  };
  if (!msg.content.startsWith(prefix)) return;
  if (msg.content.slice(0, prefix.length) !== prefix) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

  if (!cmd) return;

  if (cmd) cmd.run(client, msg, args);
});


client.login(process.env.TOKEN);