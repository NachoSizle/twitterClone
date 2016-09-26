//DETECTAMOS QUE SE ENCUENTRA EN EL CLIENTE EL CODIGO QUE SE VA  AEJECUTAR
if(Meteor.isClient){

	Template.tweetBox.onRendered(function(){
	  Session.set('numChars', 0);
	});

	Template.tweetBox.events({
	  	'input #tweetText':function(){
	    	Session.set('numChars', $('#tweetText').val().length);
	  	},
	  	'click button': function() {  
			var tweet = $('#tweetText').val();
			$('#tweetText').val("");
			Session.set('numChars', 0);
			Meteor.call('insertTweet', tweet);
			//Twitts.insert({message: twitt, user: Meteor.user().username});
	    	//UNA VEZ QUE INSERTAMOS EL TWEET HACE FALTA AVISAR A METEOR DE QUE HEMOS METIDO UN NUEVO TWEET
			//PARA ELLO BASTA CON FORZAR LA REACTIVIDAD
			if(UserUtils.observerProperties()){
				console.log("Se han detectado cambios");
			};
	    }
	});


	Template.tweetBox.helpers({  
	  charCount: function() {
	    return 140 - Session.get('numChars');
	  },

	  charClass: function() {
	    if (Session.get('numChars') > 140) {
	      return 'errCharCount';    // o el nombre que le disteis en el fichero css
	    } else {
	      return 'charCount';       //o el nombre que le disteis en el fichero css
	    }
	  },

	  disableButton: function() {
	    if (Session.get('numChars') <= 0 ||
	        Session.get('numChars') > 140 || 
	        !Meteor.user()) {
	      return 'disabled';
	    }
	  }
	});
}