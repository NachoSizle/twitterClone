Meteor.methods({ 
  'findUser': function(username) {
    return Meteor.users.findOne({
      username: username
    }, {
      fields: { 'username': 1 }
    });
  },

  'followUser': function(username) {
    Relationships.insert({
      follower: Meteor.user().username,
      following: username
    });
  },

  'unfollowUser': function(username){
    Relationships.remove({
      follower: Meteor.user().username,
      following: username
    });
  },

  'recommendUsers': function() {
	if (Meteor.user()) {
	  var currentFollowings = UserUtils.findFollowings(Meteor.user().username);

    console.log("currentFollowings");
    console.log(currentFollowings);

	  var recUsers = Meteor.users.find({
	    username: {
	      $nin: currentFollowings
	    }
	  }, {
	    fields: { 'username': 1 },
	    limit: 5
	  }).fetch();

	  return recUsers;
	}
   }
});