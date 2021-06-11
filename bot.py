#Kubot 코드
# 모듈
import discord, os, random, datetime
from discord.ext import commands, tasks
from itertools import cycle


# 봇 설정
access_token = os.environ["BOT_TOKEN"]
bot = commands.Bot(command_prefix="-", intents=discord.Intents.all())
status = cycle(['-명령어로 명령어 확인', '더욱더 발전하겠습니다', '이 메세지는 10초마다 한번씩 바뀝니다', '디스코드서버를 편리하게'])

@bot.event 
async def on_ready():
    change_status.start()
    print("--------------------------------------") 
    print(f"{bot.user.name}으로 로그인 하셨습니다.")
    print("--------------------------------------")

@tasks.loop(seconds=10)
async def change_status():
    await bot.change_presence(activity=discord.Game(next(status)))


#봇 커맨드
@bot.command()
async def 따라해(ctx, *, text):
    await ctx.send(text)

@bot.command()
async def 안녕(ctx):
    user = ctx.author
    await ctx.send(random.choice(['안녕', 'hi', '안녕하세요', 'hello', f'{user.name}님 안녕하세요!']))

@bot.command()
async def 핑(ctx):
    embed = discord.Embed(title='퐁!', description=str(bot.latency) + 'ms', color=0x00FF21)
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/979c90e1d75652e72eea393329a08b57.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 놀자(ctx):
    await ctx.send(random.choice(['바빠', '뭐하고 놀건데?']))

@bot.command()
async def 짱구야놀자(ctx):
    await ctx.send(random.choice(['나 짱구 아닌데?', '누구 말하시는거죠?']))

@bot.command()
async def 바보(ctx):
    await ctx.send(random.choice(['바보 아니거든?(씨익...)', '바보아닌데?', '그건 당신 아닌가요?']))

@bot.command()
async def 무(ctx):
    await ctx.send("야호")

@bot.command()
async def こんにちは(ctx):
    ctx.send(random.choice(['日本人ですか？', '일본인 입니까?']))

@bot.command()
async def 좋아하는것(ctx):
    ctx.send(random.choice['누구 말하시는 거죠?', '저이거 말하면 죽는데요?', '진짜 말할까요?', '싫어'])

@bot.command()
async def 생일(ctx):
    ctx.send("내 생일은 4월 30일 이야")

@bot.command()
async def 日本人です(ctx):
    await ctx.send(random.choice(['はい', '네']))

@bot.command()
async def 도와줘(ctx):
    embed = discord.Embed(color=0x00FF21, title="필요한게 있으면 여기 와주세요.", description="[공식디스코드 바로가기](https://discord.gg/S8pN4eD)")
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)
    
@bot.command()
async def 개발자(ctx):
    embed = discord.Embed(color=0x00FF21, title="개발자는", description="바로 미간#8269 야")
    embed.set_image(url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 봇초대(ctx):
    embed = discord.Embed(color=0x00FF21, title="봇초대 링크", description="[공식사이트 바로가기](https://kubot.netlify.app/)")
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 명령어(ctx):
    embed = discord.Embed(color=0x00FF21, title="명령어")
    embed.add_field(name='도움명령어', value='`-명령어`\n`-봇초대`\n`-도와줘`\n`-공식사이트`\n`-공식디스코드`', inline=False)
    embed.add_field(name='놀이 명령어', value='`-안녕`\n`-바보`\n`-놀자`\n`-무`\n`-랜덤숫자`\n`-따라해`', inline=False)
    embed.add_field(name='정보 명령어', value='`-정보`\n`-내프로필`\n`-개발자`\n`-패치내역`\n`-핑`\n`-생일`', inline=False)
    embed.add_field(name='관리자 전용 명령어', value='`-청소`\n`-킥`\n`-밴`')
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 패치내역(ctx):
    embed = discord.Embed(color=0x00FF21, title="패치 내역", description="[패치 내역 보러 가기](https://kubot.netlify.app/log.html)")
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 정보(ctx):
    embed = discord.Embed(color=0x00FF21, title="버전 3.1(music code delete)", description="당신의 디스코드방을 편리하게 만듭니다.\n[공식 디스코드 바로가기](https://discord.gg/S8pN4eD)[공식 사이트 바로가기](https://kubot.netlify.app/)")
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 내프로필(ctx):
    user = ctx.author
    date = datetime.datetime.utcfromtimestamp(((int(user.id) >> 22) + 1420070400000) / 1000)
    embed = discord.Embed(color=0x00FF21, title=f"{user.name}님의 프로필")
    embed.set_image(url=ctx.author.avatar_url)
    embed.add_field(name='가입일', value=f'{date.year}년{date.month}월{date.day}일', inline=False)
    embed.add_field(name='이름', value=f'{user.name}', inline=False)
    embed.add_field(name='아이디', value=f'{user.id}')
    embed.add_field(name='닉네임', value=f'{user.display_name}', inline=False)
    embed.add_field(name='상태', value=f'{user.status}')
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 공식사이트(ctx):
    embed = discord.Embed(color=0x00FF21, title="공식사이트 링크", description="초라하긴 하지만 그래도 있어[공식사이트 바로가기](https://kubot.netlify.app/)")
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 공식디스코드(ctx):
    embed = discord.Embed(color=0x00FF21, title="공식디스코드 링크", description="바로 여기야[공식디스코드 바로가기](https://discord.gg/S8pN4eD)")
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 랜덤숫자(ctx):
    await ctx.send(random.randint(1, 10000000000000))

@bot.command()
async def 청소(ctx, amount=5):
    permission = (ctx.author.guild_permissions.administrator)
    user = ctx.author

    if permission is True:
        await ctx.channel.purge(limit=amount)
        embed = discord.Embed(color=0x00FF21, title="채팅청소", description=f"관리자 {user.name}님이 채팅{amount}개 채팅청소를 했습니다")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    if permission is False:
        embed = discord.Embed(color=0x00FF21, title="채팅청소", description=f"{user.name}님, 권한이 없어서 해당작업을 수행하지 못했습니다.")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

@bot.command()
async def 킥(ctx, member : discord.Member, *, reason=None):
    permission = (ctx.author.guild_permissions.administrator)
    user = ctx.author

    if permission is True:
        embed = discord.Embed(color=0x00FF21, title="멤버 추방", description=f"관리자 {user.name}님의 요청으로 {member}(이)가 추방되었습니다.")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await member.kick(reason=reason)
        await ctx.send(embed=embed)
        
    if permission is False:
        embed = discord.Embed(color=0x00FF21, title="멤버 추방", description=f"{user.name}님, 해당작업은 관리자 권한을 가져야만 가능 합니다.")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

@bot.command()
async def 밴(ctx, member : discord.Member, *, reason=None):
    permission = (ctx.author.guild_permissions.administrator)
    user = ctx.author

    if permission is True:
        embed = discord.Embed(color=0x00FF21, title="멤버 차단", description=f"관리자 {user.name}님의 요청으로 {member}(이)가 차단되었습니다.")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await member.ban(reason=reason)
        await ctx.send(embed=embed)
        
    if permission is False:
        embed = discord.Embed(color=0x00FF21, title="멤버 차단", description=f"{user.name}님, 해당작업은 관리자 권한을 가져야만 가능 합니다.")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)


# 봇 실행
bot.run(access_token)