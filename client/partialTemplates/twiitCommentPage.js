Template.twiitCommentPage.onCreated(function() {  
	this.subscribe('twittsWithComment');
  	this.subscribe('favs');
});

Template.twiitCommentPage.helpers({
	//DEVUELVE EL MENSAJE ORIGINAL DEL QUE SE PRODUCEN LOS COMENTARIOS
  'tweetMessage' : function(){
  	//HAY QUE CONSEGUIR PASAR A ESTA VISTA EL this._id DE tweetFeed PARA PODER 
  	//DEVOLVER EL TWEET INICIAL Y DE AHI PASAR A MOSTRAR CON tweetThatCommentMessage
  	//TODOS LOS COMENTARIOS QUE TENGA!
  	if(this.mode){
  		id = UserUtils.findTwiitFromNotif(this._id);
  		return Twitts.find( id, {sort: {timestamp: -1}});
  	} else {
  		return Twitts.find( this._id, {sort: {timestamp: -1}});
  	}
  },
  'tweetThatCommentMessage': function() {
  	if(this.mode){
  		id = UserUtils.findTwiitFromNotif(this._id);
  		return Twitts.find({twiitIdComment : id}, {sort: {timestamp: -1}} );
  	} else {
  		return Twitts.find({twiitIdComment : this._id}, {sort: {timestamp: -1}});
  	}
  },
  'convertDateTime': function() {
    var dateNew = new Date(this.timestamp);
    var dateCon = dateNew.toLocaleString();
    return dateCon;
  }, 
  'idToFavBtn': function(){
    return this._id;
  },
  'classFav': function(){
    var num = UserUtils.findNumberFavPerTwiit(this._id);
    if(num > 0){
      return "heartFav";
    } else return "heartNoFav";
  }
});

Template.twiitCommentPage.events({
  'click #btnFav': function(){
    var currentUser = Session.get('currentUser');
    var idUser = Meteor.users.findOne({ username: currentUser })._id;
    //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO
    var userTapFav = UserUtils.findFavsForTwiit(this._id);
    var arrAux = userTapFav.idUserTapFav;
//SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS
    if(arrAux.indexOf(idUser) === -1){
      UserUtils.addFavToTwiit(this._id, idUser);

      var notif = new Object();
      notif._id = this._id;
      notif.typeOfNotif = "fav";
      notif.actorNotif = currentUser;
      notif.recepNotif = UserUtils.findUserFromTwiit(this._id);

      console.log(notif);

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
	$("#dialog-NewTwiit").modal();
	Session.set('idCurrentTwiit', this._id);
	Session.set('commentMode', true);
  }
});