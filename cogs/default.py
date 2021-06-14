import discord
from discord.ext import commands


class Default(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

        @bot.command(name="따라해")
        async def text(ctx, *, text):
            await ctx.send(text)

        @bot.command(name="안녕")
        async def Hello(ctx):
            await ctx.send("안녕")


def setup(bot):
    bot.add_cog(Default(bot))