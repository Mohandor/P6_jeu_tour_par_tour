var mouvements = {

	removeMovementPossible: function() {
		$('.movementPossible').removeClass('movementPossible');
	},

	movement: function(position) {
		$('.movementPossible').click(function(){
			var destination = $(this).attr('id');
			var playerSelect = $('#'+position).children().attr('id');
			$('#'+destination).append($('#'+position).children());
			$('#'+position).removeClass('player').addClass('empty');
			$('#'+destination).removeClass('empty').addClass('player');
			mouvements.removeMovementPossible();
		}
	)}

}
