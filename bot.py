#Kubot 코드
# 모듈
import discord, os, random, datetime
from discord.ext import commands, tasks
from itertools import cycle
from discord.ext.commands import CommandNotFound
from Dtime import Uptime


# 봇 설정
access_token = os.environ["BOT_TOKEN"]
bot = commands.Bot(command_prefix="-", intents=discord.Intents.all())
status = cycle(['-명령어로 명령어 확인', '더욱더 발전하겠습니다', '이 메세지는 10초마다 한번씩 바뀝니다', '디스코드서버를 편리하게'])
Uptime.uptimeset()

@bot.event
async def on_command_error(ctx, error):
    if isinstance(error, CommandNotFound):
        embed = discord.Embed(title = ":x:Error!", description = "해당 명령어는 존재하지 않습니다.\n-명령어으로 명령어를 찾아주세요.", color = 0x00FF21)
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)
        return
    raise error

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
    global user
    user = ctx.author
    await ctx.send(random.choice(['안녕', 'hi', '안녕하세요', 'hello', f'{user.name}님 안녕하세요!']))

@bot.command()
async def 핑(ctx):
    embed = discord.Embed(title='퐁!', description=str(bot.latency) + 'ms', color=0x00FF21)
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 놀자(ctx):
    await ctx.send(random.choice(['바빠', '뭐하고 놀건데?']))

@bot.command()
async def 바보(ctx):
    await ctx.send(random.choice(['바보 아니거든?(씨익...)', '바보아닌데?', '그건 당신 아닌가요?']))

@bot.command()
async def 무(ctx):
    await ctx.send("야호")

@bot.command()
async def 생일(ctx):
    ctx.send("내 생일은 4월 30일 이야")

@bot.command()
async def 도움(ctx):
    embed = discord.Embed(color=0x00FF21, title="필요한게 있으면 여기 와주세요.", description="[공식디스코드 바로가기](https://discord.gg/S8pN4eD)")
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)
    
@bot.command()
async def 개발자(ctx):
    embed = discord.Embed(color=0x00FF21, title="개발자는", description="바로 미간#8269 (이)야")
    embed.set_image(url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 봇초대(ctx):
    embed = discord.Embed(color=0x00FF21, title="봇초대 링크", description="[공식사이트 바로가기](https://kubot.netlify.app/invite.html)")
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 명령어(ctx):
    embed = discord.Embed(color=0x00FF21, title="명령어", description='접두사=`-`')
    embed.add_field(name='도움 명령어', value='`명령어`, `봇초대`, `도움`, `공식사이트`,`공식디스코드`', inline=False)
    embed.add_field(name='놀이 명령어', value='`안녕`, `바보`, `놀자`, `무`, `랜덤숫자`, `따라해`', inline=False)
    embed.add_field(name='정보 명령어', value='`정보`, `내프로필`, `개발자`, `패치내역`, `핑`, `생일`, `업타임`', inline=False)
    embed.add_field(name='관리자 전용 명령어', value='`청소`, `킥`, `밴`')
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 패치내역(ctx):
    embed = discord.Embed(color=0x00FF21, title="패치 내역", description="[패치 내역 보러 가기](https://kubot.netlify.app/log.html)")
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 정보(ctx):
    embed = discord.Embed(color=0x00FF21, title="Kubot 의 정보")
    embed.add_field(name='버전', value='Version 21.6.18/V3.16', inline=False)
    embed.add_field(name='당신의 디스코드방을 편리하게 만듭니다.', value='[공식 디스코드 바로가기](https://discord.gg/S8pN4eD) [공식 사이트 바로가기](https://kubot.netlify.app/)')
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)

@bot.command()
async def 내프로필(ctx):
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

    if permission is True:
        embed = discord.Embed(color=0x00FF21, title="멤버 차단", description=f"관리자 {user.name}님의 요청으로 {member}(이)가 차단되었습니다.")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await member.ban(reason=reason)
        await ctx.send(embed=embed)
        
    if permission is False:
        embed = discord.Embed(color=0x00FF21, title="멤버 차단", description=f"{user.name}님, 해당작업은 관리자 권한을 가져야만 가능 합니다.")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

@bot.command()
async def 업타임(ctx):
    uptime = str(Uptime.uptime()).split(":")
    hours = uptime[0]
    minitues = uptime[1]
    seconds = uptime[2].split(".")[0]
    embed = discord.Embed(color = 0x00FF21, title=":up:업타임", description=f"현재 업타임은 {hours}시간 {minitues}분 {seconds}초 입니다.")
    embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
    await ctx.send(embed=embed)


# 봇 실행
bot.run(access_token)