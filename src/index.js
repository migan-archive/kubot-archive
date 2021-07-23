require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "--"; // 여기에 봇 접두사를 넣으면 됩니다.
const { KoreanbotsClient } = require("koreanbots") /* 만약 당신의 봇이 한디리에 등록 되지 않았다면 이걸 없애주세요 */
const clientKRBots = new KoreanbotsClient({
  koreanbotsToken: process.env.KORBOTS_TOKEN,
  koreanbotsOptions: {
    interval: 600000 //10분마다 서버 수를 업데이트합니다. (기본값 30분)
  }
})
const Dokdo = require('dokdo');
const DokdoHandler = new Dokdo(
    client,
    {
      aliases: ['dokdo', 'dok', "독도", "debug", "debugging", "Dok", "Dokdo"],
      prefix: '--', /* 여기 있는 prefix는 독도에 prefix 입니다 */
      noPerm: (message) => message.reply("어라? 당신은 개발자가 아닌데요?") /* 여기는 개발자가 아닐때 보내는 메세지 입니다. */
  }
);
const help = require('./commands/help.js');

client.commands = new Discord.Collection()

process.env.SHELL = '/bin/bash'; /* 이건 리눅스 bash 쉘입니다. */

client.commands.load = dir => {
  for (const file of fs.readdirSync(dir)) {
    const cmd = require(`./commands/${file}`);
    client.commands.set(cmd.name, cmd);
  }
  console.log(client.commands.map(c => c.name).join(', ') + ' Load Success');
}

client.commands.load(__dirname + "/commands");

async function adminDmSend() {
  const admin = await client.users.fetch('415135882006495242'); // 여기에 있는 id 를 수정해 주셔야 합니다.
  admin.send('Bot ready');
}

client.on('ready', () => {
  const Status = [
    '--도움말로 명령어 확인',
    '더욱더 발전하겠습니다',
    '이 메세지는 10초마다 한번씩 바뀝니다',
    '디스코드서버를 편리하게'
  ];

  let index = 0;
  setInterval(() => {
    if (index === Status.length) index = 0;
    const status1 = Status[index];
    client.user.setActivity(status1, {
      type: 'PLAYING'
    }).catch(console.error)
    index++;
  }, 10000);
  console.log(`Login: ${client.user.tag}`);
  console.log("Licence: MIT");
  console.log("Author: ! 미간 !#8269");
  console.log("======================================");
  adminDmSend()
});


client.on('message', msg => {
  if (msg.author.bot) return;
  DokdoHandler.run(msg);
  if (msg.content === `<@!${client.user.id}>`) return msg.reply(
      new Discord.MessageEmbed()
          .setColor("00FF21")
          .setTitle(`${client.user.username}이에요!`)
          .setDescription(`저의 접두사는 \`${prefix}\`이에요!\n\`${prefix}${help.name}\`로 명령어를 확인해 주세요!`)
          .setTimestamp(Date.now())
          .setFooter(msg.author.tag, msg.author.displayAvatarURL())
  );

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
  if (msg.content ==="쿠봇아 야") {
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

  let cmd = client.commands.get(command);

  if (cmd) cmd.run(client, msg, args); /* 나중에 핑퐁 빌더로 대화 기능 수정할껍니다. */
});


client.login(process.env.TOKEN);

process.on("SIGINT", () => {
  clientKRBots.destroy()
  process.exit()
}) /* 이것도 한디리에 등록 되어 있지 않다면 없애 주세요 */