const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === '!help steelskull') {
 msg.author.send('Champ Name: Skullcrusher

Overall tier rating: S

Best Uses: CB / Fire Knight / Arena / Spider’s Den

Mastery Trees:  Offence / Support

Mastery Must Haves: Bring It Down / Warmaster / Rapid response / Cycle of magic / Spirit Haste

Artifact suggestions: Reflex Spd or full Spd

Buddies: Roshcard’s Block Damage in arena = counterattack with no damage taken, Crimson Helm’s Provoke and block damage also = limited damage, Reinbeast for lots of HOTs.

Main Points:
- Team with post GS Coldheart and Apoth in CB, who’s multi-hit A1 skills will hit the boss more with counterattack or champs like Sephallia who has an A1 HP Burn
- The above is also useful for Fire Knight to break down shield after boss AOE, without affecting turn meter
- Heal Reduction A1 skill also useful for blocking Fire Knight’s and Spirit Keep’s boss heals
- Combine with AOE A1 champs (Bellower, Rae) in Spider’s Den for more AOE damage

Discussion Link: #skullcrusher');
 }
 });

client.login('NTgxOTczMTEwNDUwODE1MDMy.XOnD0Q.t3Y-uCUxqvksLrw64fq0dR5VOGQ');
