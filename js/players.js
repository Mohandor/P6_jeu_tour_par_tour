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