const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "--"; // 여기에 봇 접두사를 넣으면 됩니다.
const Dokdo = require('dokdo');

const DokdoHandler = new Dokdo(client, { aliases: ['dokdo', 'dok', "독도", "debug", "debuging"], prefix: '--', owners: "415135882006495242", disableAttachmentExecution: true, noPerm: (message) => message.reply("어라? 당신은 개발자가 아닌데요?") }); // 여기있는 prefix는 dokdo 커맨드 전용 접두사입니다./ owners 안애다가 오너의 ID를 넣어주세요!

client.commands = new Discord.Collection()

client.commands.load = dir => {
  for (const file of fs.readdirSync(dir)) {
    const cmd = require(`./commands/${file}`);
    client.commands.set(cmd.name, cmd);
  }
  console.log(client.commands.map(c => c.name).join(', ') + ' Load Success');
}

client.commands.load(__dirname + "/commands");

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
  console.log("Bot Developer: ! 미간 !#8269");
  console.log("======================================");
});


client.on('message', msg => {
  if (msg.author.bot) return;
  DokdoHandler.run(msg);
  if (msg.content === `<@!${client.user.id}>`) return msg.reply(
      new Discord.MessageEmbed()
          .setColor("00FF21")
          .setTitle(`${client.user.username}이에요!`)
          .setDescription("저의 접두사는 `--`이에요!\n`--도움말`로 명령어를 확인해 주세요!")
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

  if (cmd) cmd.run(client, msg, args);
});


client.login(process.env.TOKEN);