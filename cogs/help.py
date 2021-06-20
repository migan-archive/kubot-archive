import discord
from discord.ext import commands


class Help(commands.Cog, name="도움"):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="정보", help="이봇의 정보를 보여줍니다.")
    async def information(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="Kubot 의 정보")
        embed.add_field(name='당신의 디스코드방을 편리하게 만듭니다.', value='[공식 디스코드 바로가기](https://discord.gg/S8pN4eD) [공식 사이트 바로가기](https://kubot.netlify.app/)')
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="도움말", help="이봇의 사용법을 알려줍니다.")
    async def hellp(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="필요한게 있으면 여기 와주세요.", description="[공식디스코드 바로가기](https://discord.gg/S8pN4eD)\n 봇 접두사=**`k!`**, **`ㅋ`**, **`쿠봇아 `**, **`쿠`**")
        embed.add_field(name='도움 명령어', value='`봇초대`, `도움말`, `공식사이트`,`공식디스코드`', inline=False)
        embed.add_field(name='놀이 명령어', value='`안녕`, `따라해`, `놀자`, `바보`', inline=False)
        embed.add_field(name='정보 명령어', value='`정보`, `내프로필`, `개발자`, `핑`, `업타임`', inline=False)
        embed.add_field(name='관리자 전용 명령어', value='`청소`, `킥`, `밴`')
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="개발자", help="이 봇의 개발자를 보여줍니다.")
    async def developer(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="개발자는", description="바로 미간#8269 (이)야")
        embed.set_thumbnail(url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="공식사이트", help="이봇의 사이트링크를 줍니다.")
    async def site(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="공식사이트 링크", description="초라하긴 하지만 그래도 있어[공식사이트 바로가기](https://kubot.netlify.app/)")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="공식디스코드", help="이봇의 디스코드링크를 줍니다.")
    async def discord(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="공식디스코드 링크", description="바로 여기야[공식디스코드 바로가기](https://discord.gg/S8pN4eD)")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="문의", help="이봇의 문의 링크를 줍니다.")
    async def support(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="문의", description="문제가 발생 하셨나요? 아니면 이봇의 관한 궁금한 점이 있나요? 그럼 여기로 오세요.\n[공식디스코드 바로가기](https://discord.gg/S8pN4eD)")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)


def setup(bot):
    bot.add_cog(Help(bot))