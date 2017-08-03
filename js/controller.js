// Génération de deux joueurs qui ont 100pv et équipé d'une dague (10dmg)
var player1 = new player('Player1', 100, 'pictures/players/player1.png', weapons[0]);
var player2 = new player('Player2', 100, 'pictures/players/player2.png', weapons[0]);

// Génération d'un plateau de 12 lignes et 12 colonnes 
plateau.init(12,12);

$('#player1').click(function(){
	mouvements.removeMovementPossible();
	var positionPlayer1 = Number($(this).parent('div').attr('id'));
	plateau.verification(positionPlayer1);
	mouvements.movement(positionPlayer1);
});

$('#player2').click(function(){
	mouvements.removeMovementPossible();
	var positionPlayer2 = Number($(this).parent('div').attr('id'));
	plateau.verification(positionPlayer2);
	mouvements.movement(positionPlayer2);
});


