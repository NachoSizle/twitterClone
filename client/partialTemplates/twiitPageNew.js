Template.twiitPageNew.onCreated(function() {  
  this.subscribe('twittsWithComment');
  this.subscribe('favs');
  this.subscribe('allNotifications');
  arrWithId = [];
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

  'tweetMessage': function() {
    return UserUtils.findNotifications(this.name);
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
  }
});

Template.twiitPageNew.events({
  'click #btnDismissNotif': function() {
    console.log(arrWithId);
    for (var aux in arrWithId){
      var id = arrWithId[aux];
      Notifications.update(id, {$set: {read: true}});
    }
    window.location = "/";
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
  }
});