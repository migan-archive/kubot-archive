import discord, datetime
from discord.ext import commands


class Profile(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

        @bot.command(name="내프로필")
        async def myprofile(ctx):
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

def setup(bot):
    bot.add_cog(Profile(bot))