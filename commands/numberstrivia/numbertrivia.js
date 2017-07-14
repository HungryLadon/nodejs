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
//how to do call backs :)
        async run(message,args){
            getnumbertrivia(args,(a)=>message.channel.send(a));
            
        }
}

function getnumbertrivia(number,callback){
        const input = parseInt(number);
        var output = " ";
        console.log(typeof input, input);
        if(isNaN(input)){
            callback('input must be number') ;
            }

        else{
            const URL2 = URL+ number + endURL;
            request(URL2, function(error,response,body){
            console.log(typeof body);
            output = body;
            callback(output);
        });
        }

}
module.exports = numberTriva;




