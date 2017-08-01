// Création des objets armes

var weapons = [
	{
		name: "dague",
		damage: 10,
		url: "pictures/weapons/Dagger.png"
	},
	{
		name: "épée courte",
		damage: 20,
		url: "pictures/weapons/Short_Sword.png"
	},
	{
		name: "épée longue",
		damage: 30,
		url: "pictures/weapons/Longsword.png"
	},
	{
		name: "devil tongue",
		damage: 50,
		url: "pictures/weapons/Devil_Tongue.png"
	},
]

function weapon(name, damage, url){
	this.name = name;
	this.damage = damage;
	this.url = url;
}

