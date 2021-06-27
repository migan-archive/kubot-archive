import discord
from discord.ext import commands


class Develop(commands.Cog, name="개발"):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="파이썬버전", help="이봇에 사용된 파이썬 버전을 알려줍니다.", aliases=["파버", "파이썬", "python"])
    async def pythonver(self, ctx):
        message = await ctx.reply("파이썬 버전 불러오는중...")
        await message.edit(content="Kubot은 python 3.8.5 버전을 사용중입니다.")

    @commands.command(name="사용된모듈", help="이봇에 사용된 모듈을 알려줍니다.", aliases=["모듈", "모듈버전", "라이브러리"])
    async def modulever(self, ctx):
        message = await ctx.reply("라이브러리 불려오는중")
        embed = discord.Embed(color=0x00FF21, title="모듈", description="사용된 모듈")
        embed.add_field(name='discord.py', value='버전=1.7.2', inline=False)
        embed.add_field(name='datetime', value='버전=4.3', inline=False)
        embed.add_field(name='Dtime', value='버전=0.1')
        embed.set_footer(text="bot made by. 미간#8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await message.edit(embed=embed)

    @commands.command(name="소스코드", help="이 봇의 코드를 보여줍니다.", aliases=["코드", "code"])
    async def sorce(self, ctx):
        message = await ctx.reply("인터넷에서 가져오는중...")
        embed = discord.Embed(color=0x00FF21, title='소스코드', description='봇의 코드입니다. [깃허브로 가기](https://github.com/siwoo131/kubot-code)')
        embed.set_footer(text="bot made by. 미간#8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await message.edit(embed=embed)

    @commands.command(name="라이선스", help="해당 봇의 라이선스를 알려줍니다.", aliases=["라이센스", "licence"])
    async def license(self, ctx):
        message = await ctx.reply("라이선스 불러오는중...")
        embed = discord.Embed(color=0x00FF21, title="Kubot의 라이선스", description="해당봇은 MIT라이선스를 사용하고있습니다.")
        embed.set_footer(text="bot made by. 미간#8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await message.edit(embed=embed)

    @commands.command(name="풀리퀘스트", help="해당봇에 무언갈 기여하고 싶을때 git repository링크를 알려줍니다.", aliases=["피알", "pr", "PR"])
    async def pr(self, ctx):
        message = await ctx.reply("인터넷에서 가져오는중...")
        embed = discord.Embed(color=0x00FF21, title='풀 리퀘스트', description='봇에 무언갈 기여 하고 싶으신가요? 아래 링크로 들어 가서 해주세요.\n[깃허브로 가기](https://github.com/siwoo131/kubot-code)')
        embed.set_footer(text="bot made by. 미간#8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024") 
        await message.edit(embed=embed)


def setup(bot):
    bot.add_cog(Develop(bot))