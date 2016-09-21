Meteor.methods({ 
  'insertTweet': function(tweet) {
    if (Meteor.user()) {
      Twitts.insert({
        message: tweet,
        user: Meteor.user().username,
        timestamp: new Date()
      });
    }
  }
});