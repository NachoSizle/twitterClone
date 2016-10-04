Template.twiitPageNew.onCreated(function() {  
  this.subscribe('twitts');
  this.subscribe('favs');
  username = Session.get('currentUser');
  currentFollowings = UserUtils.findFollowings(username);
  arrWithId = [];
});

Template.twiitPageNew.helpers({  
  'convertDateTime': function() {
  	var dateNew = new Date(this.twiitTimeStamp);
  	var dateCon = dateNew.toLocaleString();
    return dateCon;
  },

  'tweetMessage': function() {
    var notify =  Notifications.find({twiitNotifUserName: { $nin: currentFollowings}, read: false}, {sort: {twiitTimeStamp: -1}});
    return notify;
  },

  'countNotifTwiit' : function(){
    var numNotif =  UserUtils.findNumberNotif(username);
    if(numNotif === 0){
      return false;
    } else {
      return true;
    }
  },

  'saveIdInArr' : function(){
    arrWithId.push(this._id);
    console.log(arrWithId);
  },

  'numFavPerTwiit' : function(){
    return UserUtils.findNumberFavPerTwiit(this.twiitId);
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
    var userTapFav = UserUtils.findFavsForTwiit(this.twiitId);
    var arrAux = userTapFav.idUserTapFav;

    //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS
    if(arrAux.indexOf(idUser) === -1){
      UserUtils.addFavToTwiit(this.twiitId, idUser);
    } else {
      //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO
      //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO
      //LA OPERACION INVERSA
      UserUtils.removeFavToTwiit(this.twiitId, idUser);
    }
  },
  'click #btnComm' : function(){
    Session.set('commentMode', true);
    Session.set('currentTwiitUserTapToComment', this._id);
  }
});