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
			var message = $('#tweetText').val();
			var type = Session.get('commentMode');

			if(type){
				var twiitId = Session.get('idCurrentTwiit');
				console.log(twiitId);
				var numComment = UserUtils.findNumComment(twiitId);
				numComment++;
			}

			$('#tweetText').val("");
			Session.set('numChars', 0);

			var tweet = new Object();
			tweet.message = message;
			tweet.type = type;

			if(twiitId != null){
				tweet.twiitId = twiitId;
				tweet.numComment = numComment;
				tweet.typeOfNotif = "comment";
			} else {
				tweet.typeOfNotif = "twiit";
			}

			Meteor.call('insertTweet', tweet);
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