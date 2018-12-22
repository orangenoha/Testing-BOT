const commando = require('discord.js-commando');
const discord = require('discord.js');

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description:'Rolls a virtual dice with its magical powers.'
        });
    }

    async run(message, args)
            {
                var diceRoll = Math.floor(Math.random() * 6) + 1;
                message.reply("You roll landed on a " + diceRoll);
            }
}

module.exports = DiceRollCommand;