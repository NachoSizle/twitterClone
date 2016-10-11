Meteor.methods({ 
  'insertTweet': function(tweet) {
    var insertComment = false;

    twiit = new Object();
    twiit.message = tweet.message;
    twiit.user = Meteor.user().username;
    twiit.timestamp = new Date();
    twiit.numFav = 0;
    twiit.numComment = 0;

    //SE EJECUTA CUANDO SE QUIERE INSERTAR UN TWIIT DESDE UN COMENTARIO
    if(tweet.type){
      twiit.commentType = true;
      twiit.twiitIdComment = tweet.twiitId;
    } 

    fav = new Object();
    fav.idTwiit = "";
    fav.idUserTapFav = [];

    if(tweet.type){
      if (Meteor.user()) {
        twiit._id = Twitts.insert({
          message : twiit.message,
          user : twiit.user,
          timestamp : twiit.timestamp,
          numFav : twiit.numFav,
          numComment : twiit.numComment,
          commentType : twiit.commentType,
          twiitIdComment : twiit.twiitIdComment
        });
      }
    } else {
      if (Meteor.user()) {
        twiit._id = Twitts.insert({
          message : twiit.message,
          user : twiit.user,
          timestamp : twiit.timestamp,
          numFav : twiit.numFav,
          numComment : twiit.numComment
        });
      }
    }

    fav._id = Favs.insert({
      idTwiit : twiit._id,
      idUserTapFav : fav.idUserTapFav
    });

    var notif = new Object();
    notif._id = twiit._id;
    notif.typeOfNotif = tweet.typeOfNotif;
    notif.actorNotif = tweet.actorUser;
    notif.recepNotif = tweet.recepUser;
    
    //console.log(notif);

  	Meteor.call('createTwiitNotification', notif);

    if(tweet.type){
      Twitts.update({_id: twiit.twiitIdComment}, {$set: {numComment : tweet.numComment}});
    }
  }
});