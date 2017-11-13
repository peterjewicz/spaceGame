function collideSquare(ship, square){
	//disables future collisions on object
	square.body.enable = false;
	
	if(parseInt(score.text) % square.val == 0){
		score.text = parseInt(score.text) + square.val;
		good.play();
		if(parseInt(score.text) > highScore){
			highScore = score.text;
		}
	}
	else{
		score.text = parseInt(score.text) - square.val;

    	explosion.play();
		square.animations.play('blowup', 10, false);
	}
}
