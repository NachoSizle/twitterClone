Template.notificationsNew.onCreated(function() {
  //console.log("Usuario: ");
  //console.log(Meteor.user().username);
  Meteor.subscribe('notifications', Meteor.user().username);
  $('#selectFileLbl').css('margin-bottom', '50px');
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
    //followings = UserUtils.findFollowings(Meteor.user().username);
    console.log(Meteor.user().username);
    return Notifications.find({recepNotif: Meteor.user().username, read: false});
  },
  notificationCount: function(){
    /*
    var followings = UserUtils.findFollowings(Meteor.user().username);
    return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false}).count();
    */
    numNotif = UserUtils.findNumberNotif(Meteor.user().username);

    return numNotif;
  },
  'infoStateCollapseNavBar': function() {
    return Session.get('navBarCollapse');
  },
  'currentUser': function(){
    return Meteor.user().username;
  }
});

Template.notificationsNew.events({

  'click #linkToNotif' : function(){
    if(numNotif > 0){

      window.location = "/Notifications/" + Meteor.user().username;
    }
  }

});
