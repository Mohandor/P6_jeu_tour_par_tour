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
	},

	removeMovementPossible: function() {
		$('.movementPossible').removeClass('movementPossible');
	},

	movement: function(position) {
		$('.movementPossible').click(function(){
			var destination = $(this).attr('id');
			var playerSelect = eval($('#'+position).children().attr('id'));
			$('#'+destination).append($('#'+position).children());
			$('#'+position).removeClass('player').addClass('empty');
			$('#'+destination).removeClass('empty').addClass('player');
			mouvements.removeMovementPossible();
		}
	)}

}

