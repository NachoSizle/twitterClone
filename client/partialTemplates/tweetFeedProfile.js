Template.tweetFeedProfile.onCreated(function() {  
	this.subscribe('twittsProfile');
});

Template.tweetFeedProfile.helpers({  
  'tweetMessageProfile': function() {
    var tweet =  Twitts.find({}, { 
        sort: {timestamp: -1}, 
        limit: 10
    });
    return tweet;
  }
});

Template.tweetFeedProfile.helpers({  
  'convertDateTime': function() {
  	var dateNew = new Date(this.timestamp);
  	var dateCon = dateNew.toLocaleString();
    return dateCon;
  }
});

