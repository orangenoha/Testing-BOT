
const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = process.env.TOKEN;

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello, how are you?');
    }
    
});

bot.on('ready',function(){
    console.log("Ready");
})

bot.login(TOKEN);
