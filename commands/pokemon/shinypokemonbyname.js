const commando = require('discord.js-commando');
const pokeGif = require('pokemon-gif');
const compareString = require('string-similarity');
const fs = require('fs');
/**
 * This command looks for a pokemons gif(x/y version) and sends it back.
 * Also has spell check so even if you have a small typo if will retrieve the right file.
 * 
 * 
 */

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
                        console.log(poke,pokemins[i], match);
                        message.channel.send(' ' , {
                        files: [pokeGif(arraymon, true)] // Or replace with FileOptions object
                        });
                        //message.channel.sendFile(pokeGif(arraymon,true));
                        break;
                    }
                    else {
                        message.channel.send('No matches for that pokemonfound');
                        console.log(match);
                        break;
                    }
                }

            });
        }
        catch (err) { console.log(err) }
    }
}


module.exports = shinypokegifCommand;

