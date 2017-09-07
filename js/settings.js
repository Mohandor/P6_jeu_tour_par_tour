/*
Index

1 - Plateau 						l12

2 - Combat 							l17
	2.1 - Début du combat 			l18
	2.2 - Déroulement du combat 	l24
	2.3 - Déroulement du combat 	l28
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
	var player1VictoryMessage = "Tidus a gagné le combat et va maintenant rejoindre son équipe pour s'attaquer à Sin!"; // Message de victoire du joueur 1
	var player2VictoryMessage = "Cloud a gagné le combat et va maintenant s'attaquer à Sephiroth!"; // Message de victoire du joueur 2
	var timerRestart = 6000; // Timer du délai avant que le message du restart apparaisse
	var newGamePlus = "Voulez-vous relancer une nouvelle partie?"; // Message qui s'affiche à la fin de la partie pour proposer à l'utilisateur de relancer une partie
	var buttonRestart = "Restart?"; // Value du bouton pour relancer la partie