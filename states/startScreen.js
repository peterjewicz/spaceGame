var startScreen = {
    init: function(){
        // alert('Start Screen');
    },
    preload: function(){
         game.load.image('bg', 'sprites/bg.jpg');
         game.load.spritesheet('startButton', 'sprites/playButton.png', 562, 235);
         game.load.spritesheet('helpButton', 'sprites/helpButton.png', 562, 235);
         game.load.spritesheet('ship', 'sprites/ship.png', 150, 164);
         game.load.spritesheet('planet1_sprite', 'sprites/planet1_sprite.png', 150, 148);
         game.load.spritesheet('planet2_sprite', 'sprites/planet2_sprite.png', 150, 148);
        //  game.load.audio('music', ['assets/music.wav']);
    },
    create: function() {
        bg = game.add.tileSprite(0, 0, document.body.offsetWidth, document.body.offsetHeight, 'bg');
        bg.tileScale.y = .25;
        bg.tileScale.x = .25;
        game.add.text(15, 50,'Spaceship', { font: "72px Clip", fill: "white", align: "center" });
        game.add.text(15, 150,'Dodge', { font: "72px Clip", fill: "white", align: "center" });


        ship = game.add.sprite(150, 300, 'ship');
        ship.animations.add('fly');
        ship.animations.play('fly', 20, true);
        ship.scale.setTo(setScaleWidth(), setScaleWidth());



        planet1 = game.add.sprite(50, 275, 'planet1_sprite');
        planet1.scale.setTo(setScaleWidth(), setScaleWidth());
        planet1.anchor.setTo(0.5, 0.5); // need to rotate on it's center position


        planet2 = game.add.sprite(300, 300, 'planet2_sprite');
        planet2.scale.setTo(setScaleWidth() + .1, setScaleWidth() + .1);
        planet2.anchor.setTo(0.5, 0.5); // need to rotate on it's center position


        playButton = game.add.button(50, game.height-250, 'startButton', playClick, this,0, 0, 1);
        playButton.scale.setTo(setScaleWidth(), setScaleWidth());

        helpButton = game.add.button(50, game.height-150, 'helpButton', helpClick, this,0, 0, 1);
        helpButton.scale.setTo(setScaleWidth(), setScaleWidth());
    },
    update: function() {
        planet1.angle += 1;
        planet2.angle += 1;
    }
}


function playClick(){
    game.state.start('Game');
}

function helpClick(){
    game.state.start('helpScreen');
}
