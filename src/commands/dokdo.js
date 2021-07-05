const Dokdo = require('dokdo');
const config = require('../../config.json');

module.exports = {
    name: "dokdo",
    async run(client, message, args) {
        const DokdoHandler = new Dokdo(client, { aliases: ['dokdo', 'dok'], prefix: '!', owners: '415135882006495242' }); // 여기있는 prefix는 dokdo 커맨드 전용 접두사입니다./ owners 안애다가 오너의 ID를 넣어주세요!
        DokdoHandler.run(message);
    }
}