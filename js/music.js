//Création de notre lecteur de musique
$('<audio/>').addClass('col-xs-12')./*addClass('mejs__player').*/attr({preload: 'auto', controls: "", id: "audioPlayer", src: 'music/zanarkand.mp3', loop: ""}).appendTo($('#musicBoard'));
//$('<source>').attr('src', 'music/Zanarkand.mp3').appendTo('#audioPlayer');

var audioPlayer = $('#audioPlayer')[0]; // On définit notre var audioPlayer comme le premier lecteur de l'element #audioPlayer
audioPlayer.volume = 0.4; // On change le volume à 40% pour pas casser les oreilles de nos utilisateurs


// Function qui permet de faire play et pause avec la barre espacedu clavier comme dans la majorité des lecteurs audio/video
$(document).keydown(function(e) {
	// Si on appui sur la touche espace (32 en ASCII)
	if (e.keyCode == '32') {

    	if (audioPlayer.paused){	// SI le player est en pause
          	audioPlayer.play();		// On fait play
        } else {
        	audioPlayer.pause();	// Sinon on fait pause
        }
	}
});

// Création d'un object music 
var music = {
	// Fonction qui permet de lancer la musique au début du jeu si il n'a pas déjà été lancer
	startGame: function(){
		if (audioPlayer.currentTime == 0){audioPlayer.play();}
	},

	// Fonction qui change et lance la musique au début du combat
	startFight: function(){
		$('#audioPlayer').attr('src', 'music/Battle Theme.mp3');
		audioPlayer.play();
	},

	// Fonction qui change et lance la musique à la fin du combat
	endFight: function(){
		$('#audioPlayer').attr('src', 'music/Victory Fanfare.mp3');
		audioPlayer.play();
	}
}





/*
<audio id="audioPlayer" class="mejs__player" style="width: 100%" preload="auto" controls>
		    <source src="music/Zanarkand.mp3" />
		</audio>*/