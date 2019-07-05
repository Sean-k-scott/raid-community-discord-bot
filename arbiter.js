const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

// on message - do these

client.on('message', msg => {

// Abbreviations

if (msg.content.toLowerCase() === '!abbr') {
  msg.author.send('**Abbreviations List**\n\n**General**\nA1/A2/A3/A4 = Ability 1, Ability 2 (etc)\nAoE = Area of Effect\nCA = Counterattack\nCC = Crowd Control, generally used to describe abilities that prevent use of a character for 1 or more turns (Freeze, Stun, etc.)\nCD - Crit Rate\nCR - Crit Rate\nDoT = Damage over Time (Poison, HP Burn, etc.)\nLS = Lifesteal\nGS = Giant Slayer (Tier 6 Offense Mastery)\nTM = Turn Meter\nSpd = Speed\nWM = War Master (Tier 6 Offense Mastery)\n\n**Dungeons**\nAK = Arcane Keep\nCB = Clan Boss\nDL = Dragons Lair\nFK = Fire Knight\nFoK = Force Keep\nIG = Ice Golem\nMino = Minotaurs Labyrinth\nMK = Magic Keep\nSD = Spider Den\nSK = Spirit Keep\nVK = Void Keep\n\n1-20 = Difficulty level of dungeon, usually follows the dungeon abbreviation. Examples: FK12, Mino14, SD20.');
}

// Commands

if (msg.content.toLowerCase() === '!commands') {
  msg.author.send('**List of Arbiter Commands:**\n\n!Abbr - Provides a list of Abbreviations regularly used in our guides and when discussing Raid in general.\n\n!Commands - List of all Arbiter Commands - You are Here!\n\n!Guides - Provides a list of Champions that have completed (or partially complete) guides that you can access.\n\n!help ChampionName - Use to access the guide for a specific champion.\n\n**COMING SOON**\n\n!FAQ - A List of Frequently Asked Questions about Raid, Very Beginner Friendly/Helpful. (**NOT YET IMPLEMENTED**)\n\n!Tips - A List of Tips for players of all skill levels for many different aspects of RAID (**NOT YET IMPLEMENTED - See <#567631672871354373> for now**)\n\n!Summon <Ancient/Void/Sacred> - A Shard simulator that will return a random champion of a random rarity with the same chances as in the game (**NOT YET IMPLEMENTED**)\n\nIf there is a feature you would like to see here, or if you need any further assistance, feel free to DM a Mod!');
}

// Champions - Current Guide List

if (msg.content.toLowerCase() === '!guides') {
  msg.author.send('**Guides are complete for the following champions:**\n\nColdheart\nFoli\nJotun\nPain Keeper\nRae\nSinesha\nSkullcrusher\nTallia\nTayrel\n\nOther Guide Creation are in progress. To request a specific guide not on the list please DM a mod with your request.\n\nUse **!help ChampionName** - Example: **!help Skullcrusher** - to access a specific guide.');
}

//Champion - Coldheart

if (msg.content.toLowerCase() === '!help coldheart') {
  msg.author.send('**Champion:**\nColdheart\n\n**Tier Rating:**\nA Tier\n\n**Uses:**\nCB\nFK\nSD\nSK\n\n**Mastery Trees:**\nOffense & Support\n\n**Key Masteries:**\nBring It Down (T4 Offense)\nMethodical (T5 Offense)\nGiant Slayer (T6 Offense)\n\n**Artifact Suggestion:**\nRetaliation(4) & Misc(2) - CB and FK for more GS procs from A1\nSpd(6) - CB and FK more turns and hits for A3 cooldown\nOffense(6) - General (Stack CR/CD)\nReflex(4) & Misc(2) - CB same as Spd more cooldown for A3\nRelentless(4) - CB same as Reflex and Spd\n Lifesteal(4) & Misc(2) - If you are having survivability issues\n\n**Key Stats:**\nSpd, Atk%, CR, CD.\n\n**Team With:**\n\n**Champions**\nChampion: Skullcrusher\nReason: AoE CA = More A1 multi-hits and procs of GS, also procs her heal reduction more often so she can use A2 for posion. Other AoE CA champs: Martyr, Valkyrie\n\n**Other Points**\n- General tip: Prioritise Blue Skill Tomes on Void champs as they are harder to pull/get duplicates of, Coldheart is a great candidate for your tomes.\n- Grind GS/Mino on her ASAP, GS greatly increases her damage output.\n- Save A3 for when FK shield is lowered for huge damage and turn meter reduction.\n- Use A1 on FK when shield is down to remove healing from his ability.\n- Key champion for SK to block the healing.\n- Although last skill adds 30% CR, you still want 100% CR on her for her A1/GS damage.');
}

//Champion - Foli

if (msg.content.toLowerCase() === '!help foli') {
  msg.author.send('**Champion:**\nFoli\n\n**Tier Rating:**\nSS Tier\n\n**Uses:**\nArena\nCampaign\nCB(with GS)\nFK\nIG\nSD\n\n**Mastery Trees:**\nOffense & Support\n\n**Key Masteries:**\nShield Breaker (T2 Offense)\nGiant Slayer (T6 Offense)\nPinpoint Accuracy (T1 Support)\nCharged Focus (T2 Support)\nArcane Celerity (T3 Support)\nSwarm Smiter (T3 Support)\nMaster Hexer (T5 Support)\n\n**Artifact Suggestion:**\nRetaliation(4) & Misc(2) - More GS A1 Multi-Hits  in CB and FK\nReflex(4) & Spd(2) - As Above\nSpd(6) - As Above (Best for Arena)\nLifesteal(4) & Misc(2) - Synergises with Leech, makes him very hard to kill\n\n**Key Stats:**\nSpd, Acc, CR, CD, Atk%\n\n**Team With:**\n\n**Champions**\nChampion: Skullcrusher, Martyr, Valykrie\nReason: AoE CA = More Multi-Hits from A1 = More GS procs\n\nChampion: Alure\nReason: To compliment her Decrease Def A2 sleep debuff\n\n**Other Points**\n- Two Multi-Hit A4 skills make him deadly with GS, farm GS ASAP on him.\n- Cannot be CCed, making him a monster in arena.\n- A2 applies Leech debuff, which means all allies that attack that target are healed.');
}

//Champion - Jotun

if (msg.content.toLowerCase() === '!help jotun') {
  msg.author.send('**Champion:**\nJotun\n\n**Tier Rating:**\nB Tier\n\n**Uses:**\nCB\nDL\nIG\n\n**Mastery Trees:**\nOffense & Support\n\n**Key Masteries:**\nBring It Down (T4 Offense)\nWarmaster (T6 Offense)\nPinpoint Accuracy (T1 Support)\nCharged Focus (T2 Support)\nArcane Celerity (T3 Support)\nMaster Hexer (T5 Support)\n\n**Artifact Suggestion:**\nRetaliation(4) & Misc(2) - To apply Decrease Def debuff more often\nSpd(2/4) & Acc(2/4) - More reliable and regular debuff applications\n\n**Key Stats:**\nSpd, Atk%, CR, CD, Acc\n\n**Team With:**\n\n**Champions**\nChampion: Alure, Tayrel\nReason: These champions have abilities that rely on Defense Debuffs which Jotun provides\n\nChampion: Apothecary, High Khatun\nReason: AoE Spd increase champs allow Jotun to apply his defense decrease debuff more often\n\n**Other Points**\n- A2 is the main skill for CB 100% HP Burn chance for 4 turns when skilled up.\n- HP Burn does not stack but can be reapplied to extend duration if you have multiple sources of HP Burn\n- Use HP Burn on highest HP enemy (usually the boss) as the AoE damage is based on debuffed enemy HP\n- A3 is good to interrupt breath ability in DL due to its enormous damage.');
}

//Champion - Pain Keeper

if (msg.content.toLowerCase() === '!help pain keeper') {
  msg.author.send('**Champion:**\nPain Keeper\n\n**Tier Rating:**\nS Tier\n\n**Uses:**\nAll Areas\n\n**Mastery Trees:**\nOffense & Support\n\n**Key Masteries:**\nLay on Hands (T2 Support)\nHealing Savior (T3 Support)\nMerciful Aid (T4 Support)\nCycle of Magic (T4 Support)\nSpirit Haste (T5 Support)\nBring It Down (T4 Offense)\nWarmaster (T6 Offense)\n\n**Artifact Suggestion:**\nSpd(6) - Maximise Use of A3\nReflex(4) & Spd(2) - As Above\nFrenzy(4) & Spd(2) - As Above\n\n**Key Stats:**\nSpd, HP%, Def%\n\n**Team With:**\n\n**General**\nChampions with strong abilities with long cooldowns\nReason: A3 reduces the duration of all ally skills by 1 turn, making champions with good abilities on long CDs more effective\n\n**Other Points**\n- Ascend quickly to gain AoE Heal upgrade.\n- Time A3 wisely for when the most active skils are on cooldown.\n- Her nerf was pretty heavy so she is not as effective as she was, if you still want to run her we suggest running her with another buffer/healer post nerf.');
}

//Champion - Rae

if (msg.content.toLowerCase() === '!help rae') {
  msg.author.send('**Champion:**\nRae\n\n**Tier Rating:**\nSS Tier\n\n**Uses:**\nArena\nCampaign Farmer\nSD\n\n**Mastery Trees:**\nOffense & Support\n\n**Key Masteries:**\nShield Breaker (T2 Offense)\nCycle of Violence (T4 Offense)\nBring It Down (T4 Offense)\nMethodical (T5 Offense)\nWarmaster (T6 Offense)\nArcane Celerity (T3 Support)\nMaster Hexer (T5 Support)\n\n**Artifact Suggestion:**\nLifesteal(4) & Misc(2) - AoE Damage = tons of healing, she can live without LS as a farmer however\nRetaliation(4) & Misc(2) - AoE A1 great for clearing waves/ in SD\nRelentless(4) & Misc(2) - Additional AoE Attacks\nSpd(6) - A3 hitting first to CC enemies (especially effective in arena)\n\n**Key Stats:**\nSpd, CR, CD, Atk%, Acc\n\n**Team With:**\n\n**General**\nDebuffing Champions\nReason: A2 does 50% additional damage to targets with debuffs, save A2 for as many debuffed targets as possible.\n\n**Other Points**\n- Her A3 is a great counter in arena to huge buff reliant champions like Bad-El-Kazar, Roshcard The Tower or Skullcrusher.');
}

//Champion - Sinesha

if (msg.content.toLowerCase() === '!help sinesha') {
  msg.author.send('**Champion:**\nSinesha\n\n**Tier Rating:**\nS Tier\n\n**Uses:**\nArena\nCampaign\nSD\nMost Dungeons\n\n**Mastery Trees:**\nOffense & Support\n\n**Key Masteries:**\nLay on Hands (T2 Support)\nHealing Savior (T3 Support)\nMerciful Aid (T4 Support)\nCycle of Magic (T4 Support)\nShield Breaker (T2 Offense)\nFlawless Execution(T6 Offense)\n\n**Artifact Suggestion:**\nSpd(6) - Arena\nRetaliation(4) & Misc(2) - For AoE in SD\n\n**Key Stats:**\nSpd, Atk%, CR, CD, HP%, Acc\n\n**Team With:**\n\n**Champions**\nChampion: Skullcrusher, Martyr, Valkyrie\nReason: AoE CA allows for more AoE A1s, especially great in SD\n\nChampion: Skullcrown\nReason: Partner passive skill\n\n**General**\nHigh HP Champs\nReason: To compliment A3 Heal\n\n**Other Points**\n- First part of A3 heal not affected by heal reduction debuffs as its not officially a heal\n- A1 can do insane damage in arena when CA buff is active.\n- Use A3 wisely by holding off as long as possible to maximise heal, try and keep highest HP champ topped off in preparation for A3 use.');
}

//Champion - Skullcrusher

if (msg.content.toLowerCase() === '!help skullcrusher') {
  msg.author.send('**Champion:**\nSkullcrusher\n\n**Tier Rating:**\nS Tier\n\n**Uses:**\nArena\nCB\nFK\nSD\nSK\n\n**Mastery Trees:**\nOffense & Support\n\n**Key Masteries:**\nBring it Down (T4 Offense)\nWarmaster (T6 Offense)\nRapid Response (T3 Support)\nCycle of Magic (T4 Support)\nSpirit Haste (T5 Support)\n\n**Artifact Suggestion:**\nReflex(4) & Spd(2)\nSpd(6)\nAim is for A2 to be hitting first & often\n\n**Key Stats:**\nSpd, Def%, HP%.\nKeep a balance of HP and Def to prevent dying too easily to GS or Def Decrease\n\n**Team With:**\n\n**Champions**\nChampion: Roshcard The Tower\nReason: Block damage in arena = CA with no damage taken\n\nChampion: Coldheart\nReason: Great CA synergy with multi-hit A1/GS in CB and FK and A1 Heal Reduction in SK and FK\n\n**General**\nA1 Healers (Examples: Reinbeast, Lugan The Steadfast)\nReason: Additional heals from CA\n\nA1 Multi-Hitters with GS (Examples: Coldheart, Apothecary)\nReason: Additional A1 hits from CA is a huge damage increase, especially useful on FK to break shield\n\nA1 Poison or A1 HP Burn (Examples: Drexthar Bloodtwin, Venus)\nReason: Additional Poison and HP Burn procs from CA especially useful on CB\n\nA1 AoE Attackers (Examples: Bellower, Rae)\nReason: Additional AoE hits from CA, especially useful in SD\n\n**Other Points**\n- Heal Reduction A1 great for SK and FK when shield is down.\n- A2 skill reduces damage to team and makes Skullcrusher unkillable - great for large AoE attacks\n- Self-Cleansing A3 skill works before turn, so if for example Skullcrusher is stunned on CB he will remove the stun at the start of his turn and still be able to take his turn.');
}

//Champion - Tallia

if (msg.content.toLowerCase() === '!help tallia') {
  msg.author.send('**Champion:**\nTallia\n\n**Tier Rating:**\nS Tier\n\n**Uses:**\nArena\nCampaign Farming\nCB\nFK\n\n**Mastery Trees:**\nOffense & Support\n\n**Key Masteries:**\nTBA\n\n**Artifact Suggestion:**\nLifesteal(4) & Misc(2) - Campaign Farming\nReflex(4) & Misc(2) - CB & Longer Fights\nCR and CD - General\nOffense(6) - General (Increased Bomb Damage with Fenax on team)\nToxic(4) & Misc(2) - More Poison in CB with CA active\n\n**Key Stats:**\nAtk%, CR, CD, Spd, Acc.\nOnly 70% CR needed with buff active.\n\n**Team With:**\n\n**Champions**\nChampion: Fenax\nReason: For partner skill, insane damage especially in arena due to bombs ignoring 100% of defense.\n\nChampion: Gorgorab & Other ATK increase Buffers\nReason: Increase damage of bombs. Other ATK Increase Buffers can include Warpriest, Seeker etc.\n\n**Other Points**\n- Self CA enables additional damage to CB, especially with GS Mastery.\n- Self CA enables additional hits to FK Shield\n- Weaken will increase damage of entire team by 25% whilst debuff is active on enemies/bosses.');
}

//Champion - Tayrel

if (msg.content.toLowerCase() === '!help tayrel') {
  msg.author.send('**Champion:**\nTayrel\n\n**Tier Rating:**\nSS Tier\n\n**Uses:**\nArena\nCampaign (not farming)\nCB\n\n**Mastery Trees:**\nOffense & Support\n\n**Key Masteries:**\nShield Breaker (T2 Offense)\nCycle of Violence (T4 Offense)\nBring It Down (T4 Offense)\nMethodical (T5 Offense)\nWarmaster (T6 Offense)\nArcane Celerity (T3 Support)\nMaster Hexer (T5 Support)\n\n**Artifact Suggestion:**\nLifesteal(4) & Misc(2) - Great in CB, Dungeons & Campaign\nReflex(4) & Misc(2) - More A2 and A3 hits\nRelentless(4) & Misc(2) - Same as Reflex\n\n**Key Stats:**\nDef%, HP%, Spd, CR, CD, Acc\n\n**Team With:**\n\n**Champions**\nChampion: Warden & other AoE Def Debuffers\nReason: Will help maximize the sleep on his A2\n\nChampion: Steelskull, Thenasil & Other AoE Def Buffers\nReason: Massively increases damage done by Tayrel, ensure they have enough speed to take their turn before Tayrel especially important in arena\n\nChampion: Martyr\nReason: Martyr increases Def with Aura and A2, brings AoE Def Debuff and AoE CA means Tayrel procs A1 Atk Debuff more often\n\nChampion: Diabolist, Alure, Big-Un & Other Turn Meter Reduction Champions\nReason: Improves chances for Tayrel to stun with his A3\n\n**Other Points**\n- Reliable farmer but not the quickest.\n- Always use A2 first to drop enemy defense for bigger hits on A3/A1.\n- His Def Aura is a very strong aura for the team and has good self synergy.');
}

//close client on msg

});

//login token

client.login('NTgxOTczMTEwNDUwODE1MDMy.XQqg8w.yKOlqniE3Vjv1BC95sb1_7ykS9I');
