Meteor.methods({ 
  'tweetsPublish': function(username) {
    console.log("Usuario a buscar: " + username);
    console.log("Resultado: ");
    var resul =  UserUtils.findTweets(Meteor.user().username);
    return resul.length;
  },

  'usersFollowers': function() {
    var currentFollowers = UserUtils.findFollowers(Meteor.user().username);
    return currentFollowers.length;
  },

  'usersFollowings': function() {
	  var currentFollowings = UserUtils.findFollowings(Meteor.user().username);
    
    return currentFollowings.length;
  }
});