// Fonction de génération de nouelles armes
function weapon(name, damage, url, id){
	this.name = name;
	this.damage = damage;
	this.url = url;
	this.id = 'weapon' + id;
}

var combat = {

	startFight: function(callback){
		swal({
			title: "Combat",
			text: "Le duel à mort commence!",
			imageUrl: "pictures/fight/h_droite_combat_60x60.gif",
			timer: 3000,
			showConfirmButton: false
		});
		callback();
	},

	createCombatBox: function(callback){
		$('<div/>').addClass('container').attr('id', 'combatBox').appendTo('#boardGame').hide().fadeIn(1000);
		callback();
	},

	removeCombatBoxRow: function(callback){
		$('#combatBoxRow').remove();
		callback();
		//fadeOut(500, function(){$(this).remove()});
	},

	tourDeCombat: function(player) {
		$('<div/>').addClass('row').attr('id', 'combatBoxRow').appendTo('#combatBox').hide().fadeIn(500);
		$('<p/>').addClass('col-sm-12').text("C'est au tour de "+player.nick+" de jouer, que va-t-il faire?").appendTo('#combatBoxRow');
		$('<input/>').addClass('col-sm-offset-1').addClass('col-sm-4').attr({type: 'button', id: 'buttonAttack', value: 'FREEDOM!!!'}).appendTo('#combatBoxRow');
		$('<input/>').addClass('col-sm-offset-2').addClass('col-sm-4').attr({type: 'button', id: 'buttonDefense', value: 'TURTLE!!!'}).appendTo('#combatBoxRow');

		$('#buttonAttack').on('click', function(){
			if(player.nick==='Player1'){
				player2.life = player2.life - player1.weapon.damage;
				if(player2.life<0){player2.life=0};
				$("#player2Life").text('PV: '+player2.life);
			}else{
				player1.life = player1.life - player2.weapon.damage;
				if(player1.life<0){player1.life=0};
				$("#player1Life").text('PV: '+player1.life);
			}
		});

		$('#buttonDefense').on('click', function(){
			// Faire quelque chose pour montrer qu'il se défend
		});

		$('input').on('click', function(){
			combat.removeCombatBoxRow(function(){
				combat.checkAlive(player);
			});
		});
	},

	checkAlive: function(player){
		if (player1.life === 0){
			//player2 has won
			$('<p/>').addClass('col-sm-12').text("Player2 a gagné ce duel!").appendTo('#combatBox');
		} else if (player2.life === 0){
			//player1 has won
			$('<p/>').addClass('col-sm-12').text("Player1 a gagné ce duel!").appendTo('#combatBox');
		} else {
			// On continue le combat
			if (player.nick === "Player1"){
				combat.tourDeCombat(player2);	
			}
			if (player.nick === "Player2"){
				combat.tourDeCombat(player1);
			}
		}
	}
}