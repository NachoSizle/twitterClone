Meteor.methods({ 
  'tweetsPublish': function(username) {
    console.log("Usuario a buscar: " + username);
    console.log("Resultado: ");
    var resul =  UserUtils.findTweets(Meteor.user().username);
    return resul.length;
  },
  
  'usersFollowers': function(username) {
    var currentFollowers = UserUtils.findFollowers(username);
    return currentFollowers.length;
  },

  'usersFollowings': function(username) {
	  var currentFollowings = UserUtils.findFollowings(username);
    
    return currentFollowings.length;
  }
});