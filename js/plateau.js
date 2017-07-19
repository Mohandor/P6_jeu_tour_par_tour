/*var plateau = {
	nbLignes : 12,
	nbColones : 12,

	generationPlateauVide: function() {

		for (var i = 1; i <= this.nbLignes; i++) {
				
			$('<div/>').addClass('row').attr('id', 'row'+i).appendTo($("#boardGame"));

				for (var j = 1; j <= this.nbColones; j++) {
					$('<div/>').addClass('col-xs-1 colBoardGame col'+j).appendTo($('#row'+i));
					console.log(12*(i-1)+j);
				}
		}
	}
}*/


var plateau = {
	nbLignes : 12,
	nbColones : 12,

	generationPlateauVide: function() {

		for (var i = 1; i <= this.nbLignes; i++) {
				
			$('<div/>').addClass('row').attr('id', 'row'+i).appendTo($("#boardGame"));

				for (var j = 1; j <= this.nbColones; j++) {
					$('<div/>').addClass('col-xs-1 colBoardGame empty col'+j).attr('id', this.nbLignes*(i-1)+j).appendTo($('#row'+i));
				}
		}
	}
}

// Nombre de cases dans notre plateau de jeu
var nbCases = plateau.nbLignes*plateau.nbColones;

// Pourcentage de case que l'on veut bloquer
var pourcentageBlocked = Math.floor(Math.random()*10)+5;

// Nombre de case que l'on veut bloqué
var nbBlocked = Math.floor((nbCases/100)*pourcentageBlocked);


// Fonction pour enlevé la class empty et rajouté la classe blocked au nombre de case que l'on veut bloquer
function generationBlocked() {
	for (var k = 0; k < nbBlocked; k++) {
		
		var caseBlocked = Math.floor(Math.random()*nbCases)+1;
		while ($('#'+caseBlocked).hasClass('blocked')){
			var caseBlocked = Math.floor(Math.random()*nbCases)+1;
		}

		$('#'+caseBlocked).removeClass('empty').addClass('blocked');

	}
}


// Création des objets armes

var weapons = [
	{
		name: "dague",
		damage: 10,
		url: "../pictures/weapons/Dagger.png"
	},
	{
		name: "épée courte",
		damage: 20,
		url: "../pictures/weapons/Short_Sword.png"
	},
	{
		name: "épée longue",
		damage: 30,
		url: "../pictures/weapons/Longsword.png"
	},
	{
		name: "devil tongue",
		damage: 50,
		url: "../pictures/weapons/Devil_Tongue.png"
	},
]

console.log(weapons.length);

function generationWeapons() {
	for (var l = 1; l < 4; l++) {

		var caseWeapon = Math.floor(Math.random()*nbCases+1);
		while ($('#'+caseWeapon).hasClass('blocked')) {
			var caseWeapon = Math.floor(Math.random()*nbCases+1);
		}

		$('#'+caseWeapon).removeClass('empty').addClass('weapon');
		var weaponsl = weapons[l];
		$('<img src ="'+weaponsl.url+'">').attr('id','weapon['+l+']').addClass('weaponPng').appendTo($('#'+caseWeapon));
	}
	

}

function player(nick, life, icon, weapon, damage, weaponurl) {
    this.nick = nick;
    this.life = life;
    this.icon = icon;
    this.weapon = weapon.name;
    this.damage = weapon.damage;
    this.weaponurl = weapon.url;
 }

function generationPlayer() {

	var casePlayer1 = Math.floor(Math.random()*nbCases+1);
	while ($('#'+casePlayer1).hasClass('blocked') || $('#'+casePlayer1).hasClass('weapon')) {
		var casePlayer1 = Math.floor(Math.random()*nbCases+1);
	}

	$('#'+casePlayer1).removeClass('empty').addClass('player');
	$('<img src ="'+player1.icon+'">').attr('id','player1').addClass('playerPng').appendTo($('#'+casePlayer1));


	var casePlayer2 = Math.floor(Math.random()*nbCases+1);
	while (casePlayer2 === casePlayer1) {
		var casePlayer2 = Math.floor(Math.random()*nbCases+1);
	}

	while ((casePlayer2 === (casePlayer1+1)) || 
		(casePlayer2 === (casePlayer1-1)) || 
		(casePlayer2 === (casePlayer1+12)) || 
		(casePlayer2 === (casePlayer1-12)) ||
		(casePlayer2 === casePlayer1) ||
		($('#'+casePlayer2).hasClass('blocked')) ||
		($('#'+casePlayer2).hasClass('weapon'))) {
			var casePlayer2 = Math.floor(Math.random()*nbCases+1);
		}

	$('#'+casePlayer2).removeClass('empty').addClass('player');
	$('<img src ="'+player2.icon+'">').attr('id','player2').addClass('playerPng').appendTo($('#'+casePlayer2));
}
