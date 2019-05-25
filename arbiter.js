const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'test') {
 msg.reply('test acknowledged');
 }
 });

client.login('NTgxOTczMTEwNDUwODE1MDMy.XOnD0Q.t3Y-uCUxqvksLrw64fq0dR5VOGQ');
