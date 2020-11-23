

// function togglePlayPause(){
// 	if (video.paused) {
// 		btn.className = 'pause';
// 		video.play;
// 	}else{
// 		btn.className = "play";
// 		video.paused;
// 	}
// }

// btn.onclick = function (){
// 	alert("play");
// }



$(document).ready(function(){
	var video = document.querySelector('.video');
	var juice = document.querySelector('.color-juice');
	var btn = document.getElementById('playPause');

	// var video = $(".video");
	// var juice = $(".color-juice");
	// var btn = $("#play-pause");

	$("#playPause, .c-video").click(function(){
		


		if (video.paused) {
			btn.className = 'pause';
			video.play();
		}else{
			btn.className = "play";
			video.pause();
		}
	});


});