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
from youtube_dl import YoutubeDL
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from discord.utils import get
from discord import FFmpegPCMAudio
import asyncio
import time


class Music(commands.Cog, name="음악"):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="입장", help="음성채널에 입장합니다.")
    async def join(self, ctx):
        try:
            global vc
            vc = await ctx.message.author.voice.channel.connect()
            embed = discord.Embed(color=0x00FF21, title="음성채널 입장", description="음성채널의 입장하였습니다.")
            embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)
        
        except:
        
            try:
                await vc.move_to(ctx.message.author.voice.channel)
                embed = discord.Embed(color=0x00FF21, title="음성채널 입장", description="음성채널의 입장하였습니다.")
                embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
                await ctx.send(embed=embed)
        
            except:
                embed = discord.Embed(color=0x00FF21, title="음성채널 입장", description="음성채널에 유저가 없습니다.")
                embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
                await ctx.send(embed=embed)

    @commands.command(name="퇴장", help="음성채널에서 퇴장합니다.")
    async def leave(self, ctx):
        try:
            await vc.disconnect()
            embed = discord.Embed(color=0x00FF21, title="음성채널 퇴장", description="음성채널에서 퇴장하였습니다.")
            embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)
        
        except:
            embed = discord.Embed(color=0x00FF21, title="음성채널 퇴장", description="음성채널에서 이미 퇴장하였습니다.")
            embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)

    @commands.command(name="링크플레이", help="url주소로 플레이합니다.")
    async def uplay(self, ctx, *, url):
        YDL_OPTIONS = {'format': 'bestaudio','noplaylist':'True'}
        FFMPEG_OPTIONS = {'before_options': '-reconnect 1 -reconnect_streamed 1 -reconnect_delay_max 5', 'options': '-vn'}

        if not vc.is_playing():
            with YoutubeDL(YDL_OPTIONS) as ydl:
                info = ydl.extract_info(url, download=False)
            URL = info['formats'][0]['url']
            vc.play(FFmpegPCMAudio(URL, **FFMPEG_OPTIONS))
            embed = discord.Embed(title= "노래 재생", description = f"현재 {url}을(를) 재생하고 있습니다.", color = 0x00FF21)
            embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)
        
        else:
            embed = discord.Embed(title= "노래 재생", description = "이미 플레이중입니다.", color = 0x00FF21)
            embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)

    @commands.command(name="일시정지", help="노래를 일시정지합니다.")
    async def mpause(self, ctx):
        if vc.is_playing():
            vc.pause()
            embed = discord.Embed(title= "일시정지", description ="일시정지 했습니다.", color = 0x00FF21)
            embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)
        
        else:
            embed = discord.Embed(title= "일시정지", description ="현재 플레이가 없거나, 이미 일시정지를 했습니다.", color = 0x00FF21)
            embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)

    @commands.command(name="재생", help="노래를 다시 재생합니다.")
    async def resume(self, ctx):
        try:
            vc.resume()
        
        except:
            embed = discord.Embed(title= "다시플레이", description="지금 플레이가 없거나, 이미 다시시작 했습니다.", color = 0x00ff00)
            embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)
        
        else:
            embed = discord.Embed(title= "다시플레이", description="다시 재생했습니다.", color = 0x00FF21)
            embed.set_footer(text="bot made by. 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)

    @commands.command(name="플레이종료", help="노래를 종료합니다.")
    async def stop(self, ctx):
        if vc.is_playing():
            vc.stop()
            embed = discord.Embed(title= "플레이 종료", description="플레이를 종료했습니다.", color = 0x00FF21)
            embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/979c90e1d75652e72eea393329a08b57.webp?size=1024")
            await ctx.send(embed=embed)
        
        else:
            embed = discord.Embed(title= "플레이 종료", description="플레이가 없거나, 이미 플레이를 종료하였습니다..", color = 0x00ff00)
            embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/979c90e1d75652e72eea393329a08b57.webp?size=1024")
            await ctx.send(embed=embed)


def setup(bot):
    bot.add_cog(Music(bot))