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
import discord, os
from discord.ext import commands, tasks
from itertools import cycle
from discord.ext.commands import CommandNotFound


bot = commands.Bot(command_prefix=['k!', '쿠봇아 ', '쿠'], intents=discord.Intents.all())
access_token = os.environ["BOT_TOKEN"]
status = cycle(['k!help로 명령어 확인', '더욱더 발전하겠습니다', '이 메세지는 10초마다 한번씩 바뀝니다', '디스코드서버를 편리하게'])

@bot.event
async def on_command_error(ctx, error):
    if isinstance(error, CommandNotFound):
        embed = discord.Embed(title = ":x:Error!", description = "해당 명령어는 존재하지 않습니다.\nk!도움말으로 명령어를 찾아주세요.", color = 0x00FF21)
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)
        return
    raise error

for file in os.listdir("cogs"):
    if file.endswith(".py"):
        bot.load_extension(f"cogs.{file[:-3]}")
        print(f"cogs.{file[:-3]} 로드완료")

@bot.event 
async def on_ready():
    change_status.start()
    print("--------------------------------------") 
    print(f"{bot.user.name}으로 로그인 하셨습니다.")
    print("Licence = MIT")
    print("봇 원작자 = 미간#8269")
    print("--------------------------------------")

@tasks.loop(seconds=10)
async def change_status():
    await bot.change_presence(activity=discord.Game(next(status)))


bot.run(access_token)