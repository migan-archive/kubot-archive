import discord, random
from discord.ext import commands


class Core(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="따라해")
    async def text(self, ctx, *, text):
        await ctx.send(text)

    @commands.command(name="안녕")
    async def Hello(self, ctx):
        user = ctx.author
        await ctx.send(random.choice(['안녕', 'hi', '안녕하세요', 'hello', f'{user.name}님 안녕하세요!']))

    @commands.command(name="놀자")
    async def joy(self, ctx):
        await ctx.send(random.choice(['바빠', '뭐하고 놀건데?']))

    @commands.command()
    async def 바보(self, ctx):
        await ctx.send(random.choice(['바보 아니거든?(씨익...)', '바보아닌데?', '그건 당신 아닌가요?']))


def setup(bot):
    bot.add_cog(Core(bot))