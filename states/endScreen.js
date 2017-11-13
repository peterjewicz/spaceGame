var endScreen = {
    init: function(){
        // alert('Start Screen');
    },
    preload: function(){
        game.load.image('bg', 'sprites/bg.jpg');
        game.load.spritesheet('againButton', 'sprites/againButton.png', 562, 235);
    },
    create: function() {
        bg = game.add.tileSprite(0, 0, document.body.offsetWidth, document.body.offsetHeight, 'bg');
        bg.tileScale.y = .25;
        bg.tileScale.x = .25;

        var gameText = game.add.text(15, 50,'Game', { font: "72px Clip", fill: "#529eff", align: "center" });
        gameText.x = ((game.width / 2) - (gameText.width / 2));

        var overText = game.add.text(15, 150,'Over', { font: "72px Clip", fill: "#529eff", align: "center" });
        overText.x = ((game.width / 2) - (overText.width / 2));


        var endScore = game.add.text(300, game.height/2.25,highScore, { font: "72px Clip", fill: "white", align: "center" });
        endScore.x = ((game.width / 2) - (endScore.width / 2));

        var graphics = game.add.graphics(0, 0);
        graphics.lineStyle(2, 0xFFFFFF, 1);
        graphics.beginFill(0xFFFFFF, 1);
        graphics.drawRect( (game.width / 2) - 50, game.height/2.25 + 75, 100, 1);

        againButton = game.add.button(50, game.height-150, 'againButton', againClick, this,0, 0, 1);
        againButton.scale.setTo(setScaleWidth(), setScaleWidth());
    },
    update: function() {

    }
}

function againClick(){
    game.state.start('Game');
    game.sound.stopAll();
}
