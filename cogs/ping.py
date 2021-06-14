import discord
from discord.ext import commands


class Ping(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

        @bot.command(name="핑")
        async def ping(ctx):
            embed = discord.Embed(title='퐁!', description=str(bot.latency) + 'ms', color=0x00FF21)
            embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)

def setup(bot):
    bot.add_cog(Ping(bot))