// Génération des quatres armes
var weapon0 = new weapon('Dague', 10, 'pictures/weapons/Dagger.png', 0);
var weapon1 = new weapon('Épée courte', 20, 'pictures/weapons/Short_Sword.png', 1);
var weapon2 = new weapon('Épée longue',30 , 'pictures/weapons/Longsword.png', 2);
var weapon3 = new weapon('Devil tongue', 50, 'pictures/weapons/Devil_Tongue.png', 3);

// Génération de deux joueurs qui ont 100pv et équipé d'une dague (10dmg)
var player1 = new player('Player1', 100, 'pictures/players/player1.png', weapon0);
var player2 = new player('Player2', 100, 'pictures/players/player2.png', weapon0);

// Génération d'un plateau de 12 lignes et 12 colonnes 
plateau.init(12,12);

// Lancement de la partie avec le tourDeJeu du player1
mouvements.tourDeJeu('player1');