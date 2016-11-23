Template.twiitPageNew.onCreated(function() {  
  this.subscribe('twittsWithComment');
  this.subscribe('favs');
  this.subscribe('allNotifications');
  arrWithId = [];
  arrWithCommNotif = [];
  arrWithFavsNotif = [];
  countArrFavs = 0;
  countArrComm = 0;

  foundNotifComm = UserUtils.findNotifForTypeNotif(this.data.name, 'comment');
  
  foundNotifFavs = UserUtils.findNotifForTypeNotif(this.data.name, 'fav');

  Session.set('notificationsModeOn', true);
});

Template.twiitPageNew.helpers({
  'setStyleNavBar': function(){
    var widthNav = $(window).width();
    //RESTAMOS DOS PIXELES POR LOS BORDES
    widthNav -= 2; 
    return widthNav/2 + "px";
  },

  'convertDateTime': function() {
  	var dateNew = new Date(this.twiitTimeStamp);
  	var dateCon = dateNew.toLocaleString();
    return dateCon;
  },

  'showComments': function() {
    countArrComm = foundNotifComm.count();
    Session.set('lengthArrComm', countArrComm);
    return foundNotifComm;
  },

  'showFavs': function() {
    countArrFavs = foundNotifFavs.count();
    Session.set('lengthArrFavs', countArrFavs);
    return foundNotifFavs;
  },

  'countNotifTwiit' : function(){
    var numNotif =  UserUtils.findNumberNotif(this.name);
    if(numNotif === 0){
      return false;
    } else {
      return true;
    }
  },

  'saveIdInArr' : function(){
    arrWithId.push(this._id);
    if(this.typeOfNotif === 'comment'){
      if(arrWithCommNotif.length < countArrComm){
        arrWithCommNotif.push(this._id);
      }
    } else if(this.typeOfNotif === 'fav'){
      if(arrWithFavsNotif.length < countArrFavs){
        arrWithFavsNotif.push(this._id);
      }
    } 
  },

  'selectTypeNotifToShow' : function(){

    var lengthFavs = Session.get('lengthArrFavs');
    var lengthComm = Session.get('lengthArrComm');

    if(lengthFavs > lengthComm){
      //SOLO MOSTRAMOS LAS NOTIF DE TIPO FAVS Y HAY QUE DEJAR SELECCIONADO
      //EL BTN DE FAVS DE LA NAVBAR FOOTER
      Session.set('btnShowCommIsPulse', false);
    } else if(lengthFavs < lengthComm){
      //SOLO MOSTRAMOS LAS NOTIF DE TIPO COMM Y HAY QUE DEJAR SELECCIONADO
      //EL BTN DE COMM DE LA NAVBAR FOOTER
      Session.set('btnShowCommIsPulse', true);
    } else {
      //SI TENEMOS EL MISMO NUMERO DE NOTIF, NO HACEMOS NADA. MOSTRAMOS TODAS.
      console.log("OLI");
    }
  },

  'numFavPerTwiit' : function(){
    return UserUtils.findNumberFavPerTwiit(this.twiitId);
  },
  'findNumComment' : function(){
    //AQUI this._id ES EL _ID DE LA COLLECTION NOTIFICATIONS
    //POR LO QUE HABRA QUE SACAR EL CAMPO twiitId
    var twiitId = UserUtils.findTwiitFromNotif(this._id);

    var num = UserUtils.findNumComment(twiitId);
    if(num > 0){
      return true;
    } else return false;
  },
  'numComment': function(){
    var num = UserUtils.findNumComment(UserUtils.findTwiitFromNotif(this._id));
    return num;
  }, 
  'idToFavBtn': function(){
    return this._id;
  },
  'classFav': function(){
    var twiitId = UserUtils.findTwiitFromNotif(this._id);
    var num = UserUtils.findNumberFavPerTwiit(twiitId);
    if(num > 0){
      return "heartFav";
    } else return "heartNoFav";
  },
  'numFavorite': function(){
    var twiitId = UserUtils.findTwiitFromNotif(this._id);
    var num = UserUtils.findNumberFavPerTwiit(twiitId);
    if(num > 0){
      return true;
    } else return false;
  },
  'numFav': function(){
    var twiitId = UserUtils.findTwiitFromNotif(this._id);
    var num = UserUtils.findNumberFavPerTwiit(twiitId);
    return num;
  },
  'btnShowComm': function(){
    return Session.get('btnShowCommIsPulse');
  },
  'noCommNotif': function(){
    if(Session.get('lengthArrComm') === 0){
      return true;
    } else {
      return false;
    }
  },
  'noFavsNotif': function(){
    if(Session.get('lengthArrFavs') === 0){
      return true;
    } else {
      return false;
    }
  }, 
  'notifCommCount': function(){
    return Session.get('lengthArrComm');
  },
  'notifFavsCount': function(){
    return Session.get('lengthArrFavs');
  }
});

Template.twiitPageNew.events({
  'click .btnDismissNotif': function(event) {
    console.log(arrWithCommNotif.length);
    console.log(arrWithFavsNotif.length);

    console.log(arrWithId);

    var idBtn = event.target.id;

    if(idBtn === 'dismissCommNotif'){
      for (var aux in arrWithCommNotif){
        var id = arrWithCommNotif[aux];
        Notifications.update(id, {$set: {read: true}});
        arrWithCommNotif.splice(aux,1);
      }
    } else if(idBtn === 'dismissFavsNotif'){
      for (var aux in arrWithFavsNotif){
        var id = arrWithFavsNotif[aux];
        Notifications.update(id, {$set: {read: true}});
        arrWithFavsNotif.splice(aux,1);
      }
    }

    Session.set('lengthArrFavs', arrWithFavsNotif.length);
    Session.set('lengthArrComm', arrWithCommNotif.length);

    if(arrWithCommNotif.length === 0 && arrWithFavsNotif.length === 0){
      window.location = "/";
    }
  },
  'click #btnFav': function(){
    var currentUser = Session.get('currentUser');
    var idUser = Meteor.users.findOne({ username: currentUser })._id;

    //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO
    var idAux = UserUtils.findTwiitFromNotif(this._id);
    var userTapFav = UserUtils.findFavsForTwiit(idAux);
    var arrAux = userTapFav.idUserTapFav;

    //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS
    if(arrAux.indexOf(idUser) === -1){
      UserUtils.addFavToTwiit(idAux, idUser);

      var notif = new Object();
      notif._id = idAux;
      notif.typeOfNotif = "fav";
      notif.actorNotif = currentUser;
      notif.recepNotif = UserUtils.findUserFromTwiit(idAux);

      console.log(notif);

      Meteor.call('createTwiitNotification', notif);

      $("#"+ this._id).addClass("heartFav");
      $("#"+ this._id).removeClass("heartNoFav");
    } else {
      //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO
      //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO
      //LA OPERACION INVERSA
      UserUtils.removeFavToTwiit(idAux, idUser);
      $("#"+ this._id).addClass("heartNoFav");
      $("#"+ this._id).removeClass("heartFav");
    }
  },
  'click #btnComm' : function(){
    var numComment = UserUtils.findNumComment(UserUtils.findTwiitFromNotif(this._id));
    //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A 
    //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO
    if(numComment === 0){
        $("#dialog-NewTwiit").modal();
        Session.set('commentMode', true);
        Session.set('idCurrentTwiit', UserUtils.findTwiitFromNotif(this._id));
    }
  }, 
  'click #btnShowFavsNotif' : function(){
    Session.set('btnShowCommIsPulse', false);
  },
  'click #btnShowCommNotif' : function(){
    Session.set('btnShowCommIsPulse', true);
  }
});