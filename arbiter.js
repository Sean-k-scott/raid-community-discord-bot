const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'github commit autobuild to 24/7 hosting') {
 msg.reply('autobuild on commit working');
 }
 });

client.login('NTgxOTczMTEwNDUwODE1MDMy.XOnD0Q.t3Y-uCUxqvksLrw64fq0dR5VOGQ');
