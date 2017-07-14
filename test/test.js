
const pokeGif = require("pokemon-gif");
const league = require("../commands/league/getstatsbyname");
const rannumtrivia = require('../commands/numberstrivia/randomnumber');
const numtriva = require("../commands/numberstrivia/numbertrivia");
const assert = require("assert");



describe ("pokeGif", function(){

    it("Tests for shiny, non shiny for pikachu by name and dex number", function(){
        var result = pokeGif('pikachu', false);
        assert.equal(result,'http://www.pokestadium.com/sprites/xy/pikachu.gif');

        result = pokeGif('pikachu',true);
        assert.equal(result,'http://www.pokestadium.com/sprites/xy/shiny/pikachu.gif');

        result = pokeGif(25,false);
        assert.equal(result,'http://www.pokestadium.com/sprites/xy/pikachu.gif');

        result = pokeGif(25,true);
        assert.equal(result,'http://www.pokestadium.com/sprites/xy/shiny/pikachu.gif');
    });
});