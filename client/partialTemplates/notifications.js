Template.notifications.onCreated(function() { 
  //console.log("Usuario: "); 
  //console.log(Meteor.user().username);
  Meteor.subscribe('notifications', Meteor.user().username);
});

Template.notifications.helpers({
  modeDisplay: function() {
    var size = Session.get('sizeDisplay');
    if(size > 768){
      return true;
    } else {
      return false;
    }
  },
  notifications: function() {
    followings = UserUtils.findFollowings(Meteor.user().username);
    return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false});
  },
  notificationCount: function(){
    /*
    var followings = UserUtils.findFollowings(Meteor.user().username);
    return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false}).count();
    */
    return UserUtils.findNumberNotif(Meteor.user().username);
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