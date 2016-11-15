Meteor.methods({ 
  'createTwiitNotification' : function(notif) {
    var twiit = Twitts.findOne(notif._id);
    var typeNotif = notif.typeOfNotif;

    if(notif.recepNotif === notif.actorNotif){
      isOwn = true;
    } else {
      isOwn = false;
    }
    
    Notifications.insert({
      twiitMessage: twiit.message,
      twiitId: twiit._id,
      recepNotif: notif.recepNotif,
      actorNotif: notif.actorNotif,
      twiitTimeStamp: twiit.timestamp,
      typeOfNotif: typeNotif, 
      read: false,
      isOwnTwiit: isOwn
    });
    
  },

  'createWhatsAppNotification' : function(notif){

    Notifications.insert({
      recepNotif: notif.recepNotif,
      actorNotif: notif.actorNotif,
      timeStamp: notif.timestamp,
      typeOfNotif: notif.typeOfNotif, 
      read: false,
      isOwnTwiit: false
    });

  },

  'createResponseWhatsAppNotification' : function(notif){

    Notifications.insert({
      recepNotif: notif.recepNotif,
      actorNotif: notif.actorNotif,
      timeStamp: notif.timestamp,
      typeOfNotif: notif.typeOfNotif,
      stateResponse: notif.stateResponse,
      idNotifRequestWhatsApp: notif.idNotifRequestWhatsApp,
      read: false,
      isOwnTwiit: false
    });

  }
});