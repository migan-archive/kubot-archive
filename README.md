# Kubot

[![Votes](https://koreanbots.dev/api/widget/bots/votes/704999866094452816.svg?style=classic&scale=1.5)](https://koreanbots.dev/bots/704999866094452816)
[![Servers](https://koreanbots.dev/api/widget/bots/servers/704999866094452816.svg?style=classic&scale=1.5)](https://koreanbots.dev/bots/704999866094452816)
[![Status](https://koreanbots.dev/api/widget/bots/status/704999866094452816.svg?style=classic&scale=1.5)](https://koreanbots.dev/bots/704999866094452816)

- 개발 할때 쓴 node.js버전, 라이브러리 버전을 적어두었습니다.

## 사용된 node.js 버전

| 운영체제, 서버           | 버전    |
| ------------------------ | ------- |
| ubuntu 20.04.2 LTS (WSL) | 14.17.4 |
| heroku                   | 14.17.4 |

## 사용된 라이브러리

| 라이브러리 이름 | 버전   |
| --------------- | ------ |
| discord.js      | 12.5.3 |
| dokdo           | 0.4.0  |
| dotenv          | 10.0.0 |
| koreanbots      | 2.0.12 |
| nodemon         | 2.0.12 |
| pretty-ms       | 7.0.1  |

## 사용하실때

사용하실때 가이드입니다.

### 라이선스

- 해당봇은 MIT 라이선스를 사용중입니다.
- 아무렇게나 써도됩니다.

### node.js 설치법

- 주의! 만약 node.js 버젼이 12이하라면 Embed가 작동을 안합니다.

- 주의! 만약 node.js 버젼이 14이하라면 dokdo커맨드가 작동을 안합니다.

1. 윈도우라면 node.js 공식 홈페이지에 가서 다운받으십시오
2. 리눅스라면 터미널에 아래에 있는 명령어를 치십시오.

- 이 설치법은 nvm을 설치하여 node.js를 설치합니다. 그리고 ubuntu 기준입니다. (방법2)

```zsh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

그리고

```zsh
nvm install 14.17.4
```

를 쳐주세요. (최신버전)

## 폴더 받기

아래의 명령어를 쳐주세요.

```zsh
git clone https://github.com/siwoo131/kubot-code.git
```

## 라이브러리 설치법

- 아래 명령어를 쳐주세요!
- 봇실행 파일이 있는곳에서 설치해 주세요!
- npm

```zsh
npm install
```

- yarn

```zsh
yarn
```

### 사용법

1. 프로젝트 폴더 안에서 .env 를 만들고 아래처럼 해주세요.

- 이 방법은 ubuntu 외에선 테스트를 안해 보았습니다.

```
TOKEN = 'YOUR_BOT_TOKEN'
```

3. Procfile, Aptfile은 없애주시고 (원한다면 .gitignore 도 없애도됨) 사용해 주세요.

- 코드를 변형해서 사용 하셔도 됩니다.

3. 그리고 다하셨다면 콘솔창에다가 아래의 문구를 써주세요.

- npm

```zsh
npm run start
```

- yarn

```zsh
yarn start
```

4. 이봇은 commandHandler 로 파일을 나누어 놓았습니다. 봇의 커맨드를 바꾸실려면 src/commands 폴더안 .js 파일을 수정해 주세요.

5. 그리고 숨김폴더로 .git이 있을텐데 그것도 없애주세요.
