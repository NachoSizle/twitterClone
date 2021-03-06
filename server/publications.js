Meteor.publish('twitts', function() {
  if (Meteor.userId) {
    var username = Meteor.users.findOne({_id: this.userId}).username;
    var currentFollowings = UserUtils.findFollowings(username);

    return Twitts.find({user: { $in: currentFollowings }});
  }
});

Meteor.publish('twittsProfile', function(username) {
  if (Meteor.userId) {
    return Twitts.find();
  }
});

Meteor.publish('twittsWithComment', function(idTweet) {
  if (Meteor.userId) {
    return Twitts.find();
  }
});

Meteor.publish('notifications', function() {
  return Notifications.find();
});

Meteor.publish('allNotifications', function(notifId) {
  return Notifications.find({_id : notifId}, {read: false});
});

Meteor.publish('whatsAppNotifications', function(notifName) {
  return Notifications.find({recepNotif : notifName}, {read: false});
});

Meteor.publish('favs', function() {
  return Favs.find();
});

Meteor.publish('dataUser', function() {
  return DataUser.find();
});

Meteor.publish('images', function() {
  return Images.find();
});

Meteor.publish('chatsMsg', function() {
  if (Meteor.userId) {
    return ChatsMsg.find({userIdRecepMsg : this.userId});
  }
});

Meteor.publish('chats', function() {
  if (Meteor.userId) {
    return Chats.find();
  }
});

Meteor.publish('files', function () {
  return Files.find().cursor;
});

if (Meteor.isServer) {
  Files.denyClient();

  Meteor.startup(() => {
    if (!Files.findOne()) {
      Files.load('https://raw.githubusercontent.com/VeliovGroup/Meteor-Files/master/logo.png', {
        fileName: 'logo.png'
      });
    }
  });
}

/*
Meteor.publishComposite('twitts', function(username) {
  return {
    find: function() {
      // Comprobar los usuarios a los que se está siguiendo
      return Relationships.find({ follower: username });
    },
    children: [{
      find: function(relationship) {
        // Encontrar mensajes de los usuarios que se siguen
        return Twitts.find({user: relationship.following});
      }
    }]
  }
});
*/
