Template.whatsAppRequestPage.helpers({  
  'countNotifTwiit' : function(){
    arrWhatsAppNotif =  Session.get('requestWhats');
    if(arrWhatsAppNotif){
      if(arrWhatsAppNotif.length === 0){
        return false;
      } else {
        return true;
      }
    };
  },
  'whatsNotif' : function(){
    var arrAux = [];
    arrWhatsAppNotif.forEach(function(item){
      console.log(item);
      var dataFound = UserUtils.findWhatsAppNotifications(item);
      console.log(dataFound);
      arrAux.push(dataFound);
    });
    console.log(arrAux);
    return arrAux;
  }
});

Template.whatsAppRequestPage.events({
  'click button': function() {
    console.log(this._id);
    Notifications.update(this._id, {$set: {read: true}});
    console.log("Clean!");
    window.location = "/";
  },
});
