// Fonction de génération de nouelles armes
function createWeapon(name, damage, url, id){
	this.name = name;
	this.damage = damage;
	this.url = url;
	this.id = 'weapon' + id;
}

// Fonction de génération d'un nouveau joueur
function createPlayer(nick, life, url, weapon) {
    this.nick = nick;
    this.life = life;
    this.url = url;
    this.weapon = weapon;
    this.shield = false;
}

function firstPlayer(){ // Function qui définit le premier joueur à jouer
	var number = Math.random(); // On définit une variable comprise entre 0 (inclus) et 1 (exclus)

	if (number < 0.5){ // Si number est inférieur à 0.5 on return "player1" sinon on return "player2"
		return "player1"; 
	} else {return "player2";}
}