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
/*
//FORZAMOS LA REACTIVIDAD
UserUtils.observerProperties = function(){
	Twitts.find().observeChanges({
    changed: function(){
      console.log("Se han detectado cambios!");
    },
    added: function(id, doc) {
      //console.log(doc);
      return true;
    }
  })
}
*/

UserUtils.findNumberNotif = function(username){
  var followings = UserUtils.findFollowings();
  return Notifications.find({twiitNotifUserName: { $nin: followings }, read: false}).count();
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

UserUtils.findNumComment = function(idTweet){
  return Twitts.findOne({_id : idTweet}).numComment;
};