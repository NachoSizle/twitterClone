Meteor.methods({ 
  /*
  'tweetsPublish': function(username) {
    console.log("Usuario a buscar: " + username);
    console.log("Resultado: ");
    var resul =  UserUtils.findTweets(username);
    return resul.length;
  },
  */
  'usersFollowers': function(username) {
    var currentFollowers = UserUtils.findFollowers(username);
    return currentFollowers.length;
  },

  'usersFollowings': function(username) {
	  var currentFollowings = UserUtils.findFollowings(username);
    
    return currentFollowings.length;
  },

  'getFollowers': function(username) {
    var currentFollowers = UserUtils.findFollowers(username);
    console.log("currentFollowers");
    console.log(currentFollowers);

    return currentFollowers;
  },

  'getFollowings': function(username) {
    var currentFollowings = UserUtils.findFollowings(username);
    console.log("currentFollowings");
    console.log(currentFollowings);

    return currentFollowings;
  }

});