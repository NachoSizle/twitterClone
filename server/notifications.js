Meteor.methods({ 
  'createTwiitNotification' : function(twiitNotifId) {
    var twiit = Twitts.findOne(twiitNotifId);

    Notifications.insert({
      twiitMessage: twiit.message,
      twiitId: twiit._id,
      twiitNotifUserName: twiit.user,
      twiitTimeStamp: twiit.timestamp,
      read: false
    });
  }
});