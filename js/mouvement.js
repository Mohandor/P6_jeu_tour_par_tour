function verification(position) {
	var positionVerification = arguments[0];

	function verificationDroite(positionVerification){
		for (var m=1;m<4;m++){
			if ($('#'+(positionVerification+m)).hasClass('weapon')){
				$('#'+(positionVerification+m)).addClass('movementPossible');
				break;
			}else if ($('#'+(positionVerification+m)).hasClass('empty')) {
				$('#'+(positionVerification+m)).addClass('movementPossible');
			} else {break;}
		}
	}
	function verificationDroiteModulo(positionVerification){
		for (var m=1;m<4;m++){
			if (((positionVerification+m)%plateau.nbLignes===0) & ($('#'+(positionVerification+m)).hasClass('empty') || $('#'+(positionVerification+m)).hasClass('weapon'))) {
				$('#'+(positionVerification+m)).addClass('movementPossible');
				break;
			} else if ($('#'+(positionVerification+m)).hasClass('weapon')){
				$('#'+(positionVerification+m)).addClass('movementPossible');
				break;
			} else if ($('#'+(positionVerification+m)).hasClass('empty')) {
				$('#'+(positionVerification+m)).addClass('movementPossible');
			} else {break;}
		}
	}
	function verificationGauche(positionVerification){
		for (var m=1;m<4;m++){
			if ($('#'+(positionVerification-m)).hasClass('weapon')){
				$('#'+(positionVerification-m)).addClass('movementPossible');
				break;
			}else if ($('#'+(positionVerification-m)).hasClass('empty')){
				$('#'+(positionVerification-m)).addClass('movementPossible');
			} else {break;}
		}
	}
	function verificationGaucheModulo(positionVerification){
		for (var m=1;m<4;m++){positionVerification
			if (((positionVerification-m)%plateau.nbLignes===1) & ($('#'+(positionVerification-m)).hasClass('empty') || $('#'+(positionVerification-m)).hasClass('weapon'))) {
				$('#'+(positionVerification-m)).addClass('movementPossible');
				break;
			} else if ($('#'+(positionVerification-m)).hasClass('weapon')){
				$('#'+(positionVerification-m)).addClass('movementPossible');
				break;
			}else if ($('#'+(position-m)).hasClass('empty')) {
				$('#'+(positionVerification-m)).addClass('movementPossible');
			} else {break;}
		}
	}
	function verificationBas(positionVerification){
		for (var m=1; m<4; m++){
			if ($('#'+(positionVerification+plateau.nbLignes*m)).hasClass('weapon')){
				$('#'+(positionVerification+plateau.nbLignes*m)).addClass('movementPossible');
				break;
			}else if ($('#'+(positionVerification+plateau.nbLignes*m)).hasClass('empty')) {
				$('#'+(positionVerification+plateau.nbLignes*m)).addClass('movementPossible');
			} else {break;}
		}
	}
	function verificationHaut(positionVerification){
		for (var m=1;m<4;m++){
			if ($('#'+(positionVerification-plateau.nbColones*m)).hasClass('weapon')){
				$('#'+(positionVerification-plateau.nbColones*m)).addClass('movementPossible');
				break;
			}else if ($('#'+(positionVerification-plateau.nbColones*m)).hasClass('empty')) {
				$('#'+(positionVerification-plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}	
		}
	}


	// Coin haut gauche
	if ( $('#'+position).hasClass('col1') & $('#'+position).is('#row1') ) {
		verificationDroite(positionVerification);
		verificationBas(positionVerification);


	// Coin haut droite
	} else if ( $('#'+position).hasClass('col'+plateau.nbColones) & $('#'+position).is('#row1')) {
		verificationGauche(positionVerification);
		verificationBas(positionVerification);

	// Coin bas gauche
	} else if ( $('#'+position).hasClass('col1') & $('#'+position).is('#row'+plateau.nbLignes) ) {
		verificationDroite(positionVerification);
		verificationHaut(positionVerification);

	// Coin bas droite
	} else if ( $('#'+position).hasClass('col'+plateau.nbColones) & $('#'+position).is('#row'+plateau.nbLignes) ) {
		veriificationGauche(positionVerification);
		verificationHaut(positionVerification);

	// Colone de gauche
	} else if ( $('#'+position).hasClass('col1') ){

		verificationDroite(positionVerification);
		verificationBas(positionVerification);
		verificationHaut(positionVerification);

	// Colone de droite
	} else if ( $('#'+position).hasClass('col'+plateau.nbColones) ) {
		verificationGauche(positionVerification);
		verificationBas(positionVerification);
		verificationHaut(positionVerification);

	// Ligne du haut
	} else if ( $('#'+position).is('row1') ) {
		verificationDroiteModulo(positionVerification);
		verificationGauche(positionVerification);
		verificationBas(positionVerification);

	// Ligne du bas			
	} else if ( $('#'+position).is('row'+plateau.nbLignes) ) {
		verificationDroite(positionVerification);
		verificationGaucheModulo(positionVerification);
		verificationHaut(positionVerification);

	} else {
		verificationGaucheModulo(positionVerification);
		verificationDroiteModulo(positionVerification);
		verificationBas(positionVerification);
		verificationHaut(positionVerification);
	}
}

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
