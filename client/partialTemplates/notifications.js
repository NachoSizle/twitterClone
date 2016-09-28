Template.notifications.onCreated(function() { 
  //console.log("Usuario: "); 
  //console.log(Meteor.user().username);
  Meteor.subscribe('notifications', Meteor.user().username);
});

Template.notifications.helpers({
  notifications: function() {
    followings = UserUtils.findFollowings(Meteor.user().username);
    return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false});
  },
  notificationCount: function(){
    var followings = UserUtils.findFollowings(Meteor.user().username);
    return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false}).count();
  }
});

/*
Template.notificationItem.helpers({
  notificationTwiitPath: function() {
    var path = this.twiitId;
    console.log(path);
    return path;
  }
});


Template.notificationItem.events({
  'click a': function() {
    Notifications.update(this._id, {$set: {read: true}});
  }
});
*/