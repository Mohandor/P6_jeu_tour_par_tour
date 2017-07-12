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

				for (var j = 1; j <= 12; j++) {
					$('<div/>').addClass('col-xs-1 colBoardGame').attr('id','case'+(this.nbLignes*(i-1)+j)).text(this.nbLignes*(i-1)+j).appendTo($('#row'+i));
				}
		}
	}
}	