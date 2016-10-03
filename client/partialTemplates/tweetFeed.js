Template.tweetFeed.onCreated(function() {  
	this.subscribe('twitts');
  this.subscribe('favs');
  Meteor.subscribe('favs');
});

Template.tweetFeed.helpers({  
  'tweetMessage': function() {
    var tweet =  Twitts.find({}, {sort: {timestamp: -1}} );
    return tweet;
  },
  'convertDateTime': function() {
    var dateNew = new Date(this.timestamp);
    var dateCon = dateNew.toLocaleString();
    return dateCon;
  }
});

Template.tweetFeed.events({
  'click #btnFav': function(){
    var currentUser = Session.get('currentUser');
    var idUser = Meteor.users.findOne({ username: currentUser })._id;
    UserUtils.addFavToTwiit(this._id, idUser);
  }
})