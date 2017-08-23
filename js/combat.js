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
		$('<input/>').addClass('col-sm-offset-1').addClass('col-sm-4').attr({type: 'button', id: 'buttonAttack', value: buttonAttack}).appendTo('#combatBoxRow');
		$('<input/>').addClass('col-sm-offset-2').addClass('col-sm-4').attr({type: 'button', id: 'buttonDefense', value: buttonDefense}).appendTo('#combatBoxRow');

		// Ce qui se passe si le joueur décide d'attaquer en cliquant sur le bouton
		$('#buttonAttack').on('click', function(){
			// Le shield est mis ou remis à false, il est en position d'attaque
			player.shield = false;

			// Si c'est le joueur 1 qui joue
			if(player.nick==='Player1'){
				// Si le joueur 2 est en position d'attaque il perd autant de PV que les dégats de l'arme du joueur 1
				if(player2.shield === false){
					player2.life = player2.life - player1.weapon.damage;
				}
				// Si le joueur 2 est en position défensive il perd seulement la moitié des PV des dégats de l'arme du joueur 1
				if(player2.shield === true){
					player2.life = player2.life - 0.5*player1.weapon.damage;
				}
				
				// Les PV du joueurs 2 ne peuvent pas déscendre en dessous de 0
				if(player2.life<0){player2.life=0};

				// On modifie les PV dans le boardInfo
				$("#player2Life").text('PV: '+player2.life);
			}

			// Si c'est le joueur 2 qui joue
			if(player.nick === 'Player2'){
				if(player1.shield === false){
					player1.life = player1.life - player2.weapon.damage;
				}
				if(player1.shield === true){
					player1.life = player1.life - 0.5*player2.weapon.damage;
				}
			
				if(player1.life<0){player1.life=0};
				$("#player1Life").text('PV: '+player1.life);
			}
		});

		$('#buttonDefense').on('click', function(){
			if(player.nick === 'Player1'){
				player1.shield = true;
			} 
			if(player.nick === "Player2"){
				player2.shield = true;
			}
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
			$('<p/>').addClass('col-sm-12').text(player2VictoryMessage).appendTo('#combatBox');
		} else if (player2.life === 0){
			//player1 has won
			$('<p/>').addClass('col-sm-12').text(player1VictoryMessage).appendTo('#combatBox');
		} else {
			// On continue le combat en relançant un nouveau tour de combat du joueur opposé
			if (player.nick === "Player1"){
				combat.tourDeCombat(player2);	
			}
			if (player.nick === "Player2"){
				combat.tourDeCombat(player1);
			}
		}
	}
}