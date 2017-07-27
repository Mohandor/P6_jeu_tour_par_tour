// Génération d'un plateau de 12 lignes et 12 colonnes 
plateau.init(12, 12);


$('#player1').click(function(){
	removeMovementPossible();
	var positionPlayer1 = Number($('#player1').parent('div').attr('id'));
	verification(positionPlayer1);
	movement(positionPlayer1);
});

$('#player2').click(function(){
	removeMovementPossible();
	var positionPlayer2 = Number($('#player2').parent('div').attr('id'));
	verification(positionPlayer2);
	movement(positionPlayer2);
});
