Meteor.methods({ 
  'createTwiitNotification' : function(notif) {
    var twiit = Twitts.findOne(notif._id);
    var typeNotif = notif.typeOfNotif;

    Notifications.insert({
      twiitMessage: twiit.message,
      twiitId: twiit._id,
      twiitNotifUserName: twiit.user,
      twiitTimeStamp: twiit.timestamp,
      typeOfNotif: typeNotif, 
      read: false
    });
  }
});