const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://pros-betaa.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(process.env.BOT_TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/////[ STATUS ]////
client.on('ready', () => {
 client.user.setStatus("online")
});
client.on('ready', () => {
     client.user.setActivity("ProsBot | Beta",{type: 'playing'});
 
});
////
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content == prefix + "ping") {
 message.channel.send('› pong | :ping_pong: ').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\n› Time taken: ${PinG} ms.\n› Discord API: ${ApL} ms.\`\`\``);
 })
  }  
 });
/////////////
////[ H E L P ]////
client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
message.channel.send('**<:prosbot:674329114454523904> | ProsBot Orders\n----------------------------\n<a:s5:652413225467510804> | ``%Profiles`` ➺ أوامـر الـبـروفـايـل\n<a:0009:600967611353923606> | ``%Public`` ➺ أوامـر الـعـامـة\n<a:s04:652415938771025934> | ``%Admin`` ➺ أوامـر الأدمـن\n<a:0008:600979328142016513> | ``%Giveaway`` ➺ أوامـر الجـيـفـاواي\n<a:s02:652414237066395668> | ``%Protection`` ➺ أوامـر الـحـمـايـة\n<a:8888:600958768368582666> | ``%Music`` ➺ أوامـر الـمـوسـيـقي\n<a:7777:600958768750133268> | ``%Tickets`` ➺ أوامـر الـتـيـكـيـت\n<a:sub:602496283844018206> | ``%Submit`` ➺ أوامـر الـتـقـديـم\n<a:sp:603060481611137044> | ``%Games`` ➺ أوامـر الألـعـاب\n<a:s3:652413238167994368> | ``%About`` ➺ أوامـر مـعـلـومـات الـبـوت\n-----------------------------**')
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Profiles') {
      message.author.send('**<:prosbot:674329114454523904> | Profile Menu\n----------------------------\n<a:s4:652413226314629120> | ``%profile`` ⇏ لـعـرض الـبـروفـايـل الـخـاص بـك\n\n<a:s4:652413226314629120> | ``%note`` ⇏ لـوضـع سـيـرة ذاتـيـة لـبـروفـايـلـك\n\n<a:s4:652413226314629120> | ``%rep`` ⇏ لأعطـاء ريـب لـشـخـص\n\n<a:s4:652413226314629120> | ``%xp`` ⇏ لـرؤيـة اللـيـفـل حـقـك\n\n<a:s4:652413226314629120> | ``%credits`` ⇏ لـرؤيـة الـكـريدت الـخـاص بـك\n\n<a:s4:652413226314629120> | ``%daily`` ⇏ لاخـذ حـصـتـك الـيـومـيـة مـن الـكـريدت\n\n<a:s4:652413226314629120> | ``%trans @mention amount`` ⇏ لـتـحويـل كـريدت لشـخـص اخر  \n\n<a:s4:652413226314629120> | ``%store``  ⇏ متجر الخلفيات \n\n<a:s4:652413226314629120> | ``%buy + رقم الخلفية `` ⇏ To buy a background for the profile / لشرء خلفية للبروفايل  \n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });

client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Profiles') {
message.channel.send("<a:0003:600973089098170368> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Public') {
      message.author.send('**<:prosbot:674329114454523904> | Public Menu\n----------------------------\n<a:s1:652413248003637258> | ``%avatar`` ⇏ لـعـرض صـورتـك\n\n<a:s1:652413248003637258> | ``%image`` ⇏ لـعـرض صـورة الـسـيرفـر\n\n<a:s1:652413248003637258> | ``%user`` ⇏ لـرؤيـة مـعـلـومـاتـك \n\n<a:s1:652413248003637258> | ``%server`` ⇏ لـرؤيـة مـعـلـومـات عـن الـسـيـرفـر\n\n<a:s1:652413248003637258> | ``%allbots`` ⇏ لـمـعـرفـة كـم بـوت بالـسـيـرفـر\n\n<a:s1:652413248003637258> | ``%colors`` ⇏ لـعـرض قـائـمـة الألـوان\n\n<a:s1:652413248003637258> | ``%color`` ⇏ لاخـتـيـار لـون فـي الـسـيـرفـر\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Public') {
message.channel.send("<a:0003:600973089098170368> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Admin') {
      message.author.send('**<:prosbot:674329114454523904> | Admin Menu\n----------------------------\n<a:s2:652413247248662538> | ``%uptime`` ⇏ لـمـعـرفـة كـم صـار الـبـوت شـغـال\n\n<a:s2:652413247248662538> | ``%mute`` ⇏ لأعطـاء مـيـوت كـتـابـي\n\n<a:s2:652413247248662538> | ``%unmute`` ⇏ لـفـك الـمـيـوت الـكـتـابـي\n\n<a:s2:652413247248662538> | ``%kick`` ⇏ لأعـطـاء طـرد لـشـخـص\n\n<a:s2:652413247248662538> | ``%ban`` ⇏ لـتـبـنـيد عـضـو\n\n<a:s2:652413247248662538> | ``%unban`` ⇏ لـفـك الـبـانـد عـن عـضـو\n\n<a:s2:652413247248662538> | ``%setnick`` ⇏ لـتـغـيـر اسـم عـضـو\n\n<a:s2:652413247248662538> | ``%moveall`` ⇏ لـسـحـب جـمـيـع الأعـضـاء للـروم الـصـوتـي\n\n<a:s2:652413247248662538> | ``%mc`` ⇏ لـقـفـل الـشـات\n\n<a:s2:652413247248662538> | ``%uc`` ⇏ لـفـتـح الـشـات\n\n<a:s2:652413247248662538> | ``%ct`` ⇏ لأنـشـاء روم كـتـابـي\n\n<a:s2:652413247248662538> | ``%cv`` ⇏ لأنـشـاء روم صـوتـي\n\n<a:s2:652413247248662538> | ``%clear`` ⇏ لـمـسـح عـدد مـعـيـن مـن الـرسـائـل\n---------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Admin') {
message.channel.send("<a:0003:600973089098170368> **-** **Done! Check Your DM**")
  }
   });


client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Giveaway') {
      message.author.send('**<:prosbot:674329114454523904> | Giveaway Menu\n----------------------------\n<a:0008:600979328142016513> | ``%start`` ⇏ لـبـدا قـيـفـاواي\n<a:0008:600979328142016513> | ``%reroll`` ⇏ لاعـادة اخـتـيـار فـائـز اخـر\n<a:0008:600979328142016513> | ``%gend`` ⇏ لأنـهـاء الـقـيفـاواي\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Giveaway') {
message.channel.send("<a:0003:600973089098170368> **-** **Done! Check Your DM**")
  }
   });


client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Protectionثثث') {
      message.author.send('**<:prosbot:674329114454523904> | Protection Menu\n----------------------------\n<a:s04:652480930119680001> | ``%antibots on`` ⇏ لـتـفـعـيـل مـانـع دخـول الـبـوتـات\n\n<a:s04:652480930119680001> | ``%antibots off`` ⇏ لاغـلاق مـانـع دخـول الـبـوتـات\n\n<a:s04:652480930119680001> | ``%settings limitsban`` ⇏ لـتـحـديـد عـدد أقـصـي للـبـانـد\n\n<a:s04:652480930119680001> | ``%settings limitskick`` ⇏ لـتـحـديـد عـدد أقـصـي للـطـرد\n\n<a:s04:652480930119680001> | ``%settings limitsroleC`` ⇏ لـتـحـديـد عـدد أقـصـي لأنـشـاء رول\n\n<a:s04:652480930119680001> | ``%settings limitsroleD`` ⇏ لـتـحـديـد عـدد أقـصـي لـمـسـح رول\n\n<a:s04:652480930119680001> | ``%settings limitschannelD`` ⇏ لـتـحـديـد عـدد أقـصـي لـمـسـح روم\n---------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Protectionثثثث') {
message.channel.send("<a:0003:600973089098170368> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Protection') {
message.channel.send('<a:s04:652480930119680001> **-** **"You must buy ProsBot Premium"**')
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Music') {
      message.author.send('**<:prosbot:674329114454523904> | Music Menu\n----------------------------\n<a:0001:600958726068895755> | ``%play`` ⇏ لـتـشـغـيـل أغـنـيـة بـرابـط أو بـدون\n\n<a:0001:600958726068895755> | ``%stop`` ⇏ لأيـقـاف الأغـنـيـة الـحـالـيـة\n\n<a:0001:600958726068895755> | ``%skip`` ⇏ لـتـخـطـي الأغـنـيـة الـحـالـيـة\n\n<a:0001:600958726068895755> | ``%np`` ⇏ لـمـعـرفـة الأغـنـيـة الـحـالـيـة\n\n<a:0001:600958726068895755> | ``%vol 1/100`` ⇏ لـتـقـلـيـل وزيـادة الـصـوت\n\n<a:0001:600958726068895755> | ``%loop`` ⇏ لـتـكـرار الأغـنـيـة الـحـالـيـة\n\n<a:0001:600958726068895755> | ``%queue`` ⇏ لـتـشـغـيـل الأغـنـيـة الـتـالـيـة فـي الـقـائـمـة\n\n<a:0001:600958726068895755> | ``%pause`` ⇏ لايـقـاف الأغـنـيـة الـحـالـيـة مـؤقـتـاُ\n\n<a:0001:600958726068895755> | ``%resume`` ⇏ لـمـتـابـعـة تـشـغـيـل الأغـنـيـة\n\n<a:0001:600958726068895755> | ``%search`` ⇏ للـبـحـث عـن الأغـنـيـة\n\n<a:0001:600958726068895755> | ``%clr`` ⇏ لـمـسـح قـائـمـة الـتـشـغـيـل بالـكـامـل\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Music') {
message.channel.send("<a:0003:600973089098170368> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Tickets') {
      message.author.send('**<:prosbot:674329114454523904> | Ticket Menu\n----------------------------\n<a:ti:601322589524328458> | ``%new`` ⇏ لأنـشـاء تـذكـرة\n\n<a:ti:601322589524328458> | ``%close`` ⇏ لـقـفـل تـذـكـرة\n\n<a:ti:601322589524328458> | ``%add`` ⇏ لأضـافـة شـخـص للـتـذـكـرة\n\n<a:ti:601322589524328458> | ``%remove`` ⇏ لأزالـة شـخـص مـن الـتـذكـرة\n\n<a:ti:601322589524328458> | ``%close-all`` ⇏ لـقـفـل كـل الـتـذاكـر\n\n<a:ti:601322589524328458> | ``%mtickets`` ⇏ لـتـفـعـيـل واغـلاق خـاصـيـة فـتـح الـتـذاكـر\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Tickets') {
message.channel.send("<a:0003:600973089098170368> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Submit') {
      message.author.send('**<:prosbot:674329114454523904> | Submit Menu\n----------------------------\n<a:s05:652489502161502215> | ``%room1`` ⇏ لأنـشـاء روم الـتـقـديـمـات\n\n<a:s05:652489502161502215> | ``%room2`` ⇏ لأنـشـاء روم الـقـبـول والـرفـض\n\n<a:s05:652489502161502215> | ``%submit`` ⇏ للـتـقـديـم عـلـي رتـبـة\n\n<a:0003:600973089098170368> | ``%apply @user RoleName`` ⇏ لـقـبـول عـضـو\n\n<a:rj:601337828122558468> | ``%reject @user`` ⇏ لـرفـض عـضـو\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Submit') {
message.channel.send("<a:0003:600973089098170368> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Games') {
      message.author.send('**<:prosbot:674329114454523904> | Game Menu\n----------------------------\n<a:s06:652492076117917696> | ``%hl`` ⇏ لـعـبـة هـل تـعـلـم\n\n<a:s06:652492076117917696> | ``%mr`` ⇏ لـعـبـة مـريـم\n\n<a:s06:652492076117917696> | ``%e7`` ⇏ لـعـبـة احـزر الـفـريـق\n\n<a:s06:652492076117917696> | ``%lw`` ⇏ لـعـبـة لـو خـيـروك\n\n<a:s06:652492076117917696> | ``%3k`` ⇏ لـعـبـة عـقـاب\n\n<a:s06:652492076117917696> | ``%kt`` ⇏ لـعـبـة كـت تـويـت\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'Games') {
message.channel.send("<a:0003:600973089098170368> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'About') {
      message.author.send('**<:prosbot:674329114454523904> | About Menu\n----------------------------\n<a:s04:652415938771025934> | ``%bot`` ⇏ لـعـرض مـعـلـومـات عـن الـبـوت\n\n<a:s04:652415938771025934> | ``%inv`` ⇏ لـدعـوة الـبـوت لـسـيـرفـرك\n\n<a:s04:652415938771025934> | ``%support`` ⇏ لـعـرض سـيـرفـر الـدعـم الـفـنـي\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'About') {
message.channel.send("<a:0003:600973089098170368> **-** **Done! Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'support') {
      message.author.send('**<:prosbot:674329114454523904> | ProsBot Support\n<a:gh:633658827312594959> - https://discord.gg/udbNAWu**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'support') {
message.channel.send("<a:0003:600973089098170368> **-** **Check Your DM**")
  }
   });

client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'inv') {
      message.author.send('**<:prosbot:674329114454523904> | ProsBot Invite\n<a:gh:633658827312594959> - https://discordapp.com/oauth2/authorize?client_id=578338273198604298&permissions=8&scope=bot**').catch(e => console.log(e.stack));
 
    }
   }
  });
client.on('message', message => {
    if (message.author.bot) return;
if (!message.guild) return message.reply('') 
if (message.content === prefix+'inv') {
message.channel.send("<a:0003:600973089098170368> **-** **Check Your DM**")
  }
   });
////[ H E L P ]

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command == "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("**```ضع عدد الرسائل التي تريد مسحها ??```**").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

///------------------///

//////////////////////////////////Codes / الكودات///////////////////////////


//////code discrim | تغير التاق /////////
client.on('message',function(message) {
  if(!message.channel.guild) return;

    if (message.content === prefix + "diiiscrim") {
let messageArray = message.content.split(" ");
let args = messageArray.slice(1);

if (message.author.bot) return;

var discri = args[0]
let discrim
if(discri){
discrim = discri;
}else{
discrim = message.author.discriminator;
}
if(discrim.length == 1){
discrim = "000"+discrim
}
if(discrim.length == 2){
discrim = "00"+discrim
}
if(discrim.length == 3){
discrim = "0"+discrim
}

const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
return message.channel.send(`
**Found ${users.length} users with the discriminator #${discrim}**
${users.join('\n')}
`);
}
});

////////Code server////////

client.on('message', function(msg) {
    if(msg.content == prefix  + 'server') {
      let embed = new Discord.RichEmbed()
      .setColor('000000')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}**`)
      .addField('**⊃** **__Region__ :**',`» [** ${msg.guild.region} **]`,true)
      .addField('**⊃** **__Roles __:**',`» [** ${msg.guild.roles.size} **]`,true)
      .addField('**⊃** **__Members __:**',`» [** ${msg.guild.memberCount} **]`,true)
      .addField('**⊃** **__Online Members__ :**',`» [** ${msg.guild.members.filter(m => m.presence.status == 'online').size} **]`,true)
      .addField('**⊃** **__Text Channels __:**',`» [** ${msg.guild.channels.filter(m => m.type === 'text').size}** ]`,true)
      .addField('**⊃** **__Voice Channels__ :**',`» [** ${msg.guild.channels.filter(m => m.type === 'voice').size} **]`,true)
      .addField('**⊃** **__Owner __:**',`» **[ ${msg.guild.owner} ]**`,true)
      .addField('**⊃** **__ID Server__ :**',`» **[ ${msg.guild.id} ]**`,true)
      .addField('**⊃** **__Created IN __:**', msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
});

/////////Code bot ////////

 client.on('message', message => {
    if (message.content == prefix + "bot") {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('000000')
            .setTitle('**About Plume Bot**')
            .addField('**⊃** **__Ping__ :**' , [`» [ ${Date.now() - message.createdTimestamp} ]` + 'MS' ], true)
            .addField('**⊃** **__RAM Usage__ :**', `» [ ${(process.memoryUsage().rss / 1048576).toFixed()} ]MB`, true)
            .addField('**⊃** **__Servers__ :**', `» [ ${client.guilds.size} ]`, true)
            .addField('**⊃** **__Channels__ :**' , `»  [ ${client.channels.size} ] ` , true)
            .addField('**⊃** **__Users__ :**' ,`»  [ ${client.users.size} ]` , true)
            .addField('**⊃** **__Name__ :**' , `»  [ ${client.user.tag} ] ` , true)
            .addField('**⊃** **__ID __:**' , `»  ${client.user.id} ` , true)
			      .addField('**⊃** **__Prefix __:**' , `» [ % ]` , true)
			      .addField('**⊃** **__Language__ :**' , `»  [ Java Script ] ` , true)
            .addField('**⊃** |** __Owner Bot__** :' , `» <@533944821228896257>` , true) 
    })
    
}
});


///////////// Code  uprime  //////////////

client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `› [${days}] day  › [${hours}] hour  › [${minutes}] min › [${seconds}] sec` + "`");

}
});

///// Code allbots//////
client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content == prefix + 'allbots') {
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**<a:s1:652413248003637258> | Found ${message.guild.members.filter(m=>m.user.bot).size} bots inServer**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});


////////Code Image ///////
client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`<a:0003:600973089098170368> | Avatar Server: ${message.guild.name}`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

///////Code avtar//////
client.on('message', message => { 
    const mm = message.mentions.members.first() || message.member;
    if(message.content.startsWith(prefix + "avatar")){
        const embed = new Discord.RichEmbed()
        .setAuthor(mm.user.tag, mm.user.avatarURL)
        .setTitle("<a:0003:600973089098170368> | Avatar Link")
        .setURL(mm.user.avatarURL)
        .setImage(mm.user.avatarURL)
        .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed);
    }
});

/////// //////
client.on('message' , message => {
if(message.content.startsWith("%user")) {
    let user = message.mentions.users.first() || message.author;
    const joineddiscord = (user.createdAt.getDate() + 1) + '-' + (user.createdAt.getMonth() + 1) + '-' + user.createdAt.getFullYear() + ' | ' + user.createdAt.getHours() + ':' + user.createdAt.getMinutes() + ':' + user.createdAt.getSeconds();
    let game;
    if (user.presence.game === null) {
        game = '<a:rj:601337828122558468> No Playing.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'xdddddd';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = '<a:onl:653268886409576449>';
    } else if (user.presence.status === 'dnd') {
        status = '<a:dnd:653268886887858186>';
    } else if (user.presence.status === 'idle') {
        status = '<a:idle:653268886900441108>';
    } else if (user.presence.status === 'offline') {
        status = '<a:off:653268886208380938>';
    }
   
    const embed = new Discord.RichEmbed()
	.addField('**<a:s01:652414240476626985> | Username: **', `» ${user.username}#${user.discriminator}` ,true)
	.addField('**<a:s01:652414240476626985> | Playing: **', `» ${game}` ,true)
	.addField('**<a:s01:652414240476626985> | Status: **', `» ${status}` ,true)
	.addField('**<a:s01:652414240476626985> | JoinDiscord: **', `» ${joineddiscord}` ,true)
	.addField('**<a:s01:652414240476626985> | ID: **', `» ${user.id}` ,true)
	.addField('**<a:s01:652414240476626985> | Bot: **', `» ${user.bot}` ,true)
  .setFooter('Copy Right©️ Reserved For: ProsBot™')
	     .setThumbnail(user.displayAvatarURL)
	     .setAuthor(`UserInfo: ${user.username}`, user.displayAvatarURL)
	     .setColor('#7289d9');
  message.channel.send({embed})
}
 });

/////

// ------------ = [Colors] = ------------ //
 
client.on("message", message => {
      if (!message.guild || message.author.bot) return;
        if (message.content == "%colors" || message.content == "الوان") {
          var fsn = require('fs-nextra');
          fs.readdir('./colors', async (err, files) => {
              var f = files[Math.floor(Math.random() * files.length)];
              var {
                  Canvas
              } = require('canvas-constructor');
              var x = 0;
              var y = 0;
              if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0) return;
              message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(() => {
                  x += 100;
                  if (x > 100 * 12) {
                      x = 100;
                      y += 80;
                  }
              });
              var image = await fsn.readFile(`./colors/${f}`);
              var xd = new Canvas(100 * 11, y + 350)
                  .addBeveledImage(image, 0, 0, 100 * 11, y + 260, 25)
                  .setTextBaseline('middle')
                  .setColor('black')
                  .setTextSize(80)
                  .addText(`Color List`, 375, 75);
              x = 0;
              y = 150;
              message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(role => {
                  x += 75;
                  if (x > 100 * 10) {
                      x = 75;
                      y += 80;
                  }
                  xd
                      .setTextBaseline('middle')
                      .setTextAlign('center')
                      .setColor(role.hexColor)
                      .addBeveledRect(x, y, 60, 60, 15)
                      .setColor('white');
                  if (`${role.name}`.length > 2) {
                      xd.setTextSize(30);
                  } else if (`${role.name}`.length > 1) {
                      xd.setTextSize(40);
                  } else {
                      xd.setTextSize(50);
                  }
                  xd.addText(role.name, x + 30, y + 30);
              });
              message.channel.sendFile(xd.toBuffer());
          });
      }
  })
 
 // ------------ = [select   Colors] = ------------ //
 
client.on('message', message => {
  let args = message.content.split(' ').slice(1);
  if(message.content.split(' ')[0] == '%color' || message.content.split(' ')[0] == 'لون'){
  const embedd = new Discord.RichEmbed()
  .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  .setDescription(`<a:rj:601337828122558468> **-** **No Color With This Name/Number **`)
  .setColor(`ff0000`)
 
  if(!isNaN(args) && args.length > 0)
 
 
  if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
 
 
  var a = message.guild.roles.find("name",`${args}`)
   if(!a)return;
  const embed = new Discord.RichEmbed()
 
  .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  .setDescription(`<a:0003:600973089098170368> **-** **Done Give You This Color**`)
 
  .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
  if (!args)return;
  setInterval(function(){})
     let count = 0;
     let ecount = 0;
  for(let x = 1; x < 201; x++){
 
  message.member.removeRole(message.guild.roles.find("name",`${x}`))
 
  }
   message.member.addRole(message.guild.roles.find("name",`${args}`));
 
 
  }
  });
 
////

client.on("message", message => {
  var ms = require("ms");

  var moment = require("moment");

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  let messageArray = message.content.split(" ");

  let embed = new Discord.RichEmbed().setImage(
    "https://1.top4top.net/p_1410p11ou1.png"
  );

  if (command == "ban") {
    if (!message.channel.guild)
      return message.reply(
        "<a:rj:601337828122558468> **-** **This command only for servers**"
      );

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply(
        "<a:rj:601337828122558468> **-** **You Don't Have ` BAN_MEMBERS ` Permission**"
      );

    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply(
        "<a:rj:601337828122558468> **-** **I Don't Have ` BAN_MEMBERS ` Permission**"
      );

    let user = message.mentions.users.first();

    let Reason = message.content
      .split(" ")
      .slice(3)
      .join(" ");

    let time = messageArray[2];

    if (message.mentions.users.size < 1)
      return message.channel.sendEmbed(embed);

    if (!message.guild.member(user).bannable)
      return message.reply(
        "<a:rj:601337828122558468> **-** **I Don't Have Permission For Ban This User**"
      );

    if (!time.match(/[1-60][s,m,h,d,w]/g))
      return message.channel.send(
        "<a:rj:601337828122558468> This Time Is Incorrect"
      );

    if (!Reason) {
      message.guild.member(user).ban({ reason: Reason });
    }

    if (!Reason && time) {
      message.guild.member(user).ban(7, user);
    }

    if (!time) {
      message.guild.member(user).ban(7, user);
    }
    if (time) {
      setTimeout(() => {
        message.guild.unban(user);
      }, ms(time));
    }

    if (time && Reason && user) {
      message.guild.member(user).ban({ reason: Reason });

      setTimeout(() => {
        message.guild.unban(user);
      }, ms(time));
    }

    message.channel.send(
      `<a:0003:600973089098170368> **-** **${user.tag} banned from the server ! :airplane: **`
    );
  }
});

//////////


const dev = ["533944821228896257"]

client.on('message', message => {
    if (!dev.includes(message.author.id)) return;
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'Leave-Prime'){
    if(message.author.id === '533944821228896257'){
        if (!args) {
            message.channel.send("**Where is ID ? H A H A**");
            return;
        }

        let server = client.guilds.get(args)
        if (!server){
            let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .addField('ana me4 la2y el server dh ?',args)
            message.channel.sendEmbed(embed).then(msg => {msg.delete(10000)});;   
        }else{
        server.leave()    
                    let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .addField('Done Commander xd',args)
            message.channel.sendEmbed(embed).then(msg => {msg.delete(10000)});;   

        }
        
    }
    }
});





////////
client.on("message", async message => {
  var ms = require("ms");

  var moment = require("moment");

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  let messageArray = message.content.split(" ");

  let muteRole = message.guild.roles.find("name", "muted");

  let embed = new Discord.RichEmbed().setImage(
    "https://5.top4top.net/p_14102aq7q1.png"
  );

  if (command == "mute") {
    if (!muteRole)
      return message.guild.createRole({ name: "muted", permissions: [] });

    if (!message.channel.guild)
      return message.reply(
        "<a:rj:601337828122558468> **-** **This command only for servers**"
      );

    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "<a:rj:601337828122558468> **-** **You Don't Have ` MUTE_MEMBERS ` Permission**"
      );

    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "<a:rj:601337828122558468> **-** **I Don't Have ` MUTE_MEMBERS ` Permission**"
      );

    let user = message.mentions.users.first();

    let Reason = message.content
      .split(" ")
      .slice(4)
      .join(" ");

    let time = messageArray[2];

    if (message.mentions.users.size < 1)
      return message.channel.sendEmbed(embed);

    if (!message.guild.member(user).bannable)
      return message.channel.send(
        "<a:rj:601337828122558468> **-** **I Don't Have Permission For Mute This User**"
      );

    if (!Reason) {
      message.guild.member(user).addRole(muteRole);
    }

    if (!Reason && time) {
      message.guild.member(user).addRole(muteRole);
    }

    if (!time) {
      message.guild.member(user).addRole(muteRole);
    }
    if (time) {
      if (!time.match(/[1-60][s,m,h,d,w]/g))
        return message.channel.send(
          "<a:rj:601337828122558468>  This Time Is Incorrect"
        );

      setTimeout(() => {
        message.guild.member(user).removeRole(muteRole);
      }, ms(time));
    }

    if (time && Reason && user) {
      message.guild.member(user).addRole(muteRole);

      setTimeout(() => {
        message.guild.member(user).removeRole(muteRole);
      }, ms(time));
    }

    message.channel.send(
      `<a:0003:600973089098170368> **-**  ${user} **has been muted !** :zipper_mouth:`
    );
  }
});

////

client.on("message", message => {
  const prefix = "%";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (!message.channel.guild)
      return message.reply(
        "<a:rj:601337828122558468> **-** **This command only for servers**"
      );

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message
        .reply(
          "<a:rj:601337828122558468> **-** **You Don't Have KICK_MEMBERS Permission**"
        )
        .then(msg => msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply(
        "<a:rj:601337828122558468> **-** **I Don't Have KICK_Members Permission**"
      );
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");

    let embed = new Discord.RichEmbed().setImage(
      "https://6.top4top.net/p_14100i64i1.png"
    );
    if (message.mentions.users.size < 1)
      return message.channel.sendEmbed(embed);

    if (!reason) return message.reply("**Write Reason For Kick.**");
    if (!message.guild.member(user).bannable)
      return message.reply(
        "<a:rj:601337828122558468> **-** **I Don't Have Permission For Kick This User**"
      );

    message.guild.member(user).kick(7, user);

    message.channel.send(
      `<a:0003:600973089098170368> **-** **${user.tag} Kicked From Server**`
    );
  }
});

////

client.on("message", async message => {
  const ms = require("ms");
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.channel.guild)
    return message.channel
      .send("<a:rj:601337828122558468> **-** **This command only for servers**")
      .then(m => m.delete(5000));
  if (!message.member.hasPermission("MANAGE_ROLES")) return;
  if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "<a:rj:601337828122558468> **-** **You Don't Have ` MANAGE_ROLES ` Permission**"
    );
  if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
    return message.channel
      .send(
        "<a:rj:601337828122558468> **-** **I Don't Have ` MANAGE_ROLES ` Permission**"
      )
      .then(msg => msg.delete(6000));
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "-muteeetttee") {
    let tomute = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    let embed = new Discord.RichEmbed().setImage(
      "https://5.top4top.net/p_14102aq7q1.png"
    );
    if (!tomute) return message.channel.sendEmbed(embed);
    if (tomute.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "<a:rj:601337828122558468> **-** **Sorry I Don't Have ` MANAGE_MESSAGE ` Permission"
      );
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime)
      return message.channel.send(
        "<a:rj:601337828122558468>  This Time Is Incorrect"
      );

    await tomute.addRole(muterole.id);
    message.channel.send(
      "<a:0003:600973089098170368> **-** **has been muted !** :zipper_mouth:"
    );
    setTimeout(function() {
      tomute.removeRole(muterole.id);
      message.channel.send(
        `<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `
      );
    }, ms(mutetime));
  }
  if (command === `unmute`) {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel
        .sendMessage(
          "<a:rj:601337828122558468> **-** **You Don't Have Permission For Unmute This User."
        )
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
      return message
        .reply(
          "<a:rj:601337828122558468> **-** **I Don't Have `MANAGE_ROLES` Permission**"
        )
        .then(msg => msg.delete(6000));

    let toMute =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!toMute)
      return message.channel.sendMessage(
        "<a:rj:601337828122558468> **-** **I can't find this member**"
      );

    let role = message.guild.roles.find(r => r.name === "muted");

    if (!role || !toMute.roles.has(role.id))
      return message.channel.sendMessage(
        "<a:rj:601337828122558468> **-** **This user not muted**"
      );

    await toMute.removeRole(role);
    message.channel.sendMessage(
      "<a:0003:600973089098170368> **-** **Done unmuted.**"
    );

    return;
  }
});


client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "allllll") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(Saad => {
          message.guild.unban(Saad);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args) return message.channel.send("**Please Type the member ID**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
          `<a:0003:600973089098170368> **-** **Done Unbanned ${m.username}**`
        );
      })
      .catch(stry => {
        message.channel.send(
          `<a:rj:601337828122558468> **-** **I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

////

client.on("message", message => {
  if (message.content.startsWith(prefix + "setnick")) {
    if (
      message.author.bot ||
      message.channel.type == "dm" ||
      !message.member.hasPermission("MANAGE_NICKNAMES") ||
      !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")
    )
      return;
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(2);
    var nick = args.join(" ");
    if (!user || !args)
      return message.channel.send(
        `**<a:rj:601337828122558468> Write:** ${prefix}setnick \`\`@Name\`\` nickname`
      );
    if (
      message.guild.member(user.user).highestRole.position >=
      message.guild.member(client.user).highestRole.position
    )
      return message.channel.send(
        `<a:rj:601337828122558468> | I couldn't update that user. Please check my permissions and role position!`
      );
    message.guild
      .member(user.user)
      .setNickname(`${nick}`)
      .then(() => {
        message.channel.send(
          `<a:0003:600973089098170368> | Done changed **${user.user.username}** nickname to **${nick}**`
        );
      })
      .catch(console.error);
  }
});

////

client.on("message", message => {
  if (message.content.startsWith(prefix + "moveall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send(
        "<a:rj:601337828122558468> **-** **You Dont Have Permssion**"
      );
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply(
        "<a:rj:601337828122558468> **-** **Check My Permession**"
      );
    if (message.member.voiceChannel == null)
      return message.channel.send(
        `<a:rj:601337828122558468> **-** **Join Voice Room**`
      );
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel.send(
      `<a:0003:600973089098170368> **-** **Done Move All Members To Your Room**`
    );
  }
});

////

client.on("message", luxy => {
  if (luxy.content === prefix + "mc" || luxy.content === "قفل الشات") {
    if (!luxy.channel.guild)
      return luxy.reply("<a:rj:601337828122558468> | **This command only for servers**");

    if (!luxy.member.hasPermission("MANAGE_MESSAGES"))
      return luxy.reply("**__عــلــي كــيــف أمــك تــقــفــل الــشــات__**");
    luxy.channel
      .overwritePermissions(luxy.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        luxy.reply("**__تـــم قــفــل الــشــات__ :lock: **");
      });
  }
  if (luxy.content === prefix + "uc" || luxy.content === "فتح الشات") {
    if (!luxy.channel.guild)
      return luxy.reply("<a:rj:601337828122558468> | **This command only for servers**");

    if (!luxy.member.hasPermission("MANAGE_MESSAGES"))
      return luxy.reply("**__عــلــي كــيــف أمــك تــفــتــح الــشــات__**");
    luxy.channel
      .overwritePermissions(luxy.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        luxy.reply("**__تــم فــتــح الــشــات__ :unlock: **");
      });
  }
});

////

client.on("message", message => {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "ct") {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply(
        "<a:rj:601337828122558468> **-** **You Don't Have `MANAGE_CHANNELS` Premissions**"
      );
    let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(" "), "text");
    message.channel.sendMessage(
      "<a:0003:600973089098170368> **-** **تــم انـشـاء روم كـتــابــي**"
    );
  }
});
client.on("message", message => {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "cv") {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply(
        "<a:rj:601337828122558468> **-** **You Don't Have `MANAGE_CHANNELS` Premissions**"
      );
    let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(" "), "voice");
    message.channel.sendMessage(
      "<a:0003:600973089098170368> **-** **تــم انـشـاء روم صـوتــي"
    );
  }
});

////


var Enmap = require('enmap');
client.antibots = new Enmap({name: "antibot"});
var antibots = client.antibots;
var julian = client;
julian.on("message", codes => {
var prefix = "%";
if(codes.content == prefix + "antibots on") {
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: 'On'
});
 
 
codes.channel.send("**<a:0003:600973089098170368> | AntiBotsJoin: ON!**");
}
if(codes.content == prefix + "antibots off") {
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: "Off"
});
codes.channel.send("**<a:0003:600973089098170368> | AntiBotsJoin: OFF!**");
}
});
 
julian.on("guildMemberAdd", member => {
if(!antibots.get(`${member.guild.id}`)) { antibots.set(`${member.guild.id}`, {
onoff: "Off"
});
}
if(antibots.get(`${member.guild.id}`).onoff == "Off") return;
if(member.user.bot) return member.kick()
});


////

let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {
 
 
        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await channel.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }
 
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
 
})
///Uploaded By L U X Y

////

const category = "category-id";
let mtickets = true;
let tchannels = [];
let current = 0;


client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (args[0].toLowerCase() === `${prefix}heeeeelsasaollooop`) {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .setColor("#36393e")
      .addField(`⇏ -new                     → لفتح تكت`)
      .addField(`⇏ -close                   → لغلق تكت`)
      .addField(`⇏ -mtickets enable/disable → لتعطيل وتفعيل تكت `)
      .addField(`⇏ cleartickets             →  لمسح جميع تكتات`)
      .addField(``);
    await message.channel.send(
      `:white_check_mark: , **هذه قائمة بجميع اوامر البووت.**`
    );
    await message.channel.send(embed);
  } else if (args[0].toLowerCase() === `${prefix}new`) {
    if (mtickets === false)
      return message.channel.send(
        `<a:rj:601337828122558468> | **تـم ايـقـاف الـتـذاكـر بـواسـطة أحـد مـن الادارة**`
      );
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `<a:rj:601337828122558468> | **الـبـوت غـيـر قـادر عـلـي صـنـع روم تـحقق مـن الـرتـبـة**`
      );
    console.log(current);
    let openReason = "";
    current++;
    message.guild.createChannel(`ticket-${current}`, "text").then(c => {
      tchannels.push(c.id);
      c.setParent(category);
      message.channel.send(`**<a:0003:600973089098170368> | تـم فـتـح تـذكرتـك**`);
      c.overwritePermissions(message.guild.id, {
        READ_MESSAGES: false,
        SEND_MESSAGES: false
      });
      c.overwritePermissions(message.author.id, {
        READ_MESSAGES: true,
        SEND_MESSAGES: true
      });

      if (args[1])
        openReason = `\nReason: [ **__${args.slice(1).join(" ")}__** ]`;
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("#36393e")
        .setDescription(`**Wait Admin To Answer You**${openReason}`);
      c.send(`${message.author}`);
      c.send(embed);
    });
  } else if (args[0].toLowerCase() === `${prefix}mtickets`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        `<a:rj:601337828122558468> | **هـذا الأمـر للأدارة فـقـط**`
      );
    if (args[1] && args[1].toLowerCase() === "enable") {
      mtickets = true;
      message.channel.send(
        `<a:0003:600973089098170368> | **تـم تـفـعـيـل نـظـام الـتذاكـر**`
      );
    } else if (args[1] && args[1].toLowerCase() === "disable") {
      mtickets = false;
      message.channel.send(
        `<a:0003:600973089098170368> | **تـم اغـلاق نـظـام الـتذاكـر**`
      );
    } else if (!args[1]) {
      if (mtickets === true) {
        mtickets = false;
        message.channel.send(
          `<a:0003:600973089098170368> | **تـم اغـلاق نـظـام الـتذاكـر**`
        );
      } else if (mtickets === false) {
        mtickets = true;
        message.channel.send(
          `<a:0003:600973089098170368> | **تـم تـفـعـيـل نـظـام الـتذاكـر**`
        );
      }
    }
  } else if (args[0].toLowerCase() === `${prefix}close`) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        `<a:rj:601337828122558468> | **انـت لـسـت مـن ادارة الـسـيـرفـر لـتـنـفـيذ هذا الأمـر`
      );
    if (
      !message.channel.name.startsWith("ticket-") &&
      !tchannels.includes(message.channel.id)
    )
      return message.channel.send(`<a:rj:601337828122558468> | **هـذا لـيـس روم تـيـكـيـت**`);

    message.channel.send(
      `<a:0003:600973089098170368> | **جـاري قـفـل الـروم تـلـقـائـيـا بـعـد 5 ثـوانـي**`
    );
    tchannels.splice(tchannels.indexOf(message.channel.id), 1);
    setTimeout(() => message.channel.delete(), 5000); //لحد هنا
  } else if (message.content == prefix + `remove`) {
    if (!message.channel.name.startsWith("ticket-")) {
      return message.channel.send(`<a:rj:601337828122558468> | **This command only for the tickets**`);
    }
    let member = message.mentions.members.first();
    if (!member || member.id === client.user.id) {
      return message.channel.send(`<a:rj:601337828122558468> | **Please mention the user**`);
    }
    if (
      !message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    ) {
      return message.channel.send(
        `<a:rj:601337828122558468> | **${member.user.tag}** is not in this ticket to remove them`
      );
    }
    message.channel.overwritePermissions(member.id, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false,
      READ_MESSAGE_HISTORY: false
    });
    message.channel.send(
      `**Done <a:0003:600973089098170368>\nSuccessfully removed \`${member.user.tag}\` from the ticket**`
    );
  } else if (message.content == prefix + `add`) {
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `**Error** <a:rj:601337828122558468>\nI Don\'t have MANAGE_CHANNELS Permission to do this`
      );
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`<a:rj:601337828122558468> | **This command only for the tickets**`);
    let member = message.mentions.members.first();
    if (!member) return message.channel.send(`<a:rj:601337828122558468> | **Please mention the user**`);
    if (
      message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    )
      return message.channel.send(
        `this member already in this ticket :rolling_eyes:`
      );
    message.channel.overwritePermissions(member.id, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true,
      READ_MESSAGE_HISTORY: true
    });
    message.channel.send(
      `**Done <a:0003:600973089098170368>\nSuccessfully added <@${member.user.id}> to the ticket**`
    );
  } else if (args[0].toLowerCase() === `${prefix}reeeeeeeeeestart`) {
    if (!devs.includes(message.author.id))
      return message.channel.send(
        `:tools:, **أنت لست من ادارة السيرفر لأستخدام هذا الأمر.**`
      );
    message.channel.send(`:white_check_mark:, **جارى اعادة تشغيل البوت.**`);
    client.destroy();
  } else if (args[0].toLowerCase() === `${prefix}close-all`) {
    let iq = 0;
    for (let q = 0; q < tchannels.length; q++) {
      let c = message.guild.channels.get(tchannels[q]);
      if (c) {
        c.delete();
        tchannels.splice(tchannels[q], 1);
        iq++;
      }
      if (q === tchannels.length - 1 || q === tchannels.lengh + 1) {
        message.channel.send(
          `<a:0003:600973089098170368> | **Done Deleted\`${iq}\` From Tickets.**`
        );
      }
    }
  }
});

////

client.on("message", message => {
  if (message.content == prefix + "submit") {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    let channel = message.guild.channels.find("name", "تـقـديـم");
    if (!channel)
      return message.reply(
        "<a:rj:601337828122558468> | **Type [ -room 1 ] To Make Room Submit.**"
      );
    if (channel) {
      message.channel.send(message.member + ", **:timer:**").then(m => {
        m.edit(message.member + ", **اسـمــك  ✍**");
        m.channel
          .awaitMessages(m1 => m1.author == message.author, {
            maxMatches: 1,
            time: 60 * 1000
          })
          .then(m1 => {
            m1 = m1.first();
            var name = m1.content;
            m1.delete();
            m.edit(message.member + ", **:timer:**").then(m => {
              m.edit(message.member + ", **عــمــرك 🎓**");
              setTimeout(() => {
                m.delete();
              }, 10000);
              m.channel
                .awaitMessages(m2 => m2.author == message.author, {
                  maxMatches: 1,
                  time: 60 * 1000
                })
                .then(m2 => {
                  m2 = m2.first();
                  var age = m2.content;
                  m2.delete();
                  message.channel
                    .send(message.member + ", **:timer:**")
                    .then(m => {
                      m.edit(message.member + ", **تـسـاعـدنـا بأيــة 🎙**");
                      setTimeout(() => {
                        m.delete();
                      }, 10000);
                      m.channel
                        .awaitMessages(m1 => m1.author == message.author, {
                          maxMatches: 1,
                          time: 60 * 1000
                        })
                        .then(m3 => {
                          m3 = m3.first();
                          var ask = m3.content;
                          m3.delete();
                          message.channel
                            .send(message.member + ", **:timer:**")
                            .then(m => {
                              m.edit(
                                message.member + ", **هـتـحـتـرم الـقـوانـيـن 📑**"
                              );
                              setTimeout(() => {
                                m.delete();
                              }, 10000);
                              m.channel
                                .awaitMessages(
                                  m1 => m1.author == message.author,
                                  { maxMatches: 1, time: 60 * 1000 }
                                )
                                .then(m4 => {
                                  m4 = m4.first();
                                  var ask2 = m4.content;
                                  m4.delete();
                                  message.channel
                                    .send(message.member + ", **:timer:**")
                                    .then(m => {
                                      m.edit(
                                        message.member +
                                          ", **أقسـم انـي مـا أبـوظ سـمـعـة الـسـيـرفـر أبـدا 🤔**"
                                      );
                                      m.channel
                                        .awaitMessages(
                                          m1 => m1.author == message.author,
                                          { maxMatches: 1, time: 60 * 1000 }
                                        )
                                        .then(m5 => {
                                          m5 = m5.first();
                                          var ask3 = m5.content;
                                          m5.delete();
                                          m.edit(
                                            message.member +
                                              ", **... جـاري جـمـع الـبـيـانـات**"
                                          ).then(mtime => {
                                            setTimeout(() => {
                                              let embed = new Discord.RichEmbed()
                                                .setColor("RANDOM")
                                                .setTitle(
                                                  `**New Submit.** [__**${message.guild.name}**__]`
                                                )
                                                .addField(
                                                  "**`الاسم`**",
                                                  `${name}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`العمر`**",
                                                  `${age}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`الـمـسـاعـدة`**",
                                                  `${ask}`
                                                )
                                                .addField(
                                                  "**`احـتـرام الـقـوانـيـن`**",
                                                  `${ask2}`
                                                )
                                                .addField(
                                                  "**`الـقـسـم`**",
                                                  `${ask3}`
                                                )
                                                .setFooter(
                                                  message.author.username,
                                                  "https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif"
                                                );
                                              channel.send(embed);
                                            }, 2500);
                                            setTimeout(() => {
                                              mtime.delete();
                                            }, 3000);
                                          });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
          });
      });
    }
  }
});

client.on("message", message => {
  if (message.content == prefix + "room 1") {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("<a:rj:601337828122558468> | **You Don't Have Permission.**");
    message.guild.createChannel("تـقـديـم", "text").then(c => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send("<a:0003:600973089098170368> | **تـم انـشـاء روم تـقـديـم**");
  }
});
client.on("message", async message => {
  let mention = message.mentions.members.first();
  let role = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  let mySupport = message.guild.roles.find("name", role);
  if (message.content == prefix + "apply") {
    let acRoom = message.guild.channels.find("name", "قـبـول-رفـض");
    if (!acRoom)
      return message.reply(
        "<a:rj:601337828122558468> | **Type [ -room 2 ] To Make Room Reject or Apply.**"
      );
    if (acRoom) {
      if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return;
      if (!mention) return message.reply("<a:rj:601337828122558468> | مـنـشـن الـعـضـو");
      if (!role) return message.reply("<a:rj:601337828122558468> | أدخـل اسـم رتـبـة");
      if (!mySupport) return message.reply("<a:rj:601337828122558468> | لـم أجـد هذة الـرتـبـة");
      if (mention.roles.has(mySupport))
        return message.reply("<a:0003:600973089098170368> | **هـذا الـشـخـص يـمـلـك الـرتـبـة**");

      mention.addRole(mySupport).then(() => {
        acRoom.send(
          `**[ ${mySupport} ] واعطـاءك رتـبـة ${mention} تـم قـبـولـك  <a:0003:600973089098170368>**`
        );
      });
    }
  }
});

client.on("message", async message => {
  let mention = message.mentions.members.first();
  if (message.content == prefix + "reject") {
    if (!message.channel.guild) return;
    let acRoom = message.guild.channels.find("name", "قـبـول-رفـض");
    if (!acRoom) return message.reply("<a:rj:601337828122558468> | **Type [ -room 1 ] To Make Room Submit.**");
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!mention) return message.reply("<a:rj:601337828122558468> | مـنـشـن الـعـضـو");

    acRoom.send(`<a:0003:600973089098170368> | **${mention} تـم رفـضـك للأسـف**`);
  }
});
client.on("message", message => {
  if (message.content == prefix + "room2") {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("<a:rj:601337828122558468> | **You Don't Have Permission.**");
    message.guild.createChannel("قـبـول-رفـض", "text").then(c => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send("<a:0003:600973089098170368> | **تـم انـشـاء روم الـقـبـول-الـرفـض**");
  }
});


/////
///// [      1      ] ////
client.on('message', message => {
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'hl')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

//// [    2   ] ////
var spee={};
var fox="%";
let pointsfox= {}
const foxt = [
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055751447773195/bandicam_2019-07-16_14-38-25-841.jpg",
        "answers": ["البرازيل"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055755080302593/bandicam_2019-07-17_17-14-28-589.jpg",
        "answers": ["بلجيكا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055760180576276/bandicam_2019-07-17_17-15-04-686.jpg",
        "answers": ["فرنسا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055761467965452/bandicam_2019-07-17_17-15-42-926.jpg",
        "answers": ["كرواتيا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055764542390287/bandicam_2019-07-17_17-16-28-291.jpg",
        "answers": ["برتغال"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055766576889863/bandicam_2019-07-17_17-16-42-901.jpg",
        "answers": ["سنغال"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055769399525394/bandicam_2019-07-17_17-16-57-102.jpg",
        "answers": ["سعودية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055772377350165/bandicam_2019-07-17_17-17-17-663.jpg",
        "answers": ["المانيا"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055773421862913/bandicam_2019-07-17_17-17-37-828.jpg",
        "answers": ["المكسيك"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055773761732619/bandicam_2019-07-17_17-17-52-326.jpg",
        "answers": ["ارغواي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055830451683359/bandicam_2019-07-17_17-18-00-272.jpg",
        "answers": ["صربيا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055832704155658/bandicam_2019-07-17_17-18-20-074.jpg",
        "answers": ["مصر"]
       
    }
];
 
client.on('message', foxm => {
if (!pointsfox[foxm.author.id]) pointsfox[foxm.author.id] = { ///LuXy-SaAD
    points: 0,
  };
  if(!foxm.guild) return;
    let id = foxm.author.id
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) { ///LuXy-SaAD
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    foxm.channel.send(`**Sorry, Please Wait ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
    return;
    }
    if ( foxm.content == fox+'e7'){
       
        try{
}catch(e){ ///LuXy-SaAD
 
}
 
    if(!foxm.channel.guild) return;
 
 
const foxitem = foxt[Math.floor(Math.random() * foxt.length)];
const foxfilter = response => {  
    return foxitem.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
foxm.channel.send('<a:0003:600973089098170368> | **Game Starts**').then(msg => {
 
 const embeda7zr = new Discord.RichEmbed()
 .setColor("RANDOM")
     .setAuthor(`لـديـك 15 ثـانـيـة`)
          .setImage(`${foxitem.type}`)
 .setFooter(`${foxm.author.tag}`, foxm.author.avatarURL) ///By KillerFox and MEDSPORT
 
 
         
foxm.channel.send(embeda7zr).then(() => {
        foxm.channel.awaitMessages(foxfilter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const foxyembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription('<a:0003:600973089098170368> | **Good You Got Point!**') ///By KillerFox and MEDSPORT
   .setFooter(`${collected.first().author}`)
  foxm.channel.sendEmbed(foxyembed);
            let won = collected.first().author;
            pointsfox[won.id].points++; ///By KillerFox and MEDSPORT
          })
          .catch(collected => {
            foxm.channel.send(`<a:rj:601337828122558468> | **خـلـص الـوقـت**`);
          })
        })
    })
    spee[id] = (new Date).getTime()
   
   
    }
  });

//// [    3    ] ////
const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   '*** اهلا بك ! انا تائهه في هذا المكان  ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
	 '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
];
 client.on('message', message => {
 if (message.content.startsWith('%mr')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("<a:0003:600973089098170368> | **Game Starts**")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});

//// [    4    ] ////
var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس??رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**????تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];

client.on('message', message => {
 if (message.content.startsWith("%3k")) {
              if(!message.channel.guild) return;
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('<a:0003:600973089098170368> | **Game Starts**' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
  }
});

//// [    5    ] ////
const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith("%kt")) {
                if(!message.channel.guild) return;
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('<a:0003:600973089098170368> | **Game Starts**' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
    }
});

//// [   6    ] ////
const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.",
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.",
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.",
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.",
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.",
  "**لو خيروك بين الحقد أو المسامحة**.",
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.",
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.",
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.",
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.",
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.",
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.",
  "**لو خيروك بين المال أو الجمال**.",
  "**لو خيروك بين المال أو الذكاء**.",
  "**لو خيروك بين المال أو الصحة**.",
  "**لو خيروك بين الجمال أو الذكاء**.",
  "**لو خيروك بين الذكاء أو الصحة**.",
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("%lw")) {
                if(!message.channel.guild) return;
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
 
   .setThumbnail(message.author.avatarURL)
 .addField('<a:0003:600973089098170368> | **Game Starts**' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
    }
});

/////

