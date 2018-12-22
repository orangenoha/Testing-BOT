const commando = require('discord.js-commando');
const discord = require('discord.js');

class AdminCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'admins',
            group: 'simple',
            memberName: 'admins',
            description:'Tells you who the current Admins are.'
        });
    }

    async run(message, args)
            {
                if(chance == 0)
                {
                    message.reply('The currently admins are Sickness, JoelBash, bpf26, Plank, Chef Sosa.')
                }
            }
}

module.exports = AdminCommand;
