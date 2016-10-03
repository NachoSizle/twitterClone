Meteor.publish('twitts', function() {  
  if (Meteor.userId) {
    var username = Meteor.users.findOne({_id: this.userId}).username;
    var currentFollowings = UserUtils.findFollowings(username);

    return Twitts.find({user: { $in: currentFollowings }});
  }
});

Meteor.publish('twittsProfile', function(username) {  
  if (Meteor.userId) {
    var username = Meteor.users.findOne({_id: this.userId}).username;
    //var currentFollowings = UserUtils.findFollowings(username);

    //return Twitts.find({user: { $in: currentFollowings }});
    return Twitts.find({user: username});
  }
});

Meteor.publish('notifications', function(username) {
  console.log(username);
  var currentFollowings = UserUtils.findFollowings(username);
  console.log(Notifications.find({twiitNotifUserName: { $in: currentFollowings }, read: false}).count());
  return Notifications.find({twiitNotifUserName: { $in: currentFollowings }, read: false});
});

Meteor.publish('favs', function() {
  return Favs.find();
});
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