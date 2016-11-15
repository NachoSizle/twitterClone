Template.whatsAppRequestPage.helpers({  
  'countNotifRequest' : function(){
    arrWhatsAppReqNotif =  Session.get('requestWhats');
    if(arrWhatsAppReqNotif){
      countNumWhatsAppNotif = arrWhatsAppReqNotif.length;
      if(countNumWhatsAppNotif === 0){
        return false;
      } else {
        return true;
      }
    };
  },
  'countNotifResponse' : function(){
    arrWhatsAppResNotif =  Session.get('responseWhats');
    if(arrWhatsAppResNotif){
      countNumWhatsAppNotif = arrWhatsAppResNotif.length;
      if(countNumWhatsAppNotif === 0){
        return false;
      } else {
        return true;
      }
    };
  },
  'whatsRequestNotif' : function(){
    var arrAux = [];
    arrWhatsAppReqNotif.forEach(function(item){
      console.log(item);
      var dataFound = UserUtils.findWhatsAppNotifications(item);
      console.log(dataFound);
      arrAux.push(dataFound);
    });
    console.log(arrAux);

    return arrAux;
  },
  'whatsResponseNotif' : function(){
    var arrAux = [];
    arrWhatsAppResNotif.forEach(function(item){
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
  //SE PRODUCE CUANDO EL USUARIO ACEPTA LA SOLICITUD
  'click #sentYes' : function() {
    var idWhatsNotif = this._id;
    //HAY QUE REALIZAR UNA NOTIFICACION AL USUARIO QUE HA SOLICITADO EL WHATSAPP
    //INFORMANDOLE QUE SE HA ACEPTADO DICHA SOLICITUD
    
    var notif = new Object();
      
    notif.recepNotif = this.actorNotif; //EL USUARIO QUE VA A RECIBIR LA RESPUESTA DE LA PETICION
    notif.actorNotif = this.recepNotif; //EL USUARIO QUE CONFIRMA LA PETICION
    notif.timestamp = new Date();
    notif.idNotifRequestWhatsApp = idWhatsNotif;
    notif.typeOfNotif = "responseWhatsAppNotif";
    notif.stateResponse = true;

    Meteor.call('createResponseWhatsAppNotification', notif);
    
    countNumWhatsAppNotif--;
  },
  //SE PRODUCE CUANDO EL USUARIO RECHAZA LA SOLICITUD
  'click #sentNo' : function(){
    var idWhatsNotif = this._id;
    //HAY QUE REALIZAR UNA NOTIFICACION AL USUARIO QUE HA SOLICITADO EL WHATSAPP
    //INFORMANDOLE QUE SE HA RECHAZADO DICHA SOLICITUD
    /*
    var notif = new Object();
      
    notif.recepNotif = Session.get('userToSentPet'); //EL USUARIO QUE VA A RECIBIR LA PETICION
    notif.actorNotif = Meteor.user().username; //EL USUARIO QUE REALIZA LA PETICION
    notif.timestamp = new Date();
    notif.idNotifRequestWhatsApp = idWhatsNotif;
    notif.typeOfNotif = "responseWhatsAppNotif";
    notif.stateResponse = false;

    Meteor.call('createResponseWhatsAppNotification', notif);
    */
    //countNumWhatsAppNotif--;
  },
  //PULSEMOS EL BTN QUE PULSEMOS SE HARAN DOS COSAS:
  //1) REDIRECCION A LA PAGINA PPAL SI SE HAN ACABADO LAS NOTIFICACIONES
  //2) PONER LA NOTIFICACION A LEIDA
  'click .btn' : function(){
    var idNotifToClear = this._id;
    
    Notifications.update(idNotifToClear, {$set: {read: true}});
    console.log("Clean!");
    if(countNumWhatsAppNotif === 0){
      window.location = "/"; 
    }
    
  }
});