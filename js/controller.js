// Génération d'un plateau de 12 lignes et 12 colonnes 
plateau.init(12, 12);


$('#player1').click(function(){
	$('.movementPossible').removeClass('movementPossible');
	var positionPlayer1 = Number($('#player1').parent('div').attr('id'));
	verification(positionPlayer1);
});

$('#player2').click(function(){
	$('.movementPossible').removeClass('movementPossible');
	var positionPlayer2 = Number($('#player2').parent('div').attr('id'));
	verification(positionPlayer2);
});
