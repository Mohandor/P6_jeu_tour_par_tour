// Définition de l'objet plateau

var plateau = {

	// Fonction init qui avec le nombres de lignes et de colones donnés lance la création du plateau de jeu en appellant les autres fonctions de l'objet
	init: function(nbLignes, nbColonnes){
		this.nbLignes = nbLignes;
		this.nbColonnes = nbColonnes;
		this.nbCases = nbLignes*nbColonnes;
		this.nbBlocked = Math.floor((this.nbCases/100)*(Math.floor(Math.random()*10)+5));
		this.generationPlateauVide();
		this.generationBlocked();
		this.generationElement('weapon', nbWeapons);
		this.generationElement('player', nbPlayers);
		},

	// Fonction qui génère la création d'un plateau vide en fonction du nombres de lignes et de colonnes données
	generationPlateauVide: function() {

		for (var i = 1; i <= this.nbLignes; i++) {
			
			// Pour chaques lignes on créait une division avec une class row et une id row+i dans notre div#boardGame
			$('<div/>').addClass('row').attr('id', 'row'+i).appendTo($("#boardGame"));

				// Dans chaques lignes pour chaques colonnes on créait une div avec les classes si dessou et une id compris entre 1 et le nbLignes*nbColonnes qu'on appendTo la division #row+i
				for (var j = 1; j <= this.nbColonnes; j++) {
					$('<div/>').addClass('col-xs-1 colBoardGame empty col'+j).attr('id', this.nbColonnes*(i-1)+j).appendTo($('#row'+i));
				}
		}
	},

	// Fonction qui génère les cases 'blocked'
	generationBlocked: function() {
		for (var j = 0; j < this.nbBlocked; j++) {
		
		//On définit un nombre compris entre 1 et 144, si la case avec cet id a déjà la classe 'blocked' on en génère un autre
		var caseBlocked = Math.floor(Math.random()*this.nbCases)+1;
		while (!$('#'+caseBlocked).hasClass('empty')){
			var caseBlocked = Math.floor(Math.random()*this.nbCases)+1;
		}

		// On enlève la classe empty et rajoute la classe blocked à cet case
		$('#'+caseBlocked).removeClass('empty').addClass('blocked');
		}	
	},

	generationElement: function(element, nombre){
		// Boucle for de 1 au nombre rentré
		for (var k = 1; k <= nombre; k++){

			// On fait une boucle qu'on lance en définissant notre var passage à false et tant que les 4 cases adjacentes ne sont pas 'empty' on continue à en prendre au hasard
			var passage = false;
			while (passage === false){
				caseChoisie = Math.floor(Math.random()*this.nbCases)+1;
				passage = plateau.checkCollision(caseChoisie);
			}

			// Une fois que notre case est passé dans la boucle while on ajoute notre element, on commence par retirer la classe empty et en ajoutant le classe element
			$('#'+caseChoisie).removeClass('empty').addClass(element);
			// On créait ensuite une image avec comme source l'url de notre elementk, l'id est notre element+k, la classe element+Png qu'on fait appendTo à notre case
			var elementk = eval(element+k);
			$('<img src ="'+elementk.url+'">').attr('id',element+k).addClass(element+'Png').appendTo($('#'+caseChoisie));


		}
	},

	checkCollision: function(caseCheck){
		// Si la case n'est pas 'empty' on fait un return false
		if (!$('#'+caseCheck).hasClass('empty')){
				return false;
			}

		// On vérifie si la case de droite est 'empty' ou qu'on est sur la dernière colonne et on continue
		if ($('#'+(caseCheck+1)).hasClass('empty') || caseCheck%plateau.nbColonnes === 0){
			// On vérifie si la case de gauche est 'empty' ou qu'on est sur la première colonne et on continue
			if ($('#'+(caseCheck-1)).hasClass('empty') || caseCheck%plateau.nbColonnes === 1){
				// On vérifie si la case du haut est 'empty' et qu'on est bien sur notre tableau et on continue
				if ($('#'+(caseCheck-plateau.nbColonnes)).hasClass('empty') && (caseCheck-plateau.nbColonnes >= 1)){
					// On vérifie si la case du bas est 'empty' et qu'on est bien sur notre tableau
					if($('#'+(caseCheck+plateau.nbColonnes)).hasClass('empty') && (caseCheck+plateau.nbColonnes <= plateau.nbCases)){
						// Si les cases adjacentes sont 'empty' on return true
						return true;
					}
				}
			}
		}
		return false;
	},
}