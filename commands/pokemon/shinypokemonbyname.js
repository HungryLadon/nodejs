const commando = require('discord.js-commando');
const pokeGif = require('pokemon-gif');
const compareString = require('string-similarity');
const fs = require('fs');

class shinypokegifCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'spg',
            group: 'random',
            memberName: 'shiny pokemon',
            description: 'gets you a shiny gif of the pokemon by name'

        });
    }
//Stupid thing wasnt working cuz there was a lotta space.
    async run(message, args) {
        const poke = args.toString();
        try {
            fs.readFile('./List_of_pokemon.txt', 'utf8', function (err, data) {
                const pokemons = data.split('\n');
                for (var i = 0; i < pokemons.length; i++) {
                    const arraymon = pokemons[i].toString().toLowerCase().trim();
                    const input = poke.toString();
                    const match = compareString.compareTwoStrings(poke,arraymon);
                    
                    if (match> 0.5) {
                        console.log(match);
                        message.channel.send(' ' , {
                        files: [pokeGif(arraymon, true)] // Or replace with FileOptions object
                        });
                        //message.channel.sendFile(pokeGif(arraymon,true));
                        break;
                    }
                    else {
                        
                    }
                }

            });
        }
        catch (err) { console.log(err) }
    }
}


module.exports = shinypokegifCommand;

