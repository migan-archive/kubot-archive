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
  console.log(client.commands.map(c => c.name).join(', ') + ' 로드완료');
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
  console.log(`로그인한 사용자: ${client.user.tag}`);
  console.log("Licence: MIT");
  console.log("봇 원작자: ! 미간 !#8269");
  console.log("======================================");
});


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  if (msg.content.slice(0, prefix.length) !== prefix) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.get(command);

  if (cmd) cmd.run(client, msg, args);
});


client.login(process.env.TOKEN);