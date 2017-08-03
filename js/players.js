// Fonction de génération d'un nouveau joueur
function player(nick, life, icon, weapon) {
    this.nick = nick;
    this.life = life;
    this.icon = icon;
    this.weaponid = weapon;
    this.weapon = weapon.name;
    this.weapondamage = weapon.damage;
    this.weaponurl = weapon.url;
}