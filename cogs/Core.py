import discord, random
from discord.ext import commands
import datetime
from Dtime import Uptime


Uptime.uptimeset()
class Core(commands.Cog, name="일반"):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="따라해", help="이용자가 입력한걸 다시 해줌")
    async def text(self, ctx, *, text):
        await ctx.send(text)

    @commands.command(name="안녕", help="인사를 해줍")
    async def Hello(self, ctx):
        user = ctx.author
        await ctx.send(random.choice(['안녕', 'hi', '안녕하세요', 'hello', f'{user.mention}님 안녕하세요!']))

    @commands.command(name="놀자", help="직접 써보셈")
    async def joy(self, ctx):
        await ctx.send(random.choice(['바빠', '뭐하고 놀건데?']))

    @commands.command(name="바보", help="부정함")
    async def babo(self, ctx):
        await ctx.reply("바보 아니거든?(씨익...)")

    @commands.command(name="내프로필", help="당신의 프로필을 보여줍니다.")
    async def myprofile(self, ctx):
        user = ctx.author
        date = datetime.datetime.utcfromtimestamp(((int(user.id) >> 22) + 1420070400000) / 1000)
        embed = discord.Embed(color=0x00FF21, title=f"{user.name}님의 프로필")
        embed.set_thumbnail(url=ctx.author.avatar_url)
        embed.add_field(name='가입일', value=f'{date.year}년{date.month}월{date.day}일', inline=False)
        embed.add_field(name='이름', value=f'{user.name}', inline=False)
        embed.add_field(name='닉네임', value=f'{user.display_name}', inline=False)
        embed.add_field(name='상태', value=f'{user.status}')
        embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.reply(embed=embed)

    @commands.command(name="봇초대", help="봇초대 링크를 줍니다.")
    async def invite(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="봇초대 링크", description="[초대하러 가기](https://discord.com/oauth2/authorize?client_id=704999866094452816&permissions=8&scope=bot)")
        embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.reply(embed=embed)

    
    @commands.command(name="업타임", help="이 봇의 업타임을 보여줍니다.")
    async def uptime(self, ctx):
        uptime = str(Uptime.uptime()).split(":")
        hours = uptime[0]
        minitues = uptime[1]
        seconds = uptime[2].split(".")[0]
        embed = discord.Embed(color=0x00FF21, title=":up:업타임", description=f"현재 업타임은 {hours}시간 {minitues}분 {seconds}초 입니다.")
        embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="서버수", help="이봇이 들어간 서버수를 알려줍니다.")
    async def server(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="Kubot의 서버수", description=f"현재 Kubot의 서버수는 {len(self.bot.guilds)}서버 입니다.")
        embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.reply(embed=embed)


def setup(bot):
    bot.add_cog(Core(bot))