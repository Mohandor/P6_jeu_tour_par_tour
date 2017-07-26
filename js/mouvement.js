

function verification(position) {

	// Coin haut gauche
	if ( $('#'+position).hasClass('col1') & $('#'+position).is('#row1') ) {

		for (var m=1;m<4;m++){
			if ($('#'+(position+m)).hasClass('empty') || $('#'+(position+m)).hasClass('weapon') ) {
				$('#'+(position+m)).addClass('movementPossible');
			} else {break;}
		}
		for (var m=1; m<4; m++){
			if ($('#'+(position+plateau.nbLignes*m)).hasClass('empty') || $('#'+(position+m)).hasClass('weapon')) {
				$('#'+(position+plateau.nbLignes*m)).addClass('movementPossible');
			} else {break;}
		}

	// Coin haut droite
	} else if ( $('#'+position).hasClass('col'+plateau.nbColones) & $('#'+position).is('#row1')) {
		for (var m=1;m<4;m++){
			if ($('#'+(position-m)).hasClass('empty') || $('#'+(position-m)).hasClass('weapon') ){
				$('#'+(position-m)).addClass('movementPossible');
			} else {break;}
		}
		for (var m=1;m<4;m++){
			if ($('#'+(position+plateau.nbColones*m)).hasClass('empty') || $('#'+(position+plateau.nbColones*m)).hasClass('weapon')) {
				$('#'+(position+plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}			
		}
	// Coin bas gauche
	} else if ( $('#'+position).hasClass('col1') & $('#'+position).is('#row'+plateau.nbLignes) ) {
		for (var m=1;m<4;m++){
			if ($('#'+(position+m)).hasClass('empty') || $('#'+(position+m)).hasClass('weapon')) {
				$('#'+(position+m)).addClass('movementPossible');
			} else {break;}
		}	
		for (var m=1;m<4;m++){
			if ($('#'+(position-plateau.nbColones*m)).hasClass('empty') || $('#'+(position-plateau.nbColones*m)).hasClass('weapon')) {
				$('#'+(position-plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}	
		}

	// Coin bas droite
	} else if ( $('#'+position).hasClass('col'+plateau.nbColones) & $('#'+position).is('#row'+plateau.nbLignes) ) {
		for (var m=1;m<4;m++){
			if ($('#'+(position-m)).hasClass('empty') || $('#'+(position-m)).hasClass('weapon')) {
				$('#'+(position-m)).addClass('movementPossible');
			} else {break;}
		}

		for (var m=1;m<4;m++){
			if ($('#'+(position-plateau.nbColones*m)).hasClass('empty') || $('#'+(position-plateau.nbColones*m)).hasClass('weapon')) {
				$('#'+(position-plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}	
		}

	// Colone de gauche
	} else if ( $('#'+position).hasClass('col1') ){

		for (var m=1;m<4;m++){
			if ($('#'+(position+m)).hasClass('empty') || $('#'+(position+m)).hasClass('weapon')) {
				$('#'+(position+m)).addClass('movementPossible');
			} else {break;}
		}
		for (var m=1;m<4;m++){
			if ($('#'+(position-plateau.nbColones*m)).hasClass('empty') || $('#'+(position-plateau.nbColones*m)).hasClass('weapon')) {
				$('#'+(position-plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}	
		}
		for (var m=1;m<4;m++){
			if ($('#'+(position+plateau.nbColones*m)).hasClass('empty') || $('#'+(position+plateau.nbColones*m)).hasClass('weapon')) {
				$('#'+(position+plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}		
		}

	// Colone de droite
	} else if ( $('#'+position).hasClass('col'+plateau.nbColones) ) {
		for (var m=1;m<4;m++){
			if ($('#'+(position-m)).hasClass('empty') || $('#'+(position-m)).hasClass('weapon')) {
				$('#'+(position-m)).addClass('movementPossible');
			} else {break;}
		}
		for (var m=1;m<4;m++){
			if ($('#'+(position-plateau.nbColones*m)).hasClass('empty') || $('#'+(position-plateau.nbColones*m)).hasClass('weapon')) {
				$('#'+(position-plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}	
		}
		for (var m=1;m<4;m++){
			if ($('#'+(position+plateau.nbColones*m)).hasClass('empty') || $('#'+(position+plateau.nbColones*m)).hasClass('weapon')) {
				$('#'+(position+plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}		
		}

	// Ligne du haut
	} else if ( $('#'+position).is('row1') ) {
		for (var m=1;m<4;m++){
			if (((position+m)%plateau.nbLignes===0) & ($('#'+(position+m)).hasClass('empty') || $('#'+(position+m)).hasClass('weapon'))) {
				$('#'+(position+m)).addClass('movementPossible');
				break;
			} else if ($('#'+(position+m)).hasClass('empty') || $('#'+(position+m)).hasClass('weapon')) {
				$('#'+(position+m)).addClass('movementPossible');
			} else {break;}
		}
		for (var m=1;m<4;m++){
			if ($('#'+(position-m)).hasClass('empty') || $('#'+(position-m)).hasClass('weapon')) {
				$('#'+(position-m)).addClass('movementPossible');
			} else {break;}
		}
		for (var m=1;m<4;m++){
			if ($('#'+(position+plateau.nbColones*m)).hasClass('empty') || $('#'+(position+plateau.nbColones*m)).hasClass('weapon')) {
				$('#'+(position+plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}		
		}

	// Ligne du bas			
	} else if ( $('#'+position).is('row'+plateau.nbLignes) ) {
		for (var m=1;m<4;m++){
			if ( position= ($('#'+(position+m)).hasClass('empty') || $('#'+(position+m)).hasClass('weapon'))){

			} else if ($('#'+(position+m)).hasClass('empty') || $('#'+(position+m)).hasClass('weapon')) {
				$('#'+(position+m)).addClass('movementPossible');
			} else {break;}
		}
		for (var m=1;m<4;m++){
			if (((position-m)%plateau.nbLignes===1) & ($('#'+(position-m)).hasClass('empty') || $('#'+(position-m)).hasClass('weapon'))) {
				$('#'+(position-m)).addClass('movementPossible');
				break;
			}else if ($('#'+(position-m)).hasClass('empty') || $('#'+(position-m)).hasClass('weapon')) {
				$('#'+(position-m)).addClass('movementPossible');
			} else {break;}
		}
		for (var m=1;m<4;m++){
			if ($('#'+(position-plateau.nbColones*m)).hasClass('empty') || $('#'+(position-plateau.nbColones*m)).hasClass('weapon')) {
				$('#'+(position-plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}	
		}	

	} else {
		for (var m=1;m<4;m++){
			if (((position+m)%plateau.nbLignes===0) & ($('#'+(position+m)).hasClass('empty') || $('#'+(position+m)).hasClass('weapon'))) {
				$('#'+(position+m)).addClass('movementPossible');
				break;
			} else if ($('#'+(position+m)).hasClass('empty') || $('#'+(position+m)).hasClass('weapon')) {
				$('#'+(position+m)).addClass('movementPossible');
			} else {break;}
		}
		for (var m=1;m<4;m++){
			if (((position-m)%plateau.nbLignes===1) & ($('#'+(position-m)).hasClass('empty') || $('#'+(position-m)).hasClass('weapon'))) {
				$('#'+(position-m)).addClass('movementPossible');
				break;
			}else if ($('#'+(position-m)).hasClass('empty') || $('#'+(position-m)).hasClass('weapon')) {
				$('#'+(position-m)).addClass('movementPossible');
			} else {break;}
		}
		for (var m=1;m<4;m++){
			if ($('#'+(position+plateau.nbColones*m)).hasClass('empty') || $('#'+(position+plateau.nbColones*m)).hasClass('weapon')) {
				$('#'+(position+plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}	
		}
		for (var m=1;m<4;m++){				
			if ($('#'+(position-plateau.nbColones*m)).hasClass('empty') || $('#'+(position-plateau.nbColones*m)).hasClass('weapon')) {
				$('#'+(position-plateau.nbColones*m)).addClass('movementPossible');
			} else {break;}		
		}
	}
}

