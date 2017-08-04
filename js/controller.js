// Génération des quatres armes
var weapon0 = new weapons('Dague', 10, 'pictures/weapons/Dagger.png');
var weapon1 = new weapons('Épée courte', 20, 'pictures/weapons/Short_Sword.png');
var weapon2 = new weapons('Épée longue',30 , 'pictures/weapons/Longsword.png');
var weapon3 = new weapons('Devil tongue', 50, 'pictures/weapons/Devil_Tongue.png');

// Génération de deux joueurs qui ont 100pv et équipé d'une dague (10dmg)
var player1 = new player('Player1', 100, 'pictures/players/player1.png', weapon0);
var player2 = new player('Player2', 100, 'pictures/players/player2.png', weapon0);

// Génération d'un plateau de 12 lignes et 12 colonnes 
plateau.init(12,12);

$('#player1').click(function(){
	mouvements.removeMovementPossible();
	var positionPlayer1 = Number($(this).parent('.player').attr('id'));
	mouvements.verification(positionPlayer1);
	mouvements.movement(positionPlayer1);
});

$('#player2').click(function(){
	mouvements.removeMovementPossible();
	var positionPlayer2 = Number($(this).parent('div').attr('id'));
	mouvements.verification(positionPlayer2);
	mouvements.movement(positionPlayer2);
});


/*mouvements.tourDeJeu();*/