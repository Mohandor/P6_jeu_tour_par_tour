/*var plateau = {
	nbLignes : 12,
	nbColones : 12,

	generationPlateauVide: function() {

		for (var i = 1; i <= this.nbLignes; i++) {
				
			$('<div/>').addClass('row').attr('id', 'row'+i).appendTo($("#boardGame"));

				for (var j = 1; j <= this.nbColones; j++) {
					$('<div/>').addClass('col-xs-1 colBoardGame col'+j).appendTo($('#row'+i));
					console.log(12*(i-1)+j);
				}
		}
	}
}*/


var plateau = {
	nbLignes : 12,
	nbColones : 12,

	generationPlateauVide: function() {

		for (var i = 1; i <= this.nbLignes; i++) {
				
			$('<div/>').addClass('row').attr('id', 'row'+i).appendTo($("#boardGame"));

				for (var j = 1; j <= this.nbColones; j++) {
					$('<div/>').addClass('col-xs-1 colBoardGame empty').attr('id', this.nbLignes*(i-1)+j).text(this.nbLignes*(i-1)+j).appendTo($('#row'+i));
				}
		}
	}
}

// Nombre de cases dans notre plateau de jeu
var nbCases = plateau.nbLignes*plateau.nbColones;

// Pourcentage de case que l'on veut bloquer compris entre 10% et 20% 
var pourcentageBlocked = Math.floor(Math.random()*10)+11;

// Nombre de case que l'on veut bloqué
var nbBlocked = Math.floor((nbCases/100)*pourcentageBlocked);


// Fonction pour enlevé la class empty et rajouté la classe blocked au nombre de case que l'on veut bloquer
function generationBlocked() {
	for (var k = 0; k < nbBlocked; k++) {
		
		var caseBlocked = Math.floor(Math.random()*nbCases)+1;
		while ($('#'+caseBlocked).hasClass('blocked')){
			var caseBlocked = Math.floor(Math.random()*nbCases)+1;
		}

		$('#'+caseBlocked).removeClass('empty').addClass('blocked');

	}
}