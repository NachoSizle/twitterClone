Template.userProfile.events({  
	'click #logout': function() {  
    	Meteor.logout();
    	window.location = "/";
  	},
});

Template.userProfile.helpers({
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