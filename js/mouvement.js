var mouvements = {

	tourDeJeu: function() {
		//Tour du joueur 1
		function tourDuPlayer1(){
			var positionPlayer1 = Number($('#player1').parent('div').attr('id'));
			plateau.verification(positionPlayer1);
			mouvements.movement(positionPlayer1);
		}

		//Tour du joueur 2
		function tourDuPlayer2(){
			var positionPlayer2 = Number($('#player2').parent('div').attr('id'));
			plateau.verification(positionPlayer2);
			mouvements.movement(positionPlayer2);
		}
		tourDuPlayer1();
/*
	if (contact){
		//combat à mort
	} else {
		tourDuPlayer2();
	}

	if (contact) {
		//combat à mort
	} else {
		mouvements.tourDeJeu();
	}*/
	},

	removeMovementPossible: function() {
		$('.movementPossible').removeClass('movementPossible');
	},

	movement: function(position) {
		$('.movementPossible').click(function(){
			var destination = $(this).attr('id');
			var playerSelect = eval($('#'+position).children().attr('id'));
			if ($(this).hasClass('weapon')){
				var newWeapon = eval($(this).children().attr('id'));
				var oldWeapon = playerSelect.weapon;
				playerSelect.weapon = newWeapon;
				$(this).children('.weaponPng').attr('src', oldWeapon.url);
			}

			$('#'+destination).append($('#'+position).children('.playerPng'));
			$('#'+position).removeClass('player').addClass('empty');
			$('#'+destination).removeClass('empty').addClass('player');
			mouvements.removeMovementPossible();
		}
	)},

	contact: function() {

	},

	verification: function(position) {
		// Vérification droite
		for (var m=1;m<=3;m++){
			if(((position+m)%plateau.nbColones===1) || (position+m)>(plateau.nbCases)){
				break;
			}else if (((position+m)%plateau.nbColones===0) & ($('#'+(position+m)).hasClass('empty') 
				|| $('#'+(position+m)).hasClass('weapon'))) {
				$('#'+(position+m)).addClass('movementPossible');
				break;position
			} else if ($('#'+(position+m)).hasClass('weapon')){
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
			}else if (((position-m)%plateau.nbColones===1) & ($('#'+(position-m)).hasClass('empty') 
				|| $('#'+(position-m)).hasClass('weapon'))) {
				$('#'+(position-m)).addClass('movementPossible');
				break;
			} else if ($('#'+(position-m)).hasClass('weapon')){
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
			}else if ($('#'+(position-plateau.nbColones*m)).hasClass('weapon')){
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
			}else if ($('#'+(position+plateau.nbColones*m)).hasClass('weapon')){
				$('#'+(position+plateau.nbColones*m)).addClass('movementPossible');
				break;
			}else if ($('#'+(position+plateau.nbColones*m)).hasClass('empty')) {
				$('#'+(position+plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}
		}

	}
}

