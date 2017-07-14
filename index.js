
const commando = require('discord.js-commando');
const bot = new commando.Client();
const key = require('./botkey.js').key;
const weebCounter = 0;

bot.registry.registerGroup('random','Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("message",async message => {
   if(message.author === bot.user) return;

    let newm = message.content.substring(0,4);
    if(newm === "Reee"){
        message.reply("I see we have an autist among us");
    }

    if(message.content.includes('Wee')){
        weebCounter++;
    }
    
    
});


bot.login(key);

