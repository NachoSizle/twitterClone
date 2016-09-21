Meteor.publish('twitts', function() {  
  if (Meteor.userId) {
    var username = Meteor.users.findOne({_id: this.userId}).username;
    var currentFollowings = UserUtils.findFollowings(username);

    return Twitts.find({user: { $in: currentFollowings }});
  }
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