UserUtils = function() {};    //no var in front

UserUtils.findTweets = function(username) { 
  var currentTweets = Twitts.find({ user: username }).fetch().map(function(data) {
    								return data.following;
  						  });
  console.log("Tweets: ");
  console.log(currentTweets);

  return currentTweets;
};	
//SIGUIENDO
UserUtils.findFollowings = function(username) { 
  var currentFollowings = Relationships.find({ follower: username }).fetch().map(function(data) {
    								return data.following;
  						  });
  //console.log("Siguiendo: ");
  //console.log(currentFollowings);

  return currentFollowings;
};	
//SEGUIDORES
UserUtils.findFollowers = function(username) { 
  var currentFollowers = Relationships.find({ following: username }).fetch().map(function(data) {
    								return data.following;
  						  });
  //console.log("Seguidores: ");
  //console.log(currentFollowers);

  return currentFollowers;
};	

UserUtils.findNotifications = function(username){
	return Notifications.find({recepNotif: username, read: false, isOwnTwiit: false}, {sort: {twiitTimeStamp: -1}});
}

UserUtils.findNotifForTypeNotif = function(username, type){
  return Notifications.find({recepNotif: username, read: false, isOwnTwiit: false, typeOfNotif: type}, {sort: {twiitTimeStamp: -1}});
}

UserUtils.findOneNotification = function(username){
  return Notifications.findOne({recepNotif: username, read: false, isOwnTwiit: false}, {sort: {twiitTimeStamp: -1}});
}

UserUtils.findNumberNotif = function(username){
  return Notifications.find({recepNotif: username, read: false, isOwnTwiit: false, $or : [{typeOfNotif : 'twiit'}, {typeOfNotif : 'fav'}, {typeOfNotif : 'comment'}]}).count();
};

UserUtils.findWhatsAppNotifications = function(notifId){
  return Notifications.findOne({_id: notifId});
};

UserUtils.findNumberFavPerTwiit = function(idTwiit){
  var twiitNumFav = Twitts.findOne({_id: idTwiit}).numFav;
  return twiitNumFav;
};

UserUtils.findFavsForTwiit = function(id){
  return Favs.findOne({idTwiit : id});
}

UserUtils.addFavToTwiit = function(id, idUser){
  var resultToUpdate = false;
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT
  var favObject = UserUtils.findFavsForTwiit(id);

  if(!favObject){
    //console.log("No tiene FAVS");
    
  } else {
    var arrAux = favObject.idUserTapFav;
    var idFav = favObject._id;

    arrAux.push(idUser);
    var num = UserUtils.findNumberFavPerTwiit(id);
    num++;

    //AHORA HACEMOS LAS OPERACIONES DE UPDATE
    res = Favs.update(idFav, {$set: {idUserTapFav: arrAux}});
    resT = Twitts.update(id, {$set: {numFav: num}});

    //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE
    if(res && resT){
      resultToUpdate = true;
    }
  }

  return resultToUpdate;
};

UserUtils.removeFavToTwiit = function(id, idUser){
  var resultToUpdate = false;
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT
  var favObject = UserUtils.findFavsForTwiit(id);
  var arrAux = favObject.idUserTapFav;
  var idFav = favObject._id;

  //HAY QUE AVERIGUAR LA POSICION DEL idUser DENTRO DEL ARRAY DE LA BBDD
  var posIdUser = arrAux.indexOf(idUser);
  //AHORA ELIMINAMOS EL ELEMENTO ASOCIADO A ESA POSICION
  delete arrAux[posIdUser];

  var num = UserUtils.findNumberFavPerTwiit(id);
  num--;

  //AHORA HACEMOS LAS OPERACIONES DE UPDATE
  res = Favs.update(idFav, {$set: {idUserTapFav: arrAux}});
  resT = Twitts.update(id, {$set: {numFav: num}});

  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE
  if(res && resT){
    resultToUpdate = true;
  }

  return resultToUpdate;
};

UserUtils.findTwiitFromNotif = function(id){
  var twiitId = Notifications.findOne(id).twiitId;
  return twiitId;
};

UserUtils.findNumComment = function(idTweet){
  return Twitts.findOne({_id : idTweet}).numComment;
};

//PARA MOSTRAR NOTIFICACIONES EN EL NAVEGADOR WEB
UserUtils.createNotifToBrowser = function(typeNotif, userName){
  if (Notification) {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
    var title = "TwiitClone";
    var bodyNotif = "";

    if(typeNotif === "fav"){
      bodyNotif = "El usuario " + userName + " ha dado fav a un twiit tuyo";
    } else if(typeNotif === "comment"){
      bodyNotif = "El usuario " + userName + " ha comentado un twiit tuyo";
    } else if(typeNotif === "twiit"){
      bodyNotif = "El usuario " + userName + " ha publicado a un twiit nuevo";
    } else if(typeNotif === "moreNotif"){
      bodyNotif = "Tienes muchas Notificaciones";
    }

    var extra = { body: bodyNotif };

    var noti = new Notification(title, extra);

    noti.onclick = function(){
      // Al hacer click
      window.location = "/Notifications/" + Meteor.user().username;
    };

    noti.onclose = {
      // Al cerrar
    };

    setTimeout( function() { noti.close() }, 5000);
  }
};

UserUtils.findUserFromTwiit = function(twiitId){
  return Twitts.findOne({_id : twiitId}).user;
};