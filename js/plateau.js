// Définition de l'objet plateau

var plateau = {

	// Fonction init qui avec le nombres de lignes et de colones donnés lance la création du plateau de jeu en appellant les autres fonctions de l'objet
	init: function(nbLignes, nbColones){
		this.nbLignes = nbLignes;
		this.nbColones = nbColones;
		this.nbCases = nbLignes*nbColones;
		this.nbBlocked = Math.floor((this.nbCases/100)*(Math.floor(Math.random()*10)+5));
		this.generationPlateauVide();
		this.generationBlocked();
		//this.generationWeapons();
		this.generationElement('weapon', 3)
		this.generationPlayer();
		},

	// Fonction qui génère la création d'un plateau vide en fonction du nombres de lignes et de colonnes données
	generationPlateauVide: function() {

		for (var i = 1; i <= this.nbLignes; i++) {
			
			// Pour chaques lignes on créait une division avec une class row et une id row+i dans notre div#boardGame
			$('<div/>').addClass('row').attr('id', 'row'+i).appendTo($("#boardGame"));

				// Dans chaques lignes pour chaques colonnes on créait une div avec les classes si dessou et une id compris entre 1 et le nbLignes*nbColonnes qu'on appendTo la division #row+i
				for (var j = 1; j <= this.nbColones; j++) {
					$('<div/>').addClass('col-xs-1 colBoardGame empty col'+j).attr('id', this.nbColones*(i-1)+j).appendTo($('#row'+i));
				}
		}
	},

	// Fonction qui génère un nombre aléatoire de case 'blocked'
	generationBlocked: function() {
		for (var j = 0; j < this.nbBlocked; j++) {
		
		//On définit un nombre compris entre 1 et 144, si la case avec cet id a déjà la classe 'blocked' on continu
		var caseBlocked = Math.floor(Math.random()*this.nbCases)+1;
		while ($('#'+caseBlocked).hasClass('blocked')){
			var caseBlocked = Math.floor(Math.random()*this.nbCases)+1;
		}

		// On enlève la classe empty et rajoute la classe blocked à cet case
		$('#'+caseBlocked).removeClass('empty').addClass('blocked');
		}	
	},

	generationElement: function(element, nombre){
		for (var k = 1; k <= nombre; k++){
			var caseElement = Math.floor(Math.random()*this.nbCases)+1;
			this.checkCollision(caseElement);

			$('#'+caseElement).removeClass('empty').addClass(element);
			var elementk = eval(element+k);
			$('<img src ="'+elementk.url+'">').attr('id',element+k).addClass(element+'Png').appendTo($('#'+caseElement))


		}
	},

	checkCollision: function(caseElement){

		while( (!$('#'+caseElement-this.nbColones).hasClass('empty') || (caseElement-this.nbColones)>=1) & 
				(!$('#'+caseElement+this.nbColones).hasClass('empty') || (caseElement+this.nbColones)<=this.nbCases) &
				!$('#'+caseElement-1).hasClass('empty') & !$('#'+caseElement-1).hasClass('empty') & 
				!$('#'+caseElement).hasClass('empty')){
				caseElement = Math.floor(Math.random()*this.nbCases)+1;
			}
	},

	// Fonction qui génère les 3 autres armes et les place aléatoirement sur des cases empty
	generationWeapons: function() {
		for (var l = 1; l <= 3; l++) {

		// On définit un chiffre entre 1 et 144 et tant que la case à l'id correspondant n'est pas empty on continue
		var caseWeapon = Math.floor(Math.random()*this.nbCases+1);
		while ((!$('#'+caseWeapon).hasClass('empty'))) {
			var caseWeapon = Math.floor(Math.random()*this.nbCases+1);
		}

		// On ajoute une classe weapon après avoir retirer la classe empty et on rajoute l'image de l'arme correspondante
		$('#'+caseWeapon).removeClass('empty').addClass('weapon');
		var weaponl = eval('weapon'+l);
		$('<img src ="'+weaponl.url+'">').attr('id','weapon'+l).addClass('weaponPng').appendTo($('#'+caseWeapon));
		}
	},

	// Fonction qui places nos deux joueurs sur deux cases empty et qui ne se touchent pas
	generationPlayer: function() {

		// On a une variable qui donne un emplacement aléatoire à notre player1 et on la recalcule tant que ce n'est pas une case vide
		var casePlayer1 = Math.floor(Math.random()*this.nbCases+1);
		while (!$('#'+casePlayer1).hasClass('empty')) {
			var casePlayer1 = Math.floor(Math.random()*this.nbCases+1);
		}

		// Placement de l'image de notre player1 dans la case
		$('#'+casePlayer1).removeClass('empty').addClass('player');
		$('<img src ="'+player1.url+'">').attr('id','player1').addClass('playerPng').appendTo($('#'+casePlayer1))
 
		// On définit une variable compris entre 1 et 144 pour placer le joueur2
		var casePlayer2 = Math.floor(Math.random()*this.nbCases+1);

		// Boucle de vérification de non contact avec le joueur 1 et que ça soit bien une case empty

		// Si c'est le coin en haut à gauche
		if ( $('#'+casePlayer1).hasClass('col1') & $('#'+casePlayer1).is('#row1') ) {

			while ( (casePlayer2 === casePlayer1) || (casePlayer2 === casePlayer1+1) ||
					(casePlayer2 === casePlayer1+this.nbColones) || (!$('#'+casePlayer2).hasClass('empty')) ) {

					var casePlayer2 = Math.floor(Math.random()*this.nbCases+1);
			}

		//Si c'est le coin en haut à droite
		} else if ( $('#'+casePlayer1).hasClass('col'+this.nbColones) & $('#'+casePlayer1).is('#row1') ) {
			
			while ( (casePlayer2 === casePlayer1) || (casePlayer2 === casePlayer1-1) ||
					(casePlayer2 === casePlayer1+this.nbColones) || (!$('#'+casePlayer2).hasClass('empty')) ) {

					var casePlayer2 = Math.floor(Math.random()*this.nbCases+1);
			}

		// Si c'est le coin en bas à gauche
		} else if ( $('#'+casePlayer1).hasClass('col1') & $('#'+casePlayer1).is('#row'+this.nbLignes) ){

			while ( (casePlayer2 === casePlayer1) || (casePlayer2 === casePlayer1+1) ||
					(casePlayer2 === casePlayer1-this.nbColones) || (!$('#'+casePlayer2).hasClass('empty')) ) {

					var casePlayer2 = Math.floor(Math.random()*this.nbCases+1);
			}

		//Si c'est le coin en bas à droite
		} else if ( $('#'+casePlayer1).hasClass('col'+this.nbColones) & $('#'+casePlayer1).is('#row'+this.nbLignes) ) {

			while ( (casePlayer2 === casePlayer1) || (casePlayer2 === casePlayer1-1) ||
					(casePlayer2 === casePlayer1-this.nbColones) || (!$('#'+casePlayer2).hasClass('empty')) ) {

					var casePlayer2 = Math.floor(Math.random()*this.nbCases+1);
			}

		// Si c'est sur la colonne à gauche
		} else if ( $('#'+casePlayer1).hasClass('col1') ){

			while ( (casePlayer2 === casePlayer1) || (casePlayer2 === casePlayer1+1) ||
					(casePlayer2 === casePlayer1-this.nbColones) || (casePlayer2 === casePlayer1+this.nbColones) ||
					(!$('#'+casePlayer2).hasClass('empty')) ) {

					var casePlayer2 = Math.floor(Math.random()*this.nbCases+1);
			}

		// Si c'est sur la colonne de droite
		} else if ( $('#'+casePlayer1).hasClass('col'+this.nbColones) ){

			while ( (casePlayer2 === casePlayer1) || (casePlayer2 === casePlayer1-1) ||
					(casePlayer2 === casePlayer1-this.nbColones) || (casePlayer2 === casePlayer1+this.nbColones) ||
					(!$('#'+casePlayer2).hasClass('empty')) ) {
					var casePlayer2 = Math.floor(Math.random()*this.nbCases+1);
			}

		// Si c'est la première ligne
		} else if ( $('#'+casePlayer1).is('#row1') ){

			while ( (casePlayer2 === casePlayer1) || (casePlayer2 === casePlayer1-1) ||
					(casePlayer2 === casePlayer1+1) || (casePlayer2 === casePlayer1+this.nbColones) ||
					(!$('#'+casePlayer2).hasClass('empty')) ) {

					var casePlayer2 = Math.floor(Math.random()*this.nbCases+1);
			}

		// Si c'est la dernière ligne
		} else if ( $('#'+casePlayer1).is('#row'+this.nbLignes) ){

			while ( (casePlayer2 === casePlayer1) || (casePlayer2 === casePlayer1-1) ||
					(casePlayer2 === casePlayer1+1) || (casePlayer2 === casePlayer1-this.nbColones) ||
					(!$('#'+casePlayer2).hasClass('empty')) ) {

					var casePlayer2 = Math.floor(Math.random()*this.nbCases+1);
			}

		// Si on est à l'intérieur du cadre
		} else {	

			while ((casePlayer2 === (casePlayer1+1)) || (casePlayer2 === (casePlayer1-1)) ||
			(casePlayer2 === (casePlayer1+this.nbColones)) || (casePlayer2 === (casePlayer1-this.nbColones)) ||
			(casePlayer2 === casePlayer1) || (!$('#'+casePlayer2).hasClass('empty'))) {
				
					var casePlayer2 = Math.floor(Math.random()*this.nbCases+1);
			}
		}

		// On ajoute l'image du joueur deux sur #casePlayer2
		$('#'+casePlayer2).removeClass('empty').addClass('player');
		$('<img src ="'+player2.url+'">').attr('id','player2').addClass('playerPng').appendTo($('#'+casePlayer2));
	}

}