<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="css/fontawesome-free-5.15.1-web/css/all.min.css">
	<link rel="stylesheet" href="css/styles.css">

</head>
<body>

	<div class="container">
		<div class="c-video">
			<video class="video"  > <!-- src="video/video2.mp4" -->

				<source src="video/video2.mp4">
			</video>
			<div class="controls">
				<div class="color-bar">
					 <div class="color-juice"> </div>
				</div>
				 <div class="buttons">
				 	<button type="button"  id="playPause">
				 		<i id="icon" class="fa fa-play"></i>
				 	</button>
				 	
				 </div> 
				 <div class="labels">
				 	<span id="ahora"></span> / <span id="duracion"></span> 
				 </div>
				 
				  <input type="checkbox"  id="mute" />
				 
				 <div class="controlVol" >
				 	<input type="range" id="volumen">
				 </div>


			</div>
		</div>
	</div>

	
	<script src="js/jquery.js"></script>
	<!-- <script src="css/fontawesome-free-5.15.1-web/js/all.min.js"></script> -->
	<script src="js/script.js"></script>
</body>
</html>			
