// Fonction de génération d'un nouveau joueur
function player(nick, life, icon, weapon) {
    this.nick = nick;
    this.life = life;
    this.icon = icon;
    this.weapon = weapon.name;
    this.damage = weapon.damage;
    this.weaponurl = weapon.url;
}

// Génération de deux joueurs qui ont 100pv et équipé d'une dague (10dmg)
var player1 = new player('Player1', 100, '../pictures/players/player1.png', weapons[0]);
var player2 = new player('Player2', 100, '../pictures/players/player2.png', weapons[0]);