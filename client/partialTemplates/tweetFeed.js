Template.tweetFeed.onCreated(function() {  
	this.subscribe('twitts');
});

Template.tweetFeed.helpers({  
  'tweetMessage': function() {
    return Twitts.find({}, { 
        sort: {timestamp: -1}, 
        limit: 10
    });
  }
});