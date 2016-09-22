Template.tweetFeed.onCreated(function() {  
	this.subscribe('twitts');
});

Template.tweetFeed.helpers({  
  'tweetMessage': function() {
    var tweet =  Twitts.find({}, { 
        sort: {timestamp: -1}, 
        limit: 10
    });
    return tweet;
  }
});

Template.tweetFeed.helpers({  
  'convertDateTime': function() {
  	var dateNew = new Date(this.timestamp);
  	var dateCon = dateNew.toLocaleString();
    return dateCon;
  }
});

