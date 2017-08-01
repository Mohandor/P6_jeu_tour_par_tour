// Génération des trois autres armes
var weapon1 = new weapon('Dague',10,'pictures/weapons/Dagger.png');
var weapon2 = new weapon('Épée courte', 20, 'pictures/weapons/Short_Sword.png');
var weapon3 = new weapon('Épée longue', 30, 'pictures/weapons/Longsword.png');
var weapon4 = new weapon('Devil tongue', 50, 'pictures/weapons/Devil_Tongue.png');


// Génération de deux joueurs qui ont 100pv et équipé d'une dague (10dmg)
var player1 = new player('Player1', 100, 'pictures/players/player1.png', weapon1);
var player2 = new player('Player2', 100, 'pictures/players/player2.png', weapon1);

console.log(player1.nick);


// Génération d'un plateau de 12 lignes et 12 colonnes 
plateau.init(12, 12);


$('#player1').click(function(){
	removeMovementPossible();
	var positionPlayer1 = Number($('#player1').parent('div').attr('id'));
	plateau.verification(positionPlayer1);
	movement(positionPlayer1);
});

$('#player2').click(function(){
	removeMovementPossible();
	var positionPlayer2 = Number($('#player2').parent('div').attr('id'));
	plateau.verification(positionPlayer2);
	movement(positionPlayer2);
});

console.log(player1);
console.log(weapon1);