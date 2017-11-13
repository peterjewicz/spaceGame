//creates the dividers for the lanes.
//@return VOID
function generateDividers(){
    //set up the square attributes
    var graphics = game.add.graphics(0, 0);
    graphics.lineStyle(2, 0xFFFFFF, 1);
    graphics.beginFill(0xFFFFFF, 1);

    for(var x = 1; x <= 5; x++){
        //TODO make this dynamic to screen size
        var drawHeight = game.height -50;

        for(var y = 0; y < 3; y++){
            graphics.drawRect(game.sectionWidth * x, drawHeight, 1, 50);
            drawHeight = drawHeight - 75;
       }

    }
    //draw the last set
    var drawHeight = game.height - 50;
    for(var y = 0; y < 3; y++){
        graphics.drawRect(1, drawHeight, 1, 50);
        drawHeight = drawHeight - 75;
    }
}
