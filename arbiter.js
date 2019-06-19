const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

// Skullcrusher

client.on('message', msg => {

// abbreviations

if (msg.content === '!abbr') {
  msg.author.send('**Abbreviations List**\n\n**General**\nAoE = Area of Effect\nCA = Counterattack\nTM = Turn Meter\nSpd = Speed\nA1/A2/A3/A4 = Ability 1, Ability 2 (etc)\nWM = War Master (Tier 6 Offense Mastery)\nGS = Giant Slayer (Tier 6 Offense Mastery)\n\n**Dungeons**\nAK = Arcane Keep\nCB = Clan Boss\nDL = Dragons Lair\nFK = Fire Knight\nFoK = Force Keep\nIG = Ice Golem\nMino = Minotaurs Labyrinth\nMK = Magic Keep\nSD = Spider Den\nSK = Spirit Keep\nVK = Void Keep\n\n1-20 = Difficulty level of dungeon, usually follows the dungeon abbreviation. Examples: FK12, Mino14, SD20.');
}

//Champion - Skullcrusher

if (msg.content.toLowerCase() === '!help skullcrusher') {
  msg.author.send('**Discord Link:**\n<#576772770780807213>\n\n**Tier Rating:**\nS Tier\n\n**Uses:**\nArena\nCB\nFK\nSD\nSK\n\n**Mastery Trees:**\nOffense & Support\n\n**Key Masteries:**\nBring it Down (T4 Offense)\nWarmaster (T6 Offense)\nRapid Response (T3 Support)\nCycle of Magic (T4 Support)\nSpirit Haste (T5 Support)\n\n**Artifact Suggestion:**\nReflex(4) & Spd(2)\nSpd(6)\nAim is for A2 to be hitting first & often\n\n**Key Stats:**\nSpd, Def%, HP%.\nKeep a balance of HP and Def to prevent dying too easily to GS or Def Decrease\n\n**Team With**\n**Champions**\nChampion: <#576742926219083798>\nReason: Block damage in arena = CA with no damage taken\n\nChampion: <#576802430432575488>\nReason: Great CA synergy with multi-hit A1/GS in CB and FK and A1 Heal Reduction in SK and FK\n\n**General**\nA1 Healers (Examples: <#576789501347627057>, <#576729638697435136>)\nReason: Additional heals from CA\n\nA1 Multi-Hitters with GS (Examples: <#576802430432575488>, <#576742513625399338>)\nReason: Additional A1 hits from CA is a huge damage increase, especially useful on FK to break shield\n\nA1 Poison or A1 HP Burn (Examples: <#576795473826938908>, <#576743393812807693>)\nReason: Additional Poison and HP Burn procs from CA especially useful on CB\n\nA1 AoE Attackers (Examples: <#576786246685163550>, <#576800243774128157>)\nReason: Additional AoE hits from CA, especially useful in SD\n\n**Other Points**\n- Heal Reduction A1 great for SK and FK when shield is down.\n- A2 skill reduces damage to team and makes Skullcrusher unkillable - great for large AoE attacks\n- Self-Cleansing A3 skill works before turn, so if for example Skullcrusher is stunned on CB he will remove the stun at the start of his turn and still be able to take his turn.\n\nType **!abbr** for a list of abbreviations and their defintions.');
}





// Tallia



//close client on msg

});

//login token

client.login('NTgxOTczMTEwNDUwODE1MDMy.XQqg8w.yKOlqniE3Vjv1BC95sb1_7ykS9I');
