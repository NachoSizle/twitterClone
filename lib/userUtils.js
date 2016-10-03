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

UserUtils.addFavToTwiit = function(id, idUser){
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT
  var arrAux = Favs.findOne({idTwiit: id}).idUserTapFav;
  arrAux.push(idUser);
  var num = UserUtils.findNumberFavPerTwiit(id);
  num++;

  //AHORA HACEMOS LAS OPERACIONES DE UPDATE
  Favs.update(id, {$set: {idUserTapFav: arrAux}});
  Twitts.update(id, {$set: {numFav: num}});
};
