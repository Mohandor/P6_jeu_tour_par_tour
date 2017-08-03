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
				var newWeapon = $(this).children().attr('id');
				var oldWeapon = playerSelect.weaponid;
				playerSelect.weaponid = eval(newWeapon);
				playerSelect.weapon = eval(newWeapon).name;
				playerSelect.weapondamage = eval(newWeapon).damage;
				playerSelect.weaponurl = eval(newWeapon).url;
			}

			$('#'+destination).append($('#'+position).children());
			$('#'+position).removeClass('player').addClass('empty');
			$('#'+destination).removeClass('empty').addClass('player');
			mouvements.removeMovementPossible();
		}
	)},

	contact: function() {

	}

}

