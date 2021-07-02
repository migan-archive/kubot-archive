<!-- Kubot의 설명 -->
# Kubot

이 봇은 관리 등 여러 기능이 있는 봇입니다.

## 소개
1. 관리와 재미를 목적으로 만들어졌습니다.
2. 당신의 디스코드방을 편리하게 만듭니다.

## 기능
+ 관리 명령어
+ 일반 명령어
+ 개발 명령어

## Kubot의 웹사이트
[웹사이트 바로가기](https://kubot.netlify.app/)

# 개발 관련
+ 개발 할때 쓴 node.js버전, 라이브러리 버전을 적어두었습니다.

## 사용된 파이썬 버전
|운영체제, 서버|버전|
|--|--|
|ubuntu 20.04.2 LTS (WSL)|16.4.1|
|heroku|(아직 추가안함)|

## 사용된 라이브러리
|라이브러리 이름|버전|
|--|--|
|discord.js|12.5.3|
|dokdo|0.3.0|
|koreanbots|2.0.12|


# 사용하실때
사용하살때 가이드입니다.

## 라이선스
- 해당봇은 MIT 라이선스를 사용중입니다.
- 아무렇게나 써도됩니다.

## node.js 설치법
* 주의! 만약 node.js 버젼이 12이하라면 Embed가 작동을 안합니다.
1. 윈도우라면 node.js 공식 홈페이지에 가서 다운받으십시오
2. 리눅스라면 터미널에 아래에 있는 명령어를 치십시오.
* 이 설치법은 nvm을 설치하여 node.js를 설치합니다. 그리고 ubuntu 기준입니다. (방법2)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
그리고
```javascript
nvm install 16.4.0
```
를 쳐주세요. (최신버전)

## 라이브러리 설치법
* 봇실행 파일이 있는곳에서 설치해 주세요!
1. discord.js
```javascript
npm i discord.js@12.5.3
```
아마 위 명령어만 쳐도 나머지 2개가 설치될껍니다.(package.json이 있는경우)

## 사용법
1. index.js를 여셔서 line 50 부분에 아래에 있는 것은 없애주시고 토큰을 넣어주세요.
```javascript
client.login(process.env.TOKEN);
```
이렇게
```javascript
client.login("YOUR_BOT_TOKEN");
```

2. Procfile, Aptfile은 없애주시고 (원한다면 .gitignore도 없애도됨) 사용해 주세요.

+ 코드를 변형해서 사용 하셔도 됩니다.

3. 그리고 다하셨다면 콘솔창에다가 아래의 문구를 써주세요.
```
node index.js
```
4. 이봇은 commands로 파일을 나누어 놓았습니다. 봇의 커맨드를 바꾸실려면 commands 폴더안 .js파일을 수정해 주세요.

5. 그리고 숨김폴더로 .git이 있을텐데 그것도 없애주세요.

6. Dokdo 커맨드를 이용하실려면 owners 에 있는 아이디를 바꿔주세요!