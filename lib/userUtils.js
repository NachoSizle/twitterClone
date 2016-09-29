UserUtils = function() {};    //no var in front

UserUtils.findTweets = function(username) { 
  var currentTweets = Twitts.find({ user: username }).fetch().map(function(data) {
    								return data.following;
  						  });
  console.log("Tweets: ");
  console.log(currentTweets);

  return currentTweets;
};	

UserUtils.findFollowings = function(username) { 
  var currentFollowings = Relationships.find({ follower: username }).fetch().map(function(data) {
    								return data.following;
  						  });
  //console.log("Siguiendo: ");
  //console.log(currentFollowings);

  return currentFollowings;
};	

UserUtils.findFollowers = function(username) { 
  var currentFollowers = Relationships.find({ following: username }).fetch().map(function(data) {
    								return data.following;
  						  });
  //console.log("Seguidores: ");
  //console.log(currentFollowers);

  return currentFollowers;
};	

//FORZAMOS LA REACTIVIDAD
UserUtils.observerProperties = function(){
	Twitts.find().observeChanges({
    changed: function(){
      console.log("Se han detectado cambios!");
    },
    added: function(id, doc) {
      //console.log(doc);
      return true;
    }
  })
}

UserUtils.findNumberNotif = function(username){
  var followings = UserUtils.findFollowings();
  return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false}).count();
};