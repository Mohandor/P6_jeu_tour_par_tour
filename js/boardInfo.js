// Création d'une row avec 3 colone de 4 pour les informations des deux joueurs et des armes
$('<div/>').addClass('row').attr('id', 'infoGame').appendTo($("#infoBoard"));
$('<div/>').addClass('col-xs-4').attr('id', 'player1Info').appendTo($("#infoGame"));
$('<div/>').addClass('col-xs-4').attr('id', 'weaponsInfo').appendTo($("#infoGame"));
$('<div/>').addClass('col-xs-4').attr('id', 'player2Info').appendTo($("#infoGame"));



// Remplissage de la partie d'informations des armes

// Création de trois lignes pour les noms, images et dégats des armes
$('<div/>').addClass('row weaponsNames').appendTo($('#weaponsInfo'));
$('<div/>').addClass('row weaponsPictures').appendTo($('#weaponsInfo'));
$('<div/>').addClass('row weaponsDamage').appendTo($('#weaponsInfo'));

// Pour chaques armes on ajout les informations de l'arme dans une col-xs-3
for (var i = 0; i < weapons.length; i++) {

	var weaponsi = weapons[i];
	$('<p/>').addClass('col-xs-3 colWeapon').text(weaponsi.name).appendTo($('.weaponsNames'));
	$('<img src ="'+weaponsi.url+'">').addClass('col-xs-3 colWeapon').appendTo($('.weaponsPictures'));
	$('<p/>').addClass('col-xs-3 colWeapon').text(weaponsi.damage).appendTo($('.weaponsDamage'));
}