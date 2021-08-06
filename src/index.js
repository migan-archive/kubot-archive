require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { prefix } = require('../config.json'); // 여기에 봇 접두사를 넣으면 됩니다.
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

client.commands = new Discord.Collection();

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
  console.log("Author: ! 미간 !#8269");
  console.log("======================================");
  client.user.setActivity(`${prefix}도움말`, { type: "PLAYING" });
});


client.on('message', msg => {
  if (msg.author.bot || msg.channel.type == "dm") return;
  DokdoHandler.run(msg);
  if (msg.content.includes(`<@!${client.user.id}>`)) {
    const Embed = new Discord.MessageEmbed()
      .setColor(client.EmbedColor)
      .setTitle(`${client.user.username}이에요!`)
      .setDescription(`저의 접두사는 \`${prefix}\`이에요!\n\`${prefix}도움말\`로 명령어를 확인해 주세요!`)
      .setTimestamp(Date.now())
      .setFooter(msg.author.tag, msg.author.displayAvatarURL());
    msg.reply(Embed);
  };

  if (msg.content === "쿠봇아 안녕" || msg.content === "쿠봇아 안뇽" || msg.content === "쿠봇아 하이") {
    const list = ["안녕", "hi", "안녕하세요", "hello", "좋은아침이에요!"];
    const random = Math.floor(Math.random() * 5);
    const hello = list[random];
    msg.reply(hello);
  };

  if (msg.content === "쿠봇아 놀자") {
    const list = ["바빠", "뭐하고 놀건데?"];
    const random = Math.floor(Math.random() * 2);
    const enjoy = list[random];
    msg.reply(enjoy);
  };

  if (msg.content === "쿠봇아 뭐해") return msg.reply("저는 사람들이랑 대화중이에요!");
  if (msg.content === "쿠봇아 바보") return msg.reply("바보 아닌데요");
  if (msg.content === "쿠봇아 야") {
    const list = ["뭐", "왜"];
    const random = Math.floor(Math.random() * 2);
    const hey = list[random];
    msg.reply(hey);
  };

  if (msg.content === "쿠봇아 바이") return msg.reply("안녕히 계세요!");
  if (msg.content === "쿠봇아 인성문제있어?") return msg.reply("아닙니다");
  if (msg.content === "쿠봇아 아라아라해줘") return msg.reply("미쳤습니까 휴먼?");

  if (!msg.content.startsWith(prefix)) return;
  if (msg.content.slice(0, prefix.length) !== prefix) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

  if (!cmd) return;

  if (cmd) cmd.run(client, msg, args); /* 나중에 핑퐁 빌더로 대화 기능 수정할껍니다. */
});


client.login(process.env.TOKEN);