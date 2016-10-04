Template.tweetFeedProfile.onCreated(function() {  
	this.subscribe('twittsProfile');
  this.subscribe('favs');
});

Template.tweetFeedProfile.helpers({  
  'tweetMessageProfile': function() {
    var tweet =  Twitts.find({}, { 
        sort: {timestamp: -1}, 
        limit: 10
    });
    return tweet;
  },
  'convertDateTime': function() {
    var dateNew = new Date(this.timestamp);
    var dateCon = dateNew.toLocaleString();
    return dateCon;
  }
});

Template.tweetFeedProfile.events({
  'click #btnFav': function(){
    var currentUser = Session.get('currentUser');
    var idUser = Meteor.users.findOne({ username: currentUser })._id;
    //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO
    var userTapFav = UserUtils.findFavsForTwiit(this._id);
    var arrAux = userTapFav.idUserTapFav;

    //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS
    if(arrAux.indexOf(idUser) === -1){
      UserUtils.addFavToTwiit(this._id, idUser);
    } else {
      //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO
      //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO
      //LA OPERACION INVERSA
      UserUtils.removeFavToTwiit(this._id, idUser);
    }
  },
  'click #btnComm' : function(){
    Session.set('commentMode', true);
    Session.set('currentTwiitUserTapToComment', this._id);
  }   
})