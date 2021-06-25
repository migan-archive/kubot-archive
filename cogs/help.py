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


class Help(commands.Cog, name="도움"):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="정보", help="이봇의 정보를 보여줍니다.")
    async def information(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="Kubot 의 정보")
        embed.add_field(name='당신의 디스코드방을 편리하게 만듭니다.', value='[공식 디스코드 바로가기](https://discord.gg/S8pN4eD) [공식 사이트 바로가기](https://kubot.netlify.app/)')
        embed.set_footer(text="bot made by. 미간#8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="도움말", help="이봇의 사용법을 알려줍니다.")
    async def hellp(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="필요한게 있으면 여기 와주세요.", description="[공식디스코드 바로가기](https://discord.gg/S8pN4eD)\n 봇 접두사=**`k!`**, **`쿠봇아 `**, **`쿠`**")
        embed.add_field(name='명령어', value='명령어를 볼려면 k!help를 쳐주세요.')
        '''
        embed.set_thumbnail(url="https://cdn.discordapp.com/avatars/415135882006495242/40b3f2e3fbb710522517b0e14dfb751b.webp?size=1024")
        embed.add_field(name='도움 명령어', value='**`봇초대`**, **`도움말`**, **`사이트`**, **`디스코드`**', inline=False)
        embed.add_field(name='놀이 명령어', value='**`안녕`**, **`따라해`**, **`놀자`**, **`바보`**, **`ㅋㅋ`**', inline=False)
        embed.add_field(name='정보 명령어', value='**`정보`**, **`내프로필`**, **`개발자`**, **`핑`**, **`업타임`**, **`서버수`**', inline=False)
        embed.add_field(name='관리자 전용 명령어', value='**`청소`**, **`킥`**, **`밴`**', inline=False)
        embed.add_field(name='개발 명령어', value='**`파이썬버전(파버, 파이썬)`**, **`사용된모듈(모듈, 모듈버전)`**, **`소스코드(코드)`**, **`라이선스(라이센스)`**')
        '''      
        embed.set_footer(text="bot made by. 미간#8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="개발자", help="이 봇의 개발자를 보여줍니다.")
    async def developer(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="개발자는", description="바로 미간#8269 (이)야")
        embed.set_thumbnail(url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        embed.set_footer(text="bot made by. 미간#8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="사이트", help="이봇의 사이트링크를 줍니다.")
    async def site(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="공식사이트 링크", description="초라하긴 하지만 그래도 있어[공식사이트 바로가기](https://kubot.netlify.app/)")
        embed.set_footer(text="bot made by. 미간#8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="디스코드", help="이봇의 디스코드링크를 줍니다.")
    async def discord(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="공식디스코드 링크", description="바로 여기야[공식디스코드 바로가기](https://discord.gg/S8pN4eD)")
        embed.set_footer(text="bot made by. 미간#8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="문의", help="이봇의 문의 링크를 줍니다.")
    async def support(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="문의", description="문제가 발생 하셨나요? 아니면 이봇의 관한 궁금한 점이 있나요? 그럼 여기로 오세요.\n[공식디스코드 바로가기](https://discord.gg/S8pN4eD)")
        embed.add_field(name='디스코드방에서 문의', value='[공식디스코드 바로가기](https://discord.gg/S8pN4eD)', inline=False)
        embed.add_field(name='DM으로 문의', value='미간#8269')
        embed.set_footer(text="bot made by. 미간#8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)


def setup(bot):
    bot.add_cog(Help(bot))