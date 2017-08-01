function removeMovementPossible() {
	$('.movementPossible').removeClass('movementPossible');
}

function movement(position) {
	$('.movementPossible').click(function(){
		var destination = $(this).attr('id');
		$('#'+destination).append($('#'+position).children());
		$('#'+position).removeClass('player').addClass('empty');
		$('#'+destination).removeClass('empty').addClass('player');
		removeMovementPossible();
	}
)};
