Template.userProfile.onCreated(function(){
	currentUserName = this.data.name;
});

Template.userProfile.events({  
	'click #logout': function() {  
    	Meteor.logout();
    	window.location = "/";
  	},
  	'click #editProfile': function(){
  		window.location = "/editProfile/" + currentUserName;
  	}
});

Template.userProfile.helpers({
	'dataUserFound': function(){
		Meteor.call('findUserData', currentUserName, function(err, res) {
	    	Session.set('dataUser',res);
	  	});
	  	return Session.get('dataUser');
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