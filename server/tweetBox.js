Meteor.methods({ 
  'insertTweet': function(tweet) {
  	/*
  	twiit = _.extend(tweet, {
      user: Meteor.user().username,
      message: tweet,
      timestamp: new Date()
    });
    */
    twiit = new Object();
    twiit.message = tweet;
    twiit.user = Meteor.user().username;
    twiit.timestamp = new Date();
    twiit.numFav = 0;

    fav = new Object();
    fav.idTwiit = "";
    fav.idUserTapFav = [];

    if (Meteor.user()) {
      twiit._id = Twitts.insert({
        message : twiit.message,
        user : twiit.user,
        timestamp : twiit.timestamp,
        numFav : twiit.numFav 
      });

      fav._id = Favs.insert({
      	idTwiit : twiit._id,
      	idUserTapFav : fav.idUserTapFav
      });
    }
	Meteor.call('createTwiitNotification', twiit._id);
  }
});