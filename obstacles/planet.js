var planetController = (function () {
    var planets = {}
    planets.sprites = ['planet1.png', 'planet2.png', 'planet3.png'];

    planets.activeArray = Array();
    planets.scoreVal = Array();


    //load any of the assets for the object here.
    planets.init = function(){
        game.load.spritesheet('planet1_sprite', 'sprites/planet1_sprite.png', 150, 148);
        game.load.spritesheet('planet2_sprite', 'sprites/planet2_sprite.png', 150, 148);
        game.load.spritesheet('planet3_sprite', 'sprites/planet3_sprite.png', 150, 148);
    }

    //creates a line of 5 planets
    //each one takes up a row
    planets.generateLine = function(){
        for(var x = 0; x < 5; x++){

            var image = 'planet' + parseInt(Math.floor(Math.random() * 3) + 1) + "_sprite";
            planet1 = game.add.sprite(game.sectionWidth * x, -200, image);
            planet1.animations.add('blowup');

            var currentScore = parseInt(score.text);
            var scoreFloor = Math.round(currentScore * .1 );
            var scoreCeilling = Math.round(currentScore * .5);


            planet1.val = Math.floor(Math.random() * scoreCeilling) + scoreFloor;
            planet1.scale.setTo(setScaleWidth(), setScaleWidth());
            game.physics.enable(planet1, Phaser.Physics.ARCADE);

            planets.defaultFontSize = 38 * setScaleWidth() * 2;

            planets.defaultFontSize = planets.defaultFontSize + "px Clip";

            value = game.add.text((game.sectionWidth * x + (game.sectionWidth / 2) - 18), -200,planet1.val, { font: planets.defaultFontSize, fill: "black", align: "center" });
            planets.scoreVal.push(value);
            planets.activeArray.push(planet1);
        }
    }
    return planets;
}());
