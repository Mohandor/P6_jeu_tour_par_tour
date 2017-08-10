// Fonction de génération de nouelles armes
function weapon(name, damage, url, id){
	this.name = name;
	this.damage = damage;
	this.url = url;
	this.id = 'weapon' + id;
}