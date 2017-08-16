// Fonction de génération de nouelles armes
function weapon(name, damage, url, id){
	this.name = name;
	this.damage = damage;
	this.url = url;
	this.id = 'weapon' + id;
}

var combat = {
	tourDeCombat: function() {
		var choixPlayer1 = this.choixCombat(player1);
		var choixPlayer2 = this.choixCombat(player2);

		if (choixPlayer1 === 'combattre'){
			player2.life = player2.life - player1.weapon.damage;
		}
		if (choixPlayer1 === 'defendre'){
			player1.life = player1.life - 0.5*player2.weapon.damage;
		}

		if (choixPlayer2 === 'combattre'){
			player1.life = player1.life - player2.weapon.damage;
		}

		if (choixPlayer2 === 'défendre'){
			player2.life = player2.life - 0.5*player1.weapon.daamge;
		}

	},

	choixCombat: function(player){
			$('<div/>').addClass('row').attr('id', 'choixCombat').appendTo($("#boardGame"));
			$('<p/>').addClass('col-sm-12').text("C'est au tour de "+player+" de jouer, que va-t-il faire?").appendTo($("#choixCombat"));
	},

	checkAlive: function(){
		if (player1.life === 0){
			//player2 has won
		} else if (player2.life === 0){
			//player1 has won
		} else {
			// On continue le combat
			combat.tourDeCombat();
		}

	}
}