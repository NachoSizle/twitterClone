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

    if (Meteor.user()) {
      twiit._id = Twitts.insert({
        message : twiit.message,
        user : twiit.user,
        timestamp : twiit.timestamp 
      });
    }
	Meteor.call('createTwiitNotification', twiit._id);
  }
});