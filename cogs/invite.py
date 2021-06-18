import discord
from discord.ext import commands


class Invite(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="봇초대")
    async def invite(self, ctx):
        embed = discord.Embed(color=0x00FF21, title="봇초대 링크", description="[초대하러 가기](https://discord.com/oauth2/authorize?client_id=704999866094452816&permissions=8&scope=bot)")
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)


def setup(bot):
    bot.add_cog(Invite(bot))