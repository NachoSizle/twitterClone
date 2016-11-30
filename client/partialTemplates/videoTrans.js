Template.videoTrans.onCreated(function(){
	
});

Template.videoTrans.events({  
	
});

Template.videoTrans.helpers({
	'chargeVideo' : function(){
		console.log("Loading");
		navigator.getMedia = (  navigator.getUserMedia ||
	                   			navigator.webkitGetUserMedia ||
	                   			navigator.mozGetUserMedia ||
	                   			navigator.msGetUserMedia);

		window.URL = window.URL || 
             		 window.webkitURL || 
             		 window.mozURL || 
             		 window.msURL;

		console.log(window.URL);

		navigator.getMedia (
		   // Restricciones (contraints) *Requerido
		   {
		      	video: true
		   },

		   // Funcion de finalizacion (Succes-Callback) *Requerido
		   function(localMediaStream) {
		      	var video = document.querySelector('video');
		      	video.src = window.URL.createObjectURL(localMediaStream);

		        /*
		      	var playPromise = video.play();
		      	
		      	if (playPromise !== undefined) {
				  playPromise.then(function() {
				    // Automatic playback started!
				  }).catch(function(error) {
				  	console.log(error);
				    // Automatic playback failed.
				    // Show a UI element to let the user manually start playback.
				  });
				};
				*/
		      	console.log(navigator);
		      	/*
		      	video.onloadedmetadata = function(e) {
		         // Haz algo con el video aquí.
		      	};
		      	*/
		   },

		   // errorCallback *Opcional
		   function(err) {
	   			console.log("Ocurrió el siguiente error: ");
	   			console.log(err);
		   }

		);
	},
});