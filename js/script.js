$(document).ready(function(){
	var video = document.querySelector('.video');
	var juice = document.querySelector('.color-juice');
	var btn = document.getElementById('playPause');
	var icon = document.getElementById('icon');

	var mute = document.getElementById("mute");
	var barra = document.getElementById("volumen");


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
	  	return hour + ':' + minute + ':' + second ; 
	}

	jQuery.mute = function(volVid){
		if ($('#mute').prop('checked')) {
			oldvolume = volVid;		
			video.volume = 0;
			barra.value = 0;
		} else {
			video.volume = volVid;
			barra.value = volVid * 100;
		}
	}


	$("#ahora").text("00:00:00");
	//muestra el tiempo total del video
	$("#duracion").text( $.segInMin( video.duration.toFixed(0) ) );

	console.log(video.duration.toFixed(0));
	// alert(video.duration.toFixed(0));

	$("#playPause, .video").click(function(){
		$.togglePlayPause();
	});


	video.addEventListener('timeupdate', function(){
		juice.style.background = "red";


		var juicePos = video.currentTime / video.duration;
		juice.style.width = juicePos * 100 + "%";


		//muestra el tiempo transcurrido del video
		$("#ahora").text($.segInMin(video.currentTime.toFixed(0)));
		
		if (video.ended) {
			icon.className = 'fa fa-play';
		}
	});

	/* Controlando el volumen */
	var gvolvid = 0
	$("#volumen").val(video.volume * 100);
	

	barra.addEventListener("change",function(ev){
	  	var vol =  ev.target.value;
	  	var volVid  = vol / 100;
	  	gvolvid = volVid;
	  	$.mute(volVid);
	},true);


	$('#mute').click(function(){ 
		$.mute(gvolvid);
	});

});