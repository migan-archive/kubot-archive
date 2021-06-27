<!-- Kubot의 설명 -->
# Kubot
![이미지 설명](https://cdn.discordapp.com/attachments/713612619591712851/856842495006736414/discord.png)
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
+ 개발 할때 쓴 파이썬버전, 라이브러리 버전을 적어두었습니다.

## 사용된 파이썬 버전
|운영체제, 서버|버전|
|--|--|
|ubuntu 20.04.2 LTS (WSL)|3.8.5|
|heroku|3.8.5|

## 사용된 라이브러리
|라이브러리 이름|버전|
|--|--|
|discord.py|1.7.2|
|datetime|4.3|
|Dtime|0.1|


# 사용하실때
사용하살때 가이드입니다.

## 라이선스
- 해당봇은 MIT 라이선스를 사용중입니다.
- 아무렇게나 써도됩니다.

## 파이썬 설치법
1. 윈도우라면 python 공식 홈페이지에 가서 다운받으십시오(path는 꼭! 체크)
2. 만약 리눅스라면 기본적으로 깔려있을껍니다. 만약 아니라면 터미널에 아래에 있는 명령어를 치십시오.
```
sudo apt update
```
그리고
```
sudo apt install python3
```
를 쳐주세요.

그리고 pip도 깔아야 합니다.
```
sudo apt install python3-pip
```

## 라이브러리 설치법
1. discord.py
```
1. pip install discord
2. pip install discord.py==1.7.2
```

2. datetime

```
pip install datetime==4.3
```

3. Dtime
```
pip install Dtime==0.1
```

## 사용법
1. bot.py를 여셔서 access_token 부분에 아래에 있는 것은 없애주시고 토큰을 넣어주세요.
```python
access_token = os.environ["BOT_TOKEN"]
```
이렇게
```python
access_token = "Your_bot_token"
```

2. Procfile, requirement.txt, runtime.txt, Aptfile은 없애주시고 (원한다면 .gitignore도 없애도됨) 사용해 주세요.

+ 코드를 변형해서 사용 하셔도 됩니다.

3. 그리고 다하셨다면 콘솔창에다가 아래의 문구를 써주세요.
```
python bot.py
```
나
```
python3 bot.py
```
입력해주세요. 만약 위에가 안된다면 아래것으로 시도해보세요.

4. 이봇은 cogs로 파일을 나누어 놓았습니다. 봇의 커맨드를 바꾸실려면 cogs 폴더안 .py파일을 수정해 주세요.

5. 그리고 숨김폴더로 .git이 있을텐데 그것도 없애주세요.