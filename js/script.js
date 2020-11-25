

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
	var icon = document.getElementById('icon');

	var timevideo = video.duration;

	$("#duracion").text(timevideo.toFixed(0));

	

	jQuery.togglePlayPause = function() { 
	  	if (video.paused) {
			btn.className = 'pause';
			icon.className = 'fa fa-pause';
			video.play();
		}else{
			btn.className = "play";
			icon.className = 'fa fa-play';
			video.pause();
		}
	};

	$("#playPause, .video").click(function(){
		$.togglePlayPause();
	});


	video.addEventListener('timeupdate', function(){
		juice.style.background = "red";


		var juicePos = video.currentTime / video.duration;
		juice.style.width = juicePos * 100 + "%";

		$("#ahora").text(video.currentTime.toFixed(0));
	
		if (video.ended) {
			icon.className = 'fa fa-play';
		}
	});

});