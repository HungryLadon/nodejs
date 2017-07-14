const commando = require('discord.js-commando');
const https = require('https');
const request = require('request');
const URL = 'http://numbersapi.com/random/trivia';

class randomnumberTriva extends commando.Command{
    constructor(client){
        super(client, {
            name: 'randomnumber',
            group: 'random',
            memberName: 'randomnumbertrivia',
            description: 'gets you a trivia about a random number'

        });
    }

    async run(message,args){
        request(URL, function(error,response,body){
            message.channel.send(body);
        });
        
    }
}

module.exports = randomnumberTriva;