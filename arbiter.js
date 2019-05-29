const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === '!help Skullcrusher') {
 msg.author.send('Champ Name: Skullcrusher \n \n Overall Tier Rating: S \n \n Best Uses: CB / Fire Knight / Arena / Spiders Den \n \n Mastery Trees: Offense / Support \n \n Mastery Must Haves: Bring it Down / Warmaster / Rapid Response / Cycle of Magic / Spirit Haste \n \n Artifact Suggestion: Reflex/SPD or Full SPD \n \n Buddies:\nRoshcard (Block Damage in Arena = Counterattack with no damage taken)\nCrimson Helm (Provoke and Block Damage)\nReinbeast (lots of HOTs)\n\nMain Points:\n- Team with Giant Slayer Coldheart and Apothecary in Clan Boss, multi-hit A1 skills will hit the boss more with counterattack\n- The above is also useful for Fire Knight to break down shield after boss AoE, without affecting turn meter\n- Heal Reduction A1 skill also useful for blocking Fire Knight and Spirit Keep boss heals\n- Combine with AoE champs(Bellower, Rae, Big Un) in Spider Den for more AoE damage\n\nDiscussion Link: #skullcrusher');
 }
 });

client.login('NTgxOTczMTEwNDUwODE1MDMy.XOnD0Q.t3Y-uCUxqvksLrw64fq0dR5VOGQ');
