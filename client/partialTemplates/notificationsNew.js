Template.notificationsNew.onCreated(function() { 
  //console.log("Usuario: "); 
  //console.log(Meteor.user().username);
  Meteor.subscribe('notifications', Meteor.user().username);
});

Template.notificationsNew.helpers({
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
  },
  'infoStateCollapseNavBar': function() {
    return Session.get('navBarCollapse');
  }
});

Template.notificationsNew.events({
  'click #linkToNotif' : function(){
    window.location = "/Notifications";
  }
});