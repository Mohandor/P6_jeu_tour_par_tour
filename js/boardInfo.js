// Création d'une row avec 3 colone de 4 pour les informations des deux joueurs et des armes
$('<div/>').addClass('row').attr('id', 'infoGame').appendTo($("#infoBoard"));
$('<div/>').addClass('col-xs-4 playersInfo').attr('id', 'player1Info').appendTo($("#infoGame"));
$('<div/>').addClass('col-xs-4').attr('id', 'weaponsInfo').appendTo($("#infoGame"));
$('<div/>').addClass('col-xs-4 playersInfo').attr('id', 'player2Info').appendTo($("#infoGame"));



// Remplissage de la partie d'informations des armes

// Création de trois lignes pour les noms, images et dégats des armes
$('<div/>').addClass('row weaponsNames').appendTo($('#weaponsInfo'));
$('<div/>').addClass('row weaponsPictures').appendTo($('#weaponsInfo'));
$('<div/>').addClass('row weaponsDamage').appendTo($('#weaponsInfo'));

// Pour chaques armes on ajout les informations de l'arme dans une col-xs-3
for (var i = 0; i < 4; i++) {

	var weaponsi = eval('weapon'+i);
	$('<p/>').addClass('col-xs-3 colWeapon').text(weaponsi.name).appendTo($('.weaponsNames'));
	$('<img src ="'+weaponsi.url+'">').addClass('col-xs-3 colWeapon').appendTo($('.weaponsPictures'));
	$('<p/>').addClass('col-xs-3 colWeapon').text(weaponsi.damage).appendTo($('.weaponsDamage'));
}

// Division du joueur 1
$('<div/>').addClass('row').attr('id', 'player1InfoRow').appendTo($('#player1Info'));
$('<div/>').addClass('col-xs-12').attr('id','player1Name').text(player1.nick).appendTo($('#player1InfoRow'));
$('<img src="'+player1.url+'">').addClass('col-sm-4 playerIcon').appendTo($('#player1InfoRow'));
$('<img src="'+player1.weapon.url+'">').attr('id','player1Weapon').addClass('col-sm-4 playerWeapon)').appendTo($('#player1InfoRow'));
$('<div/>').addClass('col-sm-4 playerLife').attr('id','player1Life').text('PV:'+player1.life).appendTo($('#player1InfoRow'));

// Division du joueur 2
$('<div/>').addClass('row').attr('id', 'player2InfoRow').appendTo($('#player2Info'));
$('<div/>').addClass('col-xs-12').attr('id','player1Name').text(player2.nick).appendTo($('#player2InfoRow'));
$('<div/>').addClass('col-sm-4 playerLife').attr('id','player2Life').text('PV:'+player2.life).appendTo($('#player2InfoRow'));
$('<img src="'+player2.weapon.url+'">').attr('id','player2Weapon').addClass('col-sm-4 playerWeapon)').appendTo($('#player2InfoRow'));
$('<img src="'+player2.url+'">').addClass('col-sm-4 playerIcon').appendTo($('#player2InfoRow'));
