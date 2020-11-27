

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

	jQuery.segInMin = function(seconds){
		var hour = Math.floor(seconds / 3600);
	  	hour = (hour < 10)? '0' + hour : hour;
	  	var minute = Math.floor((seconds / 60) % 60);
	  	minute = (minute < 10)? '0' + minute : minute;
	  	var second = seconds % 60;
	  	second = (second < 10)? '0' + second : second;
		
	  	return hour + ':' + minute + ':' + second.toFixed(0);

	}



	var timevideo = video.duration;
	
	// $("#duracion").text(timevideo);




	$("#playPause, .video").click(function(){
		$.togglePlayPause();
	});


	video.addEventListener('timeupdate', function(){
		juice.style.background = "red";


		var juicePos = video.currentTime / video.duration;
		juice.style.width = juicePos * 100 + "%";

		var time = $.segInMin(video.duration);

		$("#ahora").text(video.currentTime.toFixed(0));
		$("#duracion").text(time);
	
		if (video.ended) {
			icon.className = 'fa fa-play';
		}
	});

});