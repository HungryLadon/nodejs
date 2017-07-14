const commando = require('discord.js-commando');
const https = require('https');
const request = require('request');
const URL = 'http://numbersapi.com/';
const endURL = '/math';

class numberTriva extends commando.Command{
    constructor(client){
        super(client, {
            name: 'numbertrivia',
            group: 'random',
            memberName: 'numbertrivia',
            description: 'gets you a trivia about input number'

        });
    }

    async run(message,args){
        const input = parseInt(args);
        console.log(typeof input, input);
        if(isNaN(input)){
            message.channel.send('input must be number')
            }

        else{
            const URL2 = URL+args + endURL;
            request(URL2, function(error,response,body){
            message.channel.send(body);
        });
        }

    }
}
module.exports = numberTriva;


