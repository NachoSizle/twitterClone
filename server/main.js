import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Relationships._ensureIndex({follower: 1, following: 1}, {unique: 1});
  
  Twitts.allow({
  	insert: function(userId, disconnect) {
  	   	return true;
  	},
  	update: function(id, doc){
  		return true;
  	}
  });

  Favs.allow({
  	insert: function(userId, disconnect) {
	   	return true;
	},
  	update: function(userId, doc) {
  		console.log("Update Oper");
	    return true;
  	}
  });

  Notifications.allow({
  	update: function(userId, doc) {
	    return true;
  	}
  });

  DataUser.allow({
    insert: function(userId, disconnect){
      return true;
    }
  });
});
