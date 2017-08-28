var mouvements = {	

	// Fonction du tour de jeu d'un joueur ou du combat
	tourDeJeu: function(typeDeTour, playerInitiative) {


		// Si l'argument est 'combat'
		 if (typeDeTour === 'combat'){

		 	music.startFight();
			// On démare alors le combat avec la fonction startFight
			combat.startFight(function(){
				setTimeout(function(){combat.createCombatBox(function(){combat.tourDeCombat(playerInitiative)})}, 3000)
			});
			
		// Si l'argument n'est pas 'combat'
		}else {
			// On lance la fonction de mouvement d'un tour de jeu de joueur pour le player2
			this.tourDeJeuPlayer(typeDeTour);

		}
	},

	tourDeJeuPlayer(player){
		// La variable position est l'id de la case ou notre joueur se trouve
		var position =  eval($('#'+player).parent('.player').attr('id'));

		//On fait appele à la fonction verification pour voir où le joueur peut se déplacer
		this.verification(position);

		// Ensuite cette fonction permet au joueur de se déplacer là où l'on clique et gère le ramassage d'arme
		this.movementTourDeJeu(position, player, function(){

			music.startGame();
			// Le callback de la fonction définit la nouvelle position du joueur et définit le tour suivant avec checkCollisionCombat.
			var newPosition = eval($('#'+player).parent('.player').attr('id'));
			// On fait appel à la fonction checkCollisionCombat pour savoir ce que l'on fait par la suite
			var nextMove = mouvements.checkCollisionCombat(newPosition, player);
			// On prend les deux valeurs retournés par votre chekCollisionCombat et on lance le tourDeJeu suivant en fonction
			var nextMoveBis = nextMove[0];
			var playerInitiative = eval(nextMove[1]);
			mouvements.tourDeJeu(nextMoveBis, playerInitiative);
		});
	},

	// Fonction pour enlever et unbind les cases 'movementPossible'
	removeMovementPossible: function() {
		// Unbind au click les cases avec une classe 'movementPossible'
		$('.movementPossible').unbind('click');
		// On enlève ensuite la classe 'movementPossible' aux div qui la possèdent
		$('div').removeClass('movementPossible');
	},

	// Fonction pour un tour de déplacement d'un joueur
	movementTourDeJeu: function(position, player, callback){
		// Quand on click sur une case ayant une class 'movementPossible' on lance un event
		$('.movementPossible').on('click', function(event){
			// On définit une variable qui correspond à l'object player
			var playerEnJeu = eval(player);

			// Si la case cliqué à une classe 'weapon'
			if ($(this).hasClass('weapon')){
				// On définit l'objet de l'arme qui est sur la case et qui va être ramassé
				var newWeapon = eval($(this).children().attr('id'));
				// On définit l'objet de l'arme que le joueur porte avant le déplacement
				var oldWeapon = playerEnJeu.weapon;

				// On change les attribut de l'img sur la case en y mettant celle de l'arme que le joueur portait
				$(this).children('.weaponPng').attr('src', oldWeapon.url).attr('id', oldWeapon.id);
				
				// On définit l'arme que le joueur porte avec la nouvelle arme
				playerEnJeu.weapon = newWeapon;
				
				// Et on met à jour l'image de l'arme porté par le joueur dans le bandeau d'information
				$('#'+player+'Weapon').attr('src', newWeapon.url);
			} 

			// Ensuite on gère les classes de la case que le joueur quitte
			// Si elle a une classe 'weapon' on enlève juste la classe 'player'
			if ($('#'+position).hasClass('weapon')){
				$('#'+position).removeClass('player');
			// Sinon on enlève la classe 'player' et on ajoute la classe 'empty'
			} else {
				$('#'+position).removeClass('player').addClass('empty');
			}

			// On déplace le joueur en faisant un transfert de l'img playerPng vvers la nouvelle case
			$(this).addClass('player').removeClass('empty').append($('#'+position).children('.playerPng'));
			// On fait appelle à la fonction removeMovementPossible pour enlève les classes movementPossible et faire unbid sur les click
			mouvements.removeMovementPossible();
			// On apelle la fonction callback() après avoir effectuer le reste de la fonction
			callback();
			}
		)

	},


	checkCollisionCombat: function(position, player){
		var positionCheck = position;
		// Si il y a un jouer à droite return 'combat' et player qui aura l'iniative pour le combat
		if ( ( ((positionCheck+1)%plateau.nbColonnes!=1) && (positionCheck+1)<=plateau.nbCases ) && $('#'+(positionCheck+1)).hasClass('player') ){
			return ['combat', player];
		// Si il y a un joueur à gauche return 'combat' et player qui aura l'iniative pour le combat
		} else if ( ( ((positionCheck-1)%plateau.nbColonnes!=0) && (positionCheck-1)>=1 ) && $('#'+(positionCheck-1)).hasClass('player') ){
			return ['combat', player];
		// Si il y a un joueur en haut return 'combat' et player qui aura l'iniative pour le combat
		} else if ((positionCheck-plateau.nbColonnes)>=1 && $('#'+(positionCheck-plateau.nbColonnes)).hasClass('player') ){
			return ['combat', player];
		// Si il y a un joueur en bas return 'combat' et player qui aura l'iniative pour le combat
		} else if ((positionCheck+plateau.nbColonnes)<=plateau.nbCases && $('#'+(positionCheck+plateau.nbColonnes)).hasClass('player')){
			return ['combat', player];
		// Si c'est le joueur 2 qui jouait return "player1"
		} else if (player==='player2'){
			return ['player1', ""];
		// Si c'est le joueur 1 qui jouait return 'player2'
		} else {
			return ['player2', ""];
		}

	},

	verification: function(position) {
		// Vérification droite
		for (var m=1;m<=3;m++){
			// Si on est sur la dernière colonne on ne vérifie pas à droite donc break
			if(position%plateau.nbColonnes===0){
				break;
			// Si la case de droite est sur la dernière colonne et qu'il n'est ni 'player' ni 'blocked' on ajoute un 'movementPossible' et on break
			}else if (((position+m)%plateau.nbColonnes===0) && (!$('#'+(position+m)).hasClass('player') 
				&& !$('#'+(position+m)).hasClass('blocked'))) {
				$('#'+(position+m)).addClass('movementPossible');
				break;
			// Si la case de droite a une classe 'weapon' et pas de classe 'player' on ajoute 'movementPossible' et on break 
			} else if ($('#'+(position+m)).hasClass('weapon') && (!$('#'+(position+m)).hasClass('player'))){
				$('#'+(position+m)).addClass('movementPossible');
				break;
			// Si la case de droite est 'empty' et que les cases en haut et en bas ont une classe 'player' on ajout un 'movementPossible' et on break
			} else if ( $('#'+(position+m)).hasClass('empty') && ($('#'+(position+m+plateau.nbColonnes)).hasClass('player') 
				|| $('#'+(position+m-plateau.nbColonnes)).hasClass('player'))){
				$('#'+(position+m)).addClass('movementPossible');
				break;			
			// Si la case de droite est 'empty' on ajout 'movementPossible'		
			} else if ($('#'+(position+m)).hasClass('empty')) {
				$('#'+(position+m)).addClass('movementPossible');
			} else {break;}
		}
		// Verification gauche
		for (var m=1;m<=3;m++){
			// Si on est sur la première colonne on ne vérifie pas à gauche donc break
			if(position%plateau.nbColonnes===1){
				break;
			// Si la case de gauche est sur la dernière colonne et qu'il n'y a ni 'blocked' ni 'player' on ajoute un 'movementPossible' et on break
			}else if (((position-m)%plateau.nbColonnes===1) && (!$('#'+(position-m)).hasClass('blocked') 
				&& !$('#'+(position-m)).hasClass('player'))) {
				$('#'+(position-m)).addClass('movementPossible');
				break;
			// Si la case de gauche a une classe 'weapon' et pas de classe 'player' on ajoute un 'movementPossible' et on break
			} else if ($('#'+(position-m)).hasClass('weapon') && !$('#'+(position-m)).hasClass('player')){
				$('#'+(position-m)).addClass('movementPossible');
				break;
			// Si la case de gauche est 'empty' et qu'elle est en contact en haut ou en bas avec une casse class 'player' on aoute un 'movementPossible' et on break
			}else if ( $('#'+(position-m)).hasClass('empty') && ($('#'+(position-m+plateau.nbColonnes)).hasClass('player') 
				|| $('#'+(position-m-plateau.nbColonnes)).hasClass('player'))){
				$('#'+(position-m)).addClass('movementPossible');
				break;	
			// Si la case de gauche est 'empty'
			}else if ($('#'+(position-m)).hasClass('empty')) {
				$('#'+(position-m)).addClass('movementPossible');
			} else {break;}
		}
		// Verification haut
		for (var m=1;m<=3;m++){
			// Si la case vérifiée est en dehors du tableau on break
			if((position-plateau.nbColonnes*m)<1){
				break;
			/*Si la case du haut est 'empty' et qu'il y a un joueur à gauche ou à droite (les modulos pour vérifier si on est sur la première ou dernière colonnes donc 
			ignorer un des deux côtés) on met un 'movementPossible' et on break*/
			}else if ($('#'+(position-plateau.nbColonnes*m)).hasClass('empty') && 
				(($('#'+(position-plateau.nbColonnes*m-1)).hasClass('player') && position%plateau.nbColonnes!=1)
				|| ($('#'+(position-plateau.nbColonnes*m+1)).hasClass('player') && position%plateau.nbColonnes!=0))){
				$('#'+(position-plateau.nbColonnes*m)).addClass('movementPossible');
				break;
			// Si la case du haut a une classe 'weapon' et pas de classe 'player' on met un 'movementPossible' et on break
			}else if ($('#'+(position-plateau.nbColonnes*m)).hasClass('weapon') && !$('#'+(position-plateau.nbColonnes*m)).hasClass('player') ){
				$('#'+(position-plateau.nbColonnes*m)).addClass('movementPossible');
				break;
			// Si la case du haut est 'empty' on ajoute un 'movementPossible'
			}else if ($('#'+(position-plateau.nbColonnes*m)).hasClass('empty')) {
				$('#'+(position-plateau.nbColonnes*m)).addClass('movementPossible');
			} else {break;}	
		}
		// Verification bas
		for (var m=1; m<4; m++){
			// Si la case vérifiée est en dehors du tableau on break
			if((position+plateau.nbColonnes*m)>plateau.nbCases){
				break;
			/*Si la case du bas est 'empty' et qu'il y a un joueur à gauche ou à droite (les modulos pour vérifier si on est sur la première ou dernière colonnes donc 
			ignorer un des deux côtés) on met un 'movementPossible' et on break*/
			}else if ($('#'+(position+plateau.nbColonnes*m)).hasClass('empty') && 
				( ($('#'+(position+plateau.nbColonnes*m+1)).hasClass('player') && position%plateau.nbColonnes!=0 )|| 
				($('#'+(position+plateau.nbColonnes*m-1)).hasClass('player') && position%plateau.nbColonnes!=1))){
				$('#'+(position+plateau.nbColonnes*m)).addClass('movementPossible');
				break;
			// Si la case du bas a une classe 'weapon' et pas de classe 'player' on met un 'movementPossible' et on break 
			}else if ($('#'+(position+plateau.nbColonnes*m)).hasClass('weapon') && !$('#'+(position+plateau.nbColonnes*m)).hasClass('player') ){
				$('#'+(position+plateau.nbColonnes*m)).addClass('movementPossible');
				break;
			// Si la case du bas est 'empty' on ajoute un 'movementPossible'
			}else if ($('#'+(position+plateau.nbColonnes*m)).hasClass('empty')) {
				$('#'+(position+plateau.nbColonnes*m)).addClass('movementPossible');
			} else {break;}
		}
	}
}

