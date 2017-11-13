var mainState = {
    init: function ()
    {
        var workingWidth = game.width - 4;
        game.sectionWidth = workingWidth/5;
    },
    preload: function() {
        planetController.init();
        game.load.image('bg', 'sprites/bg.jpg');
        game.load.image('ship', 'ship.png');
        game.load.spritesheet('ship', 'sprites/ship.png', 150, 164);
        game.load.audio('explosion', 'sounds/explosion.wav');
        game.load.audio('good', 'sounds/good.wav');
        game.load.audio('music', 'sounds/music.mp3');


    },
     create: function() {

         explosion = game.add.audio('explosion');
         good = game.add.audio('good');
         music = game.add.audio('music');

         setTimeout(function(){
             music.play();
             music.loop = true;
        }, 1000);
         //start the physics engine
         game.physics.startSystem(Phaser.Physics.ARCADE);
         bg = game.add.tileSprite(0, 0, document.body.offsetWidth, document.body.offsetHeight, 'bg');
         bg.tileScale.y = .25;
         bg.tileScale.x = .25;
         //create the world dividers
         generateDividers();

        ship = game.add.sprite(0, game.height - 150, 'ship');
        ship.animations.add('fly');
        ship.animations.play('fly', 20, true);
        ship.endx = ship.x;
        ship.scale.setTo(setScaleWidth() - .1, setScaleWidth() - .1);
        game.physics.enable(ship, Phaser.Physics.ARCADE);

        score = game.add.text(0, game.height-50,'10', { font: "26px Clip", fill: "white", align: "center" });
        score.x = (game.sectionWidth / 2) - (score.width / 2);
        score.endx = score.x;

        highScore = score.text;

        //draw a set of squares
        planetController.generateLine();
        game.time.events.repeat(Phaser.Timer.SECOND * 3 , 10000000, planetController.generateLine, this);
        game.input.onDown.add(moveShip, this);
    },

    update: function() {

        if(score.text <= 0){
            game.state.start('endScreen');
        }
        // game.input.onDown.add(moveShip, this);
        if(ship.endx != ship.x){
            //the velocity is the base rate times the size increase of hte screen.
            var velocity = 15 * setScaleWidth();
            if(ship.endx > ship.x){

                //check to make sure the next frame won't pass
                if(ship.x + velocity > ship.endx){
                    ship.x = ship.endx
                    score.x = score.endx;
                }
                else{
                    ship.x = ship.x + velocity;
                    score.x = score.x + velocity;
                }
            }else{
                if(ship.x + velocity < ship.endx){
                    ship.x = ship.endx
                    score.x = score.endx;
                }else{
                    ship.x = ship.x - velocity;
                    score.x = score.x - velocity;
                }
            }
        }
        bg.tilePosition.y = bg.tilePosition.y + 5;


        for(var x=0; x < planetController.activeArray.length; x++){
            game.physics.arcade.collide(ship, planetController.activeArray[x], collideSquare);
            planetController.activeArray[x].y = planetController.activeArray[x].y + 2;

            planetController.scoreVal[x].y = planetController.scoreVal[x].y + 2;
        }
    },
}

//handles ship movement on click
function moveShip(){
    var lane = Math.floor(game.input.mousePointer.x / game.sectionWidth);
    ship.endx = (game.sectionWidth * lane) + (.5 * game.sectionWidth) - (.5 * ship.width);
    score.endx = (game.sectionWidth * lane) + (.5 * game.sectionWidth) - (.5 * score.width);
}
