'''
MIT License

Copyright (c) 2021 siwoo131

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
'''
import discord
from discord.ext import commands


class Develop(commands.Cog, name="개발"):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="파이썬버전", help="이봇에 사용된 파이썬 버전을 알려줍니다.", aliases=["파버", "파이썬"])
    async def pythonver(self, ctx):
        await ctx.reply("Kubot은 python 3.8.5 버전을 사용중입니다.")

    @commands.command(name="사용된모듈", help="이봇에 사용된 모듈을 알려줍니다.", aliases=["모듈", "모듈버전"])
    async def modulever(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="모듈", description="사용된 모듈")
        embed.add_field(name='discord.py', value='버전=1.7.2', inline=False)
        embed.add_field(name='datetime', value='버전=4.3', inline=False)
        embed.add_field(name='Dtime', value='버전=0.1')
        embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.reply(embed=embed)

    @commands.command(name="소스코드", help="이 봇의 코드를 보여줍니다.")
    async def sorce(self, ctx):
        embed = discord.Embed(color=0x00FF21, title='소스코드', description='봇의 코드입니다. [깃허브로 가기](https://github.com/siwoo131/kubot-code)')
        embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.reply(embed=embed)

    @commands.command(name="라이선스", help="해당 봇의 라이선스를 알려줍니다.")
    async def license(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="Kubot의 라이선스", description="해당봇은 MIT라이선스를 사용하고있습니다.")
        embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.reply(embed=embed)



def setup(bot):
    bot.add_cog(Develop(bot))