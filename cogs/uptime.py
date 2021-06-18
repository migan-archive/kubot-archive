import discord
from discord.ext import commands
from Dtime import Uptime


Uptime.uptimeset()
class uptime(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="업타임")
    async def uptime(self, ctx):
        uptime = str(Uptime.uptime()).split(":")
        hours = uptime[0]
        minitues = uptime[1]
        seconds = uptime[2].split(".")[0]
        embed = discord.Embed(color = 0x00FF21, title=":up:업타임", description=f"현재 업타임은 {hours}시간 {minitues}분 {seconds}초 입니다.")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)


def setup(bot):
    bot.add_cog(uptime(bot))