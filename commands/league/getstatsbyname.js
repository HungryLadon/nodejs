const commando = require('discord.js-commando');
const https = require('https');
const request = require('request');
const getidURL = 'https://euw.api.riotgames.com/api/lol/EUW/v1.4/summoner/by-name/';
const before_key = '?api_key=';
const getrankURL = 'https://euw1.api.riotgames.com/lol/league/v3/positions/by-summoner/';
const key = require('./leaguekey').key;

class getStatsByName extends commando.Command{
    constructor(client){
        super(client, {
            name: 'sname',
            group: 'random',
            memberName: 'league commands',
            description: 'gets you a summoner\'s rank by name'

        });
    }


    async run(message,args){
    
        const requestURL = getidURL + args + before_key + key;
        request(requestURL, function(error,response,body){
            const body2 = JSON.parse(body);
            const sumID = body2[args].id;
            console.log('Getting league position for ', sumID);
            
            const rankrequestURl = getrankURL+sumID+before_key+key;

                request(rankrequestURl, function(error,response,body){
                    const rankReply = JSON.parse(body);//[{},{}] []=its an array, {}=first index
                    console.log(rankReply);
                    console.log(rankReply.length);

                    for(var i=0;i<rankReply.length;i++){
                        const winRate = rankReply[0].wins/(rankReply[0].wins+rankReply[0].losses);
                        const winPercentage = Math.floor(winRate*100);
                        message.channel.send(
                            'Players name: ' + rankReply[i].playerOrTeamName + '\n' +
                            'RanType: '+rankReply[i].queueType+'\n'+
                            'Rank: '+ rankReply[i].tier + ' '+rankReply[i].rank+ '\n'+
                            'Win Rate : ' + winPercentage+'%' + '\n' +
                            'League Points: ' + rankReply[i].leaguePoints);

                        if(rankReply[i].veteran == true){
                            message.channel.send(rankReply[i].playerOrTeamName + 'seems to be hard stuck at ' + rankReply[i].tier + ' '+rankReply[i].rank );
                            }
                        else{ }
                    }
               });
      });     
    }

}



module.exports = getStatsByName;