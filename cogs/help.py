import discord
from discord.ext import commands


class Help(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="정보")
    async def i(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="Kubot 의 정보")
        embed.add_field(name='버전', value='Version 21.6.18/V3.17', inline=False)
        embed.add_field(name='당신의 디스코드방을 편리하게 만듭니다.', value='[공식 디스코드 바로가기](https://discord.gg/S8pN4eD) [공식 사이트 바로가기](https://kubot.netlify.app/)')
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)
    
    @commands.command(name="패치내역")
    async def log(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="패치 내역", description="[패치 내역 보러 가기](https://kubot.netlify.app/log.html)")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="도움말")
    async def hellp(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="필요한게 있으면 여기 와주세요.", description="[공식디스코드 바로가기](https://discord.gg/S8pN4eD)\n 봇 접두사=`k!`와 `ㅋ`")
        embed.add_field(name='도움 명령어', value='`봇초대`, `도움말`, `공식사이트`,`공식디스코드`', inline=False)
        embed.add_field(name='놀이 명령어', value='`안녕`, `따라해`', inline=False)
        embed.add_field(name='정보 명령어', value='`정보`, `내프로필`, `개발자`, `패치내역`, `핑`', inline=False)
        embed.add_field(name='관리자 전용 명령어', value='`청소`, `킥`, `밴`')
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="개발자")
    async def developer(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="개발자는", description="바로 미간#8269 (이)야")
        embed.set_image(url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="공식사이트")
    async def site(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="공식사이트 링크", description="초라하긴 하지만 그래도 있어[공식사이트 바로가기](https://kubot.netlify.app/)")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="공식디스코드")
    async def discord(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="공식디스코드 링크", description="바로 여기야[공식디스코드 바로가기](https://discord.gg/S8pN4eD)")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)


def setup(bot):
    bot.add_cog(Help(bot))