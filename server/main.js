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
  	},

  });

  Favs.allow({
  	insert: function(userId, disconnect) {
	   	return true;
	},
  	update: function(userId, doc) {
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
    },
    update: function(userId, doc) {
      return true;
    }

  });

  Images.allow({
    insert: function(userId, disconnect){
      return true;
    }
  });

  Chats.allow({
    insert: function(userId, disconnect){
      return true;
    },
    update: function(userId, doc) {
      return true;
    }

  });

  Files.allow({
    insert: function(){
      return true;
    },
    update: function() {
      return true;
    },
    remove: function(){
      console.log("Deleting");
      return true;
    }
  });

});
