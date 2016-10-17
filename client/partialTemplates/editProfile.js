Template.editProfile.onCreated(function(){
	userAux = Session.get('datauser');
	console.log(userAux);
});

Template.editProfile.events({  
	'click #saveChanges': function(){
		newData = new Object();
		newData.description = document.getElementById("userDescription").value;
		newData.userId = userAux._id;

		Meteor.call('updUserData', newData);
  		window.location = "/Profile/" + userAux.userNameProfile;
  	},
  	'click #imgCurrentUser': function(){
  		
  	}
});

Template.editProfile.helpers({
	'dataUserFound': function(){
		return userAux;
	},
	'tweets': function(username){
	  	Meteor.call('tweetsPublish', username, function(err, res) {
	    	Session.set('numTweets',res);
	  	});
	  	return Session.get('numTweets');
	},
  	'following': function(){
		Meteor.call('usersFollowings', function(err, res) {
      		Session.set('numFollowings',res);
    	});
    	return Session.get('numFollowings');
  	},
  	'followers': function(){
	    Meteor.call('usersFollowers', function(err, res) {
	      	Session.set('numFollowers',res);
	    });
    	return Session.get('numFollowers');
  	},
});