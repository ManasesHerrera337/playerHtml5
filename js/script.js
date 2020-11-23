

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

	$("#playPause").click(function(){
		


		if (video.paused) {
			btn.className = 'pause';
			video.play();
		}else{
			btn.className = "play";
			video.pause();
		}
	});

	video.addEventListener('timeupdate', function(){
		var juicePos = video.currentTime / video.duration;
		juice.style.width = juicePos * 100 + "%";
	
		if (video.ended) {
			btn.className = "play";
		}
	});

});