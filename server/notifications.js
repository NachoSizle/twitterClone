Notifications.allow({
  update: function(userId, doc) {
    //console.log(userId);
    console.log("Update");
    //console.log(fieldNames);
    //Notifications.update({ _id: doc.twiitId }, { $set: {read: true }});
    return true;
  }
});

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