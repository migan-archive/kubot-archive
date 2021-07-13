const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "--"; // 여기에 봇 접두사를 넣으면 됩니다.

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
  if (msg.content === "쿠봇아 안녕") {
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
  if (msg.content === "쿠봇아 바보") return msg.reply("바보 아니거든?(씨익...)");
  if (msg.content ==="쿠봇아 야") {
    const list = ["뭐", "왜"];
    const random = Math.floor(Math.random() * 2);
    const hey = list[random];
    msg.reply(hey);
  };
  if (!msg.content.startsWith(prefix)) return;
  if (msg.content.slice(0, prefix.length) !== prefix) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.get(command);

  if (cmd) cmd.run(client, msg, args);
});


client.login(process.env.TOKEN);