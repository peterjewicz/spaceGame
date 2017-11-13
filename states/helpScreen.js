var helpScreen = {
    init: function(){
        // alert('Start Screen');
    },
    preload: function(){
        game.load.image('bg', 'sprites/help.jpg');
        game.load.spritesheet('backButton', 'sprites/backButton.png', 562, 235);
    },
    create: function() {
        bg = game.add.tileSprite(0, 0, document.body.offsetWidth, document.body.offsetHeight, 'bg');
        bg.tileScale.y = scaleHelpScreen();
        bg.tileScale.x = scaleHelpScreen();

        backButton = game.add.button(50, game.height/2 + 50, 'backButton', backClick, this,0, 0, 1);
        backButton.scale.setTo(setScaleWidth(), setScaleWidth());
    },
    update: function() {

    }
}


function scaleHelpScreen(){
    // var defaultScale  = .25;
    // return defaultScale;
    return game.width/game.baseWidth * .25;
}

function backClick(){
    game.state.start('startScreen');
}
