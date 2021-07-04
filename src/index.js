const Discord = require('discord.js');
const client = new Discord.Client();
const Dokdo = require('dokdo');
const fs = require('fs');
const DokdoHandler = new Dokdo(client, { aliases: ['dokdo', 'dok'], prefix: '!', owners: '415135882006495242' }); // 여기있는 prefix는 dokdo 커맨드 전용 접두사입니다./ owners 안애다가 오너의 ID를 넣어주세요!
const prefix = "--"; // 여기에 봇 접두사를 넣으면 됩니다.
const config = require('../config.json'); // 이건 TEST할때 쓰는 겁니다. 여기안에 토큰이 들어있어서 gitignore에 적어두었습니다

client.commands = new Discord.Collection()

client.commands.load = dir => {
  for (const file of fs.readdirSync(dir)) {
    const cmd = require(`./commands/${file}`);
    client.commands.set(cmd.name, cmd);
  }

  console.log("------------------------------------------------------------------------------------------------------------------------");
  console.log(client.commands.map(c => c.name).join(', ') + ' 명령어가 로드됨.');
  console.log("------------------------------------------------------------------------------------------------------------------------");
}

client.commands.load(__dirname + "/commands");

client.on('ready', () => {
  const Status = [
    '--help로 명령어 확인',
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

  console.log("--------------------------------------");
  console.log(`${client.user.tag}으로 로그인 하셨습니다.`);
  console.log("Licence = MIT");
  console.log("봇 원작자 = 미간#8269");
  console.log("--------------------------------------");
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  if (msg.content.slice(0, prefix.length) !== prefix) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.get(command);

  if (cmd) cmd.run(client, msg, args);
})


client.on('message', async message => {
  if (message.content);
  DokdoHandler.run(message);
})

client.login(config.token); //process.env.TOKEN (heroku), config.token (test)