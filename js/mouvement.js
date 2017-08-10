var mouvements = {

	tourDeJeu: function(typeDeTour) {
	
		if (typeDeTour === 'player1'){
			var position =  eval($('#player1').parent('.player').attr('id'));
			this.verification(position);
			this.movementTourDeJeu(position, typeDeTour, function(){
				var newPosition = eval($('#player1').parent('.player').attr('id'));
				var nextMove = mouvements.checkCollisionCombat(newPosition, typeDeTour);
				mouvements.tourDeJeu(nextMove);
			});

		}else if (typeDeTour === 'player2'){
			var position =  eval($('#player2').parent('.player').attr('id'));
			this.verification(position);
			this.movementTourDeJeu(position, typeDeTour, function(){
				var newPosition = eval($('#player2').parent('.player').attr('id'));
				var nextMove = mouvements.checkCollisionCombat(newPosition, typeDeTour);
				mouvements.tourDeJeu(nextMove);
			});
		}else if (typeDeTour === 'combat'){

		}else {}
	},


	removeMovementPossible: function() {
		$('.movementPossible').removeClass('movementPossible');
	},

	movementTourDeJeu: function(position, player, callback){
		$('.movementPossible').click(function(){
			var destination = $(this).attr('id');
			var playerEnJeu = eval(player);

			if ($(this).hasClass('weapon')){
				var newWeapon = eval($(this).children().attr('id'));
				var oldWeapon = playerEnJeu.weapon;
				$(this).children('.weaponPng').attr('src', oldWeapon.url).attr('id', oldWeapon.id);
				playerEnJeu.weapon = newWeapon;
				$('#'+player+'Weapon').attr('src', newWeapon.url);
			} 

			if ($('#'+position).hasClass('weapon')){
				$('#'+position).removeClass('player');
			} else {
				$('#'+position).removeClass('player').addClass('empty');
			}
			$('#'+destination).addClass('player').removeClass('empty').append($('#'+position).children('.playerPng'));
			mouvements.removeMovementPossible();
			callback();
			}
		)

	},

	checkCollisionCombat: function(position, player){
		var positionCheck = position;
		// Si il y a un jouer à droite return 'combat'
		if ( ( ((positionCheck+1)%plateau.nbColones!=1) & (positionCheck+1)<=plateau.nbCases ) & $('#'+(positionCheck+1)).hasClass('player') ){
			return 'combat';
		// Si il y a un joueur à gauche return 'combat'
		} else if ( ( ((positionCheck-1)%plateau.nbColones!=0) & (positionCheck-1)>=1 ) & $('#'+(positionCheck-1)).hasClass('player') ){
			return 'combat';
		// Si il y a un joueur en haut return 'combat'
		} else if ((positionCheck-plateau.nbColones)>=1 & $('#'+(positionCheck-plateau.nbColones)).hasClass('player') ){
			return 'combat';
		// Si il y a un joueur en bas return 'combat'
		} else if ((positionCheck+plateau.nbColones)<=plateau.nbCases & $('#'+(positionCheck+plateau.nbColones)).hasClass('player')){
			return 'combat';
		// Si c'est le joueur 2 qui jouait return "player1"
		} else if (player==='player2'){
			return 'player1';
		// Si c'est le joueur 1 qui jouait return 'player2'
		} else {
			return 'player2';
		}

	},

	verification: function(position) {
		// Vérification droite
		for (var m=1;m<=3;m++){
			if(((position+m)%plateau.nbColones===1) || (position+m)>(plateau.nbCases)){
				break;
			}else if (((position+m)%plateau.nbColones===0) & (!$('#'+(position+m)).hasClass('player') 
				|| !$('#'+(position+m)).hasClass('blocked'))) {
				$('#'+(position+m)).addClass('movementPossible');
				break;
			} else if ($('#'+(position+m)).hasClass('weapon') & !$('#'+(position+m)).hasClass('player')){
				$('#'+(position+m)).addClass('movementPossible');
				break;
			} else if ( $('#'+(position+m)).hasClass('empty') & ($('#'+(position+m+plateau.nbColones)).hasClass('player') 
				|| $('#'+(position+m-plateau.nbColones)).hasClass('player'))){
				$('#'+(position+m)).addClass('movementPossible');
				break;					
			} else if ($('#'+(position+m)).hasClass('empty')) {
				$('#'+(position+m)).addClass('movementPossible');
			} else {break;}
		}
		// Verification gauche
		for (var m=1;m<=3;m++){
			if(((position-m)%plateau.nbColones===0) || (position-m)<1){
				break;
			}else if (((position-m)%plateau.nbColones===1) & (!$('#'+(position-m)).hasClass('blocked') 
				|| $('#'+(position-m)).hasClass('player'))) {
				$('#'+(position-m)).addClass('movementPossible');
				break;
			} else if ($('#'+(position-m)).hasClass('weapon') & !$('#'+(position-m)).hasClass('player')){
				$('#'+(position-m)).addClass('movementPossible');
				break;
			}else if ( $('#'+(position-m)).hasClass('empty') & ($('#'+(position-m+plateau.nbColones)).hasClass('player') 
				|| $('#'+(position-m-plateau.nbColones)).hasClass('player'))){
				$('#'+(position-m)).addClass('movementPossible');
				break;	
			}else if ($('#'+(position-m)).hasClass('empty')) {
				$('#'+(position-m)).addClass('movementPossible');
			} else {break;}
		}
		// Verification haut
		for (var m=1;m<=3;m++){
			if((position-plateau.nbColones*m)<1){
				break;
			}else if ($('#'+(position-plateau.nbColones*m)).hasClass('empty') & ($('#'+(position-plateau.nbColones*m-1)).hasClass('player')
				|| $('#'+(position-plateau.nbColones*m+1)).hasClass('player'))){
				$('#'+(position-plateau.nbColones*m)).addClass('movementPossible');
				break;
			}else if ($('#'+(position-plateau.nbColones*m)).hasClass('weapon') & !$('#'+(position-plateau.nbColones*m)).hasClass('player') ){
				$('#'+(position-plateau.nbColones*m)).addClass('movementPossible');
				break;
			}else if ($('#'+(position-plateau.nbColones*m)).hasClass('empty')) {
				$('#'+(position-plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}	
		}
		// Verification bas
		for (var m=1; m<4; m++){
			if((position+plateau.nbColones*m)>plateau.nbCases){
				break;
			}else if ($('#'+(position+plateau.nbColones*m)).hasClass('empty') & ($('#'+(position+plateau.nbColones*m+1)).hasClass('player')
				|| $('#'+(position+plateau.nbColones*m-1)).hasClass('player'))){
				$('#'+(position+plateau.nbColones*m)).addClass('movementPossible');
				break;					
			}else if ($('#'+(position+plateau.nbColones*m)).hasClass('weapon') & !$('#'+(position+plateau.nbColones*m)).hasClass('player') ){
				$('#'+(position+plateau.nbColones*m)).addClass('movementPossible');
				break;
			}else if ($('#'+(position+plateau.nbColones*m)).hasClass('empty')) {
				$('#'+(position+plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}
		}

	}
}

