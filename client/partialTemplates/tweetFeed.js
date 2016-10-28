Template.tweetFeed.onCreated(function() {  
	this.subscribe('twitts');
  this.subscribe('favs');
});

Template.tweetFeed.helpers({  
  'tweetMessage': function() {
    var tweet =  Twitts.find({}, {sort: {timestamp: -1}} );
    return tweet;
  },
  'convertDateTime': function() {
    var dateNew = new Date(this.timestamp);
    var dateCon = dateNew.toLocaleString();
    return dateCon;
  },
  'numComment': function(){
    var num = UserUtils.findNumComment(this._id);
    if(num > 0){
      return true;
    } else return false;
  }, 
  'idToFavBtn': function(){
    return this._id;
  },
  'classFav': function(){
    var num = UserUtils.findNumberFavPerTwiit(this._id);
    if(num > 0){
      return "heartFav";
    } else return "heartNoFav";
  },
  'infoNotif': function(){
    var username = Meteor.user().username;

    var numNotif = UserUtils.findNumberNotif(username);
    //PRIMERO TENEMOS QUE COMPROBAR SI HAY NOTIFICACIONES
    if(numNotif === 1){
      //BUSCAMOS LAS NOTIFICACIONES DISPONIBLES
      var notif = UserUtils.findOneNotification(username);

      UserUtils.createNotifToBrowser(notif.typeOfNotif, notif.actorNotif);
    } else if(numNotif > 1){
      UserUtils.createNotifToBrowser("moreNotif", username);
    }
  }
});

Template.tweetFeed.events({
  'click #btnFav': function(){
    var currentUser = Session.get('currentUser');
    var idUser = Meteor.users.findOne({ username: currentUser })._id;

    console.log(this._id);
    //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO
    var userTapFav = UserUtils.findFavsForTwiit(this._id);

    //HACEMOS UNA COMPROBACION DE QUE EL TWIIT NO TIENE NINGUN FAV O QUE SI LO TIENE
    if(!userTapFav){
      //console.log("No tiene FAVS");
      UserUtils.addFavToTwiit(this._id, idUser);
      $("#"+ this._id).addClass("heartFav");
      $("#"+ this._id).removeClass("heartNoFav");
    } else {
      var arrAux = userTapFav.idUserTapFav;
    }
    
    //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS
    if(arrAux.indexOf(idUser) === -1){
      UserUtils.addFavToTwiit(this._id, idUser);

      var notif = new Object();
      notif._id = this._id;
      notif.typeOfNotif = "fav";
      notif.actorNotif = currentUser;
      notif.recepNotif = UserUtils.findUserFromTwiit(this._id);

      Meteor.call('createTwiitNotification', notif);

      $("#"+ this._id).addClass("heartFav");
      $("#"+ this._id).removeClass("heartNoFav");
    } else {
      //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO
      //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO
      //LA OPERACION INVERSA
      UserUtils.removeFavToTwiit(this._id, idUser);
      $("#"+ this._id).addClass("heartNoFav");
      $("#"+ this._id).removeClass("heartFav");
    }
  },
  'click #btnComm' : function(){
    var numComment = UserUtils.findNumComment(this._id);
    //SI EL TWIIT TIENE POR LO MENOS 1 COMENTARIO, ENTONCES REDIRIGIMOS AL USUARIO A 
    //LA RUTA /Comments. SI NO, SE ABRE EL MODAL Y SE PUEDE HACER EL COMENTARIO
    if(numComment === 0){
        $("#dialog-NewTwiit").modal();
        Session.set('commentMode', true);
        Session.set('idCurrentTwiit', this._id);
    }
  }
});