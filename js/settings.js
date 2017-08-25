/*
Index

1 - Plateau

2 - Combat
	2.1 - Début du combat
	2.2 - Déroulement du combat
	2.3 - Déroulement du combat
*/

// 1 - Plateau

var nbPlayers = 2; //Nombre de joueurs générés sur la carte
var nbWeapons = 3; //Nombre d'armes générés sur la carte

// 2 - Combat
	// 2.1 - Début du combat
	var titreStartFight = "Combat!"; // Titre du message d'alerte du début du combat
	var messageStartFight = "Le duel à mort commence!"; // Texte du message d'alerte du début du combat
	var imageStartFight = "pictures/fight/h_droite_combat_60x60.gif"; // Image de l'alerte du début du combat
	var timerStartFight = 3000; // Timer du fondu pour l'alerte du début du combat

	// 2.2 - Déroulement du combat
	var buttonAttack = "FREEDOM!!!" // Value du bouton pour le choix d'attaque
	var buttonDefense = "TURTLE!!!" // Value du bouton pour le choix de défense

	// 2.3 - Fin du combat
	var player1VictoryMessage = "Le joueur 1 a gagné le duel! Quel homme!"; // Message de victoire du joueur 1
	var player2VictoryMessage = "Le joueur 2 a gagné le duel! Quel ork!"; // Message de victoire du joueur 2