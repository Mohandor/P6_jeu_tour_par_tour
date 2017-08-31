/*
Index

1 - Plateau 						l12

2 - Controller						l19

3 - Combat 							l29
	3.1 - Début du combat 			l30
	3.2 - Déroulement du combat 	l36
	3.3 - Déroulement du combat 	l40
*/

// 1 - Plateau

var nbPlayers = 2; //Nombre de joueurs générés sur la carte
var nbWeapons = 3; //Nombre d'armes générés sur la carte

// 2 - Controller

function firstPlayer(){ // Function qui définit le premier joueur à jouer
	var number = Math.random(); // On définit une variable comprise entre 0 (inclus) et 1 (exclus)

	if (number < 0.5){ // Si number est inférieur à 0.5 on return "player1" sinon on return "player2"
		return "player1"; 
	} else {return "player2";}
}

// 3 - Combat
	// 3.1 - Début du combat
	var titreStartFight = "Combat!"; // Titre du message d'alerte du début du combat
	var messageStartFight = "Le duel à mort commence!"; // Texte du message d'alerte du début du combat
	var imageStartFight = "pictures/fight/h_droite_combat_60x60.gif"; // Image de l'alerte du début du combat
	var timerStartFight = 3000; // Timer du fondu pour l'alerte du début du combat

	// 3.2 - Déroulement du combat
	var buttonAttack = "FREEDOM!!!" // Value du bouton pour le choix d'attaque
	var buttonDefense = "TURTLE!!!" // Value du bouton pour le choix de défense

	// 3.3 - Fin du combat
	var player1VictoryMessage = "Tidus a gagné le combat et va maintenant rejoindre son équipe pour s'attaquer à Sin!"; // Message de victoire du joueur 1
	var player2VictoryMessage = "Cloud a gagné le combat et va maintenant s'attaquer à Sephiroth!"; // Message de victoire du joueur 2
	var newGamePlus = "Voulez-vous relancer une nouvelle partie?"; // Message qui s'affiche à la fin de la partie pour proposer à l'utilisateur de relancer une partie
	var buttonRestart = "Restart?"; // Valeu du bouton pour relancer la partie