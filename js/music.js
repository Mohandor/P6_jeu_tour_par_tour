//Création de notre lecteur de musique
$('<audio/>').addClass('col-xs-12')./*addClass('mejs__player').*/attr({preload: 'auto', controls: "", id: "audioPlayer", src: 'music/zanarkand.mp3', loop: ""}).appendTo($('#musicBoard'));
//$('<source>').attr('src', 'music/Zanarkand.mp3').appendTo('#audioPlayer');

var audioPlayer = $('#audioPlayer')[0];
audioPlayer.volume = 0.4;

var music = {
	startGame: function(){
		if (audioPlayer.currentTime == 0){audioPlayer.play();}
	},

	startFight: function(){
		$('#audioPlayer').attr('src', 'music/Battle Theme.mp3');
		audioPlayer.play();
	},

	endFight: function(){
		$('#audioPlayer').attr('src', 'music/Victory Fanfare.mp3');
		audioPlayer.play();

	}
}





/*
<audio id="audioPlayer" class="mejs__player" style="width: 100%" preload="auto" controls>
		    <source src="music/Zanarkand.mp3" />
		</audio>*/