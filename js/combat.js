var combat = {

	startFight: function(callback){
		swal({
			title: titreStartFight,
			text: messageStartFight,
			imageUrl: imageStartFight,
			timer: timerStartFight,
			showConfirmButton: false
		});
		callback();
	},

	createCombatBox: function(callback){
		$('<div/>').addClass('container').attr('id', 'combatBox').appendTo('#boardGame').hide().fadeIn(1000);
		$('<div/>').addClass('row').attr('id', 'combatBoxRow').appendTo('#combatBox');
		callback();
	},

	removeCombatBoxRow: function(callback){
		$('#combatBoxRow').empty();
		callback();
	},

	tourDeCombat: function(player) {
	
		$('<p/>').addClass('col-sm-12').text("C'est au tour de "+player.nick+" de jouer, que va-t-il faire?").appendTo('#combatBoxRow');
		$('<input/>').addClass('col-sm-offset-1').addClass('col-sm-4').attr({type: 'button', id: 'buttonAttack', value: buttonAttack}).appendTo('#combatBoxRow');
		$('<input/>').addClass('col-sm-offset-2').addClass('col-sm-4').attr({type: 'button', id: 'buttonDefense', value: buttonDefense}).appendTo('#combatBoxRow');
		

		// Ce qui se passe si le joueur décide d'attaquer en cliquant sur le bouton correspondant
		$('#buttonAttack').on('click', function(){
			// Le shield est mis ou remis à false, il est en position d'attaque
			if (player.shield === true){player.shield = false;}

			// Si c'est le joueur 1 qui joue
			if(player.nick==='Tidus'){
				// Si le joueur 2 est en position d'attaque il perd autant de PV que les dégats de l'arme du joueur 1
				if(player2.shield === false){
					player2.life = player2.life - player1.weapon.damage;
				}
				// Si le joueur 2 est en position défensive il perd seulement la moitié des PV des dégats de l'arme du joueur 1
				if(player2.shield === true){
					player2.life = player2.life - 0.5*player1.weapon.damage;
				}
				
				if(player2.life<0){player2.life=0}; // Les PV du joueur 2 ne peuvent pas déscendre en dessous de 0
				$("#player2Life").text('PV: '+player2.life); // On modifie les PV dans le boardInfo
			}

			// Si c'est le joueur 2 qui joue
			if(player.nick === 'Cloud'){
				// Si le joueur 1 est en position d'attaque il perd autant de PV que les dégats de l'arme du joueur 2
				if(player1.shield === false){
					player1.life = player1.life - player2.weapon.damage;
				}
				// Si le joueur 1 est en position défensive il perd seulement la moitié des PV des dégats de l'arme du joueur 2
				if(player1.shield === true){
					player1.life = player1.life - 0.5*player2.weapon.damage;
				}
				
				if(player1.life<0){player1.life=0}; // Les PV du joueur 1 ne peuvent pas déscendre en dessous de 0
				$("#player1Life").text('PV: '+player1.life); // On modifie les PV dans le boardInfo
			}
		});

		// Ce qui se passe si le joueur décie de se défendre en cliquant sur le bouton correspondant
		$('#buttonDefense').on('click', function(){
			player.shield = true; // On met la position du joueur en défensive avec shield true
		});

		// Ce qui se passe après n'importe quel click sur un input
		$('input').on('click', function(){
			// On fait appel à la fonction qui enlève notre row avec l
			combat.removeCombatBoxRow(function(){
				combat.checkAlive(player);
			});
		});
	},

	newGamePlus: function(){
		setTimeout(function(){
			combat.removeCombatBoxRow(function(){
			$('<p/>').addClass('col-sm-12').text(newGamePlus).appendTo('#combatBoxRow');
			$('<input/>').addClass('col-sm-offset-3').addClass('col-sm-6').attr({type: 'button', id: 'buttonRestart', value: buttonRestart}).appendTo('#combatBoxRow');
			$('#buttonRestart').on('click', function(){location.reload()});	
			});
		}, 4000);
	},

	// Fonction pour vérifier si un joueur est mort ou alors définir le tour suivant
	checkAlive: function(player){
		$('#combatBoxRow').hide().fadeIn(500);
		// Si le joueur 1 est mort on affiche le message de victoire du joueur 2
		if (player1.life === 0){
			music.endFight();
			$('<p/>').addClass('col-sm-12').text(player2VictoryMessage).appendTo('#combatBoxRow');
			$('<div/>').addClass('col-sm-6').attr('id', 'player1Victory').appendTo('#combatBoxRow');
			$('<div/>').addClass('col-sm-6').attr('id', 'player2Victory').appendTo('#combatBoxRow');
			$('<img>').attr('src', 'pictures/players/tidusDead.png').appendTo('#player1Victory');
			$('<img>').attr('src', 'pictures/players/cloudVictory.png').appendTo('#player2Victory');
			combat.newGamePlus();
		// Si le joueur 2 est mort on affiche le message de victoire du joueur 1
		} else if (player2.life === 0){
			music.endFight();
			$('<p/>').addClass('col-sm-12').text(player1VictoryMessage).appendTo('#combatBoxRow');
			$('<div/>').addClass('col-sm-6').attr('id', 'player1Victory').appendTo('#combatBoxRow');
			$('<div/>').addClass('col-sm-6').attr('id', 'player2Victory').appendTo('#combatBoxRow');
			$('<img>').attr('src', 'pictures/players/tidusVictory.png').appendTo('#player1Victory');
			$('<img>').attr('src', 'pictures/players/cloudDead.png').appendTo('#player2Victory');
			combat.newGamePlus();

		// Sinon continue le combat en relançant un nouveau tour de combat du joueur opposé
		} else {
			if (player.nick === "Tidus"){
				combat.tourDeCombat(player2);	
			}
			if (player.nick === "Cloud"){
				combat.tourDeCombat(player1);
			}
		}
	}
}