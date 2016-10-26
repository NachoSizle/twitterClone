var require = meteorInstall({"lib":{"collections":{"collections.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// lib/collections/collections.js                                                                      //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Twitts = new Meteor.Collection('twitts');                                                              // 1
Relationships = new Meteor.Collection('relationships');                                                // 2
DataUser = new Meteor.Collection('dataUser');                                                          // 3
Favs = new Meteor.Collection('favs');                                                                  // 4
Notifications = new Mongo.Collection('notifications');                                                 // 5
Images = new Mongo.Collection('images');                                                               // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"router.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// lib/router.js                                                                                       //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Router.configure({                                                                                     // 1
	loadingTemplate: 'loading',                                                                           // 2
	notFoundTemplate: 'notFound'                                                                          // 3
});                                                                                                    // 1
                                                                                                       //
Router.route('/', { name: 'userManagement' });                                                         // 6
/*SE ACCEDE POR WINDOW.LOCATION*/                                                                      //
Router.route('/whoToFollow', { name: 'followUsers' });                                                 // 8
Router.route('/Profile/:username', {                                                                   // 9
	name: 'userProfile',                                                                                  // 10
	data: function data() {                                                                               // 11
		var user = new Object();                                                                             // 12
		user.name = this.params.username;                                                                    // 13
		return user;                                                                                         // 14
	}                                                                                                     // 15
});                                                                                                    // 9
Router.route('/Notifications/:userName', {                                                             // 17
	name: 'twiitPageNew',                                                                                 // 18
	data: function data() {                                                                               // 19
		var user = new Object();                                                                             // 20
		user.name = this.params.userName;                                                                    // 21
		return user;                                                                                         // 22
	}                                                                                                     // 23
});                                                                                                    // 17
//Router.route('/Comments', {name: 'twiitCommentPage'});                                               //
/*SE ACCEDE POR PATHFOR*/                                                                              //
Router.route('/Comments/:_id', {                                                                       // 27
	name: 'twiitCommentPage',                                                                             // 28
	data: function data() {                                                                               // 29
		var mode = Session.get('notificationsModeOn');                                                       // 30
		var idTwiit = new Object();                                                                          // 31
		idTwiit._id = this.params._id;                                                                       // 32
                                                                                                       //
		if (mode) {                                                                                          // 34
			idTwiit.mode = mode;                                                                                // 35
		}                                                                                                    // 36
                                                                                                       //
		return idTwiit;                                                                                      // 38
	}                                                                                                     // 39
});                                                                                                    // 27
Router.route('/twiits/:_id', {                                                                         // 41
	name: 'twiitPage',                                                                                    // 42
	data: function data() {                                                                               // 43
		return this.params;                                                                                  // 44
	}                                                                                                     // 45
});                                                                                                    // 41
                                                                                                       //
Router.route('/editProfile/:userName', {                                                               // 48
	name: 'editProfile',                                                                                  // 49
	data: function data() {                                                                               // 50
		return this.params.userName;                                                                         // 51
	}                                                                                                     // 52
});                                                                                                    // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userUtils.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// lib/userUtils.js                                                                                    //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
UserUtils = function UserUtils() {}; //no var in front                                                 // 1
                                                                                                       //
UserUtils.findTweets = function (username) {                                                           // 3
  var currentTweets = Twitts.find({ user: username }).fetch().map(function (data) {                    // 4
    return data.following;                                                                             // 5
  });                                                                                                  // 6
  console.log("Tweets: ");                                                                             // 7
  console.log(currentTweets);                                                                          // 8
                                                                                                       //
  return currentTweets;                                                                                // 10
};                                                                                                     // 11
//SIGUIENDO                                                                                            //
UserUtils.findFollowings = function (username) {                                                       // 13
  var currentFollowings = Relationships.find({ follower: username }).fetch().map(function (data) {     // 14
    return data.following;                                                                             // 15
  });                                                                                                  // 16
  //console.log("Siguiendo: ");                                                                        //
  //console.log(currentFollowings);                                                                    //
                                                                                                       //
  return currentFollowings;                                                                            // 20
};                                                                                                     // 21
//SEGUIDORES                                                                                           //
UserUtils.findFollowers = function (username) {                                                        // 23
  var currentFollowers = Relationships.find({ following: username }).fetch().map(function (data) {     // 24
    return data.following;                                                                             // 25
  });                                                                                                  // 26
  //console.log("Seguidores: ");                                                                       //
  //console.log(currentFollowers);                                                                     //
                                                                                                       //
  return currentFollowers;                                                                             // 30
};                                                                                                     // 31
                                                                                                       //
UserUtils.findNotifications = function (username) {                                                    // 33
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                     // 35
                                                                                                       //
UserUtils.findOneNotification = function (username) {                                                  // 37
  return Notifications.findOne({ recepNotif: username, read: false, isOwnTwiit: false }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                     // 39
                                                                                                       //
UserUtils.findNumberNotif = function (username) {                                                      // 41
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false }).count();         // 42
};                                                                                                     // 43
                                                                                                       //
UserUtils.findNumberFavPerTwiit = function (idTwiit) {                                                 // 45
  var twiitNumFav = Twitts.findOne({ _id: idTwiit }).numFav;                                           // 46
  return twiitNumFav;                                                                                  // 47
};                                                                                                     // 48
                                                                                                       //
UserUtils.findFavsForTwiit = function (id) {                                                           // 50
  return Favs.findOne({ idTwiit: id });                                                                // 51
};                                                                                                     // 52
                                                                                                       //
UserUtils.addFavToTwiit = function (id, idUser) {                                                      // 54
  var resultToUpdate = false;                                                                          // 55
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT
  var favObject = UserUtils.findFavsForTwiit(id);                                                      // 57
                                                                                                       //
  if (!favObject) {                                                                                    // 59
    //console.log("No tiene FAVS");                                                                    //
                                                                                                       //
  } else {                                                                                             // 62
      var arrAux = favObject.idUserTapFav;                                                             // 63
      var idFav = favObject._id;                                                                       // 64
                                                                                                       //
      arrAux.push(idUser);                                                                             // 66
      var num = UserUtils.findNumberFavPerTwiit(id);                                                   // 67
      num++;                                                                                           // 68
                                                                                                       //
      //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                        //
      res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                    // 71
      resT = Twitts.update(id, { $set: { numFav: num } });                                             // 72
                                                                                                       //
      //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                             //
      if (res && resT) {                                                                               // 75
        resultToUpdate = true;                                                                         // 76
      }                                                                                                // 77
    }                                                                                                  // 78
                                                                                                       //
  return resultToUpdate;                                                                               // 80
};                                                                                                     // 81
                                                                                                       //
UserUtils.removeFavToTwiit = function (id, idUser) {                                                   // 83
  var resultToUpdate = false;                                                                          // 84
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT
  var favObject = UserUtils.findFavsForTwiit(id);                                                      // 86
  var arrAux = favObject.idUserTapFav;                                                                 // 87
  var idFav = favObject._id;                                                                           // 88
                                                                                                       //
  //HAY QUE AVERIGUAR LA POSICION DEL idUser DENTRO DEL ARRAY DE LA BBDD                               //
  var posIdUser = arrAux.indexOf(idUser);                                                              // 91
  //AHORA ELIMINAMOS EL ELEMENTO ASOCIADO A ESA POSICION                                               //
  delete arrAux[posIdUser];                                                                            // 93
                                                                                                       //
  var num = UserUtils.findNumberFavPerTwiit(id);                                                       // 95
  num--;                                                                                               // 96
                                                                                                       //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                            //
  res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                        // 99
  resT = Twitts.update(id, { $set: { numFav: num } });                                                 // 100
                                                                                                       //
  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                 //
  if (res && resT) {                                                                                   // 103
    resultToUpdate = true;                                                                             // 104
  }                                                                                                    // 105
                                                                                                       //
  return resultToUpdate;                                                                               // 107
};                                                                                                     // 108
                                                                                                       //
UserUtils.findTwiitFromNotif = function (id) {                                                         // 110
  var twiitId = Notifications.findOne(id).twiitId;                                                     // 111
  return twiitId;                                                                                      // 112
};                                                                                                     // 113
                                                                                                       //
UserUtils.findNumComment = function (idTweet) {                                                        // 115
  return Twitts.findOne({ _id: idTweet }).numComment;                                                  // 116
};                                                                                                     // 117
                                                                                                       //
//PARA MOSTRAR NOTIFICACIONES EN EL NAVEGADOR WEB                                                      //
UserUtils.createNotifToBrowser = function (typeNotif, userName) {                                      // 120
  if (Notification) {                                                                                  // 121
    if (Notification.permission !== "granted") {                                                       // 122
      Notification.requestPermission();                                                                // 123
    }                                                                                                  // 124
    var title = "TwiitClone";                                                                          // 125
    var bodyNotif = "";                                                                                // 126
                                                                                                       //
    if (typeNotif === "fav") {                                                                         // 128
      bodyNotif = "El usuario " + userName + " ha dado fav a un twiit tuyo";                           // 129
    } else if (typeNotif === "comment") {                                                              // 130
      bodyNotif = "El usuario " + userName + " ha comentado un twiit tuyo";                            // 131
    } else if (typeNotif === "twiit") {                                                                // 132
      bodyNotif = "El usuario " + userName + " ha publicado a un twiit nuevo";                         // 133
    } else if (typeNotif === "moreNotif") {                                                            // 134
      bodyNotif = "Tienes muchas Notificaciones";                                                      // 135
    }                                                                                                  // 136
                                                                                                       //
    var extra = { body: bodyNotif };                                                                   // 138
                                                                                                       //
    var noti = new Notification(title, extra);                                                         // 140
                                                                                                       //
    noti.onclick = function () {                                                                       // 142
      // Al hacer click                                                                                //
      window.location = "/Notifications/" + Meteor.user().username;                                    // 144
    };                                                                                                 // 145
                                                                                                       //
    noti.onclose = {                                                                                   // 147
      // Al cerrar                                                                                     //
    };                                                                                                 // 147
                                                                                                       //
    setTimeout(function () {                                                                           // 151
      noti.close();                                                                                    // 151
    }, 5000);                                                                                          // 151
  }                                                                                                    // 152
};                                                                                                     // 153
                                                                                                       //
UserUtils.findUserFromTwiit = function (twiitId) {                                                     // 155
  return Twitts.findOne({ _id: twiitId }).user;                                                        // 156
};                                                                                                     // 157
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"followUsers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// server/followUsers.js                                                                               //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Meteor.methods({                                                                                       // 1
  'findUser': function findUser(username) {                                                            // 2
    return Meteor.users.findOne({                                                                      // 3
      username: username                                                                               // 4
    }, {                                                                                               // 3
      fields: { 'username': 1 }                                                                        // 6
    });                                                                                                // 5
  },                                                                                                   // 8
                                                                                                       //
  'followUser': function followUser(username) {                                                        // 10
    Relationships.insert({                                                                             // 11
      follower: Meteor.user().username,                                                                // 12
      following: username                                                                              // 13
    });                                                                                                // 11
  },                                                                                                   // 15
                                                                                                       //
  'recommendUsers': function recommendUsers() {                                                        // 17
    if (Meteor.user()) {                                                                               // 18
      var currentFollowings = UserUtils.findFollowings(Meteor.user().username);                        // 19
                                                                                                       //
      var recUsers = Meteor.users.find({                                                               // 21
        username: {                                                                                    // 22
          $nin: currentFollowings                                                                      // 23
        }                                                                                              // 22
      }, {                                                                                             // 21
        fields: { 'username': 1 },                                                                     // 26
        limit: 5                                                                                       // 27
      }).fetch();                                                                                      // 25
      return recUsers;                                                                                 // 29
    }                                                                                                  // 30
  }                                                                                                    // 31
});                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// server/notifications.js                                                                             //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Meteor.methods({                                                                                       // 1
  'createTwiitNotification': function createTwiitNotification(notif) {                                 // 2
    var twiit = Twitts.findOne(notif._id);                                                             // 3
    var typeNotif = notif.typeOfNotif;                                                                 // 4
                                                                                                       //
    if (notif.recepNotif === notif.actorNotif) {                                                       // 6
      isOwn = true;                                                                                    // 7
    } else {                                                                                           // 8
      isOwn = false;                                                                                   // 9
    }                                                                                                  // 10
                                                                                                       //
    Notifications.insert({                                                                             // 12
      twiitMessage: twiit.message,                                                                     // 13
      twiitId: twiit._id,                                                                              // 14
      recepNotif: notif.recepNotif,                                                                    // 15
      actorNotif: notif.actorNotif,                                                                    // 16
      twiitTimeStamp: twiit.timestamp,                                                                 // 17
      typeOfNotif: typeNotif,                                                                          // 18
      read: false,                                                                                     // 19
      isOwnTwiit: isOwn                                                                                // 20
    });                                                                                                // 12
  }                                                                                                    // 23
});                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// server/publications.js                                                                              //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Meteor.publish('twitts', function () {                                                                 // 1
  if (Meteor.userId) {                                                                                 // 2
    var username = Meteor.users.findOne({ _id: this.userId }).username;                                // 3
    var currentFollowings = UserUtils.findFollowings(username);                                        // 4
                                                                                                       //
    return Twitts.find({ user: { $in: currentFollowings } });                                          // 6
  }                                                                                                    // 7
});                                                                                                    // 8
                                                                                                       //
Meteor.publish('twittsProfile', function (username) {                                                  // 10
  if (Meteor.userId) {                                                                                 // 11
    var username = Meteor.users.findOne({ _id: this.userId }).username;                                // 12
    //var currentFollowings = UserUtils.findFollowings(username);                                      //
                                                                                                       //
    //return Twitts.find({user: { $in: currentFollowings }});                                          //
    return Twitts.find({ user: username });                                                            // 16
  }                                                                                                    // 17
});                                                                                                    // 18
                                                                                                       //
Meteor.publish('twittsWithComment', function (idTweet) {                                               // 20
  if (Meteor.userId) {                                                                                 // 21
    return Twitts.find();                                                                              // 22
  }                                                                                                    // 23
});                                                                                                    // 24
                                                                                                       //
Meteor.publish('notifications', function () {                                                          // 26
  return Notifications.find();                                                                         // 27
});                                                                                                    // 28
                                                                                                       //
Meteor.publish('allNotifications', function (notifId) {                                                // 30
  return Notifications.find({ _id: notifId }, { read: false });                                        // 31
});                                                                                                    // 32
                                                                                                       //
Meteor.publish('favs', function () {                                                                   // 34
  return Favs.find();                                                                                  // 35
});                                                                                                    // 36
                                                                                                       //
Meteor.publish('dataUser', function () {                                                               // 38
  return DataUser.find();                                                                              // 39
});                                                                                                    // 40
                                                                                                       //
Meteor.publish('images', function () {                                                                 // 42
  return Images.find();                                                                                // 43
});                                                                                                    // 44
/*                                                                                                     //
Meteor.publishComposite('twitts', function(username) {                                                 //
  return {                                                                                             //
    find: function() {                                                                                 //
      // Comprobar los usuarios a los que se está siguiendo                                            //
      return Relationships.find({ follower: username });                                               //
    },                                                                                                 //
    children: [{                                                                                       //
      find: function(relationship) {                                                                   //
        // Encontrar mensajes de los usuarios que se siguen                                            //
        return Twitts.find({user: relationship.following});                                            //
      }                                                                                                //
    }]                                                                                                 //
  }                                                                                                    //
});                                                                                                    //
*/                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetBox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// server/tweetBox.js                                                                                  //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Meteor.methods({                                                                                       // 1
  'insertTweet': function insertTweet(tweet) {                                                         // 2
    var insertComment = false;                                                                         // 3
                                                                                                       //
    twiit = new Object();                                                                              // 5
    twiit.message = tweet.message;                                                                     // 6
    twiit.user = Meteor.user().username;                                                               // 7
    twiit.timestamp = new Date();                                                                      // 8
    twiit.numFav = 0;                                                                                  // 9
    twiit.numComment = 0;                                                                              // 10
                                                                                                       //
    //SE EJECUTA CUANDO SE QUIERE INSERTAR UN TWIIT DESDE UN COMENTARIO                                //
    if (tweet.type) {                                                                                  // 13
      twiit.commentType = true;                                                                        // 14
      twiit.twiitIdComment = tweet.twiitId;                                                            // 15
    }                                                                                                  // 16
                                                                                                       //
    fav = new Object();                                                                                // 18
    fav.idTwiit = "";                                                                                  // 19
    fav.idUserTapFav = [];                                                                             // 20
                                                                                                       //
    if (tweet.type) {                                                                                  // 22
      if (Meteor.user()) {                                                                             // 23
        twiit._id = Twitts.insert({                                                                    // 24
          message: twiit.message,                                                                      // 25
          user: twiit.user,                                                                            // 26
          timestamp: twiit.timestamp,                                                                  // 27
          numFav: twiit.numFav,                                                                        // 28
          numComment: twiit.numComment,                                                                // 29
          commentType: twiit.commentType,                                                              // 30
          twiitIdComment: twiit.twiitIdComment                                                         // 31
        });                                                                                            // 24
      }                                                                                                // 33
    } else {                                                                                           // 34
      if (Meteor.user()) {                                                                             // 35
        twiit._id = Twitts.insert({                                                                    // 36
          message: twiit.message,                                                                      // 37
          user: twiit.user,                                                                            // 38
          timestamp: twiit.timestamp,                                                                  // 39
          numFav: twiit.numFav,                                                                        // 40
          numComment: twiit.numComment                                                                 // 41
        });                                                                                            // 36
      }                                                                                                // 43
    }                                                                                                  // 44
                                                                                                       //
    fav._id = Favs.insert({                                                                            // 46
      idTwiit: twiit._id,                                                                              // 47
      idUserTapFav: fav.idUserTapFav                                                                   // 48
    });                                                                                                // 46
                                                                                                       //
    var notif = new Object();                                                                          // 51
    notif._id = twiit._id;                                                                             // 52
    notif.typeOfNotif = tweet.typeOfNotif;                                                             // 53
    notif.actorNotif = tweet.actorUser;                                                                // 54
    notif.recepNotif = tweet.recepUser;                                                                // 55
                                                                                                       //
    //console.log(notif);                                                                              //
                                                                                                       //
    Meteor.call('createTwiitNotification', notif);                                                     // 59
                                                                                                       //
    if (tweet.type) {                                                                                  // 61
      Twitts.update({ _id: twiit.twiitIdComment }, { $set: { numComment: tweet.numComment } });        // 62
    }                                                                                                  // 63
  }                                                                                                    // 64
});                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userData.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// server/userData.js                                                                                  //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Meteor.methods({                                                                                       // 1
  'findUserFromDB': function findUserFromDB(username) {                                                // 2
    //Meteor._sleepForMs(1000);                                                                        //
    return Meteor.users.findOne({ "username": username });                                             // 4
  },                                                                                                   // 5
                                                                                                       //
  'insertDataUser': function insertDataUser(userData) {                                                // 7
                                                                                                       //
    //BUSCAMOS AL USUARIO QUE SE HA CREADO ANTES PARA RECUPERAR SU _ID                                 //
    Meteor.call('findUserFromDB', userData.userNameProfile, function (err, res) {                      // 10
      userData.userId = res._id;                                                                       // 11
    });                                                                                                // 12
                                                                                                       //
    if (Meteor.user()) {                                                                               // 14
      DataUser.insert({                                                                                // 15
        userId: userData.userId,                                                                       // 16
        userNameProfile: userData.userNameProfile,                                                     // 17
        userName: userData.userName,                                                                   // 18
        userImg: userData.userImg,                                                                     // 19
        userDescription: userData.userDescription                                                      // 20
      });                                                                                              // 15
    }                                                                                                  // 22
  },                                                                                                   // 23
                                                                                                       //
  'findUserData': function findUserData(userName) {                                                    // 25
    return DataUser.findOne({ userNameProfile: userName });                                            // 26
  },                                                                                                   // 27
                                                                                                       //
  'findUserImg': function findUserImg(userImg) {                                                       // 29
    return Images.findOne({ _id: userImg }).imgCode;                                                   // 30
  },                                                                                                   // 31
                                                                                                       //
  'updUserData': function updUserData(newData) {                                                       // 33
    DataUser.update({ _id: newData.userId }, { $set: { userDescription: newData.description, userImg: newData.imgId } });
  },                                                                                                   // 35
                                                                                                       //
  'updUserDataSocialNetworks': function updUserDataSocialNetworks(newData) {                           // 37
    if (newData.userFb != null && newData.userInsta != null && newData.userWhats != null) {            // 38
      DataUser.update({ _id: newData.userId }, { $set: { userFb: newData.userFb, userWhats: newData.userWhats, userInsta: newData.userInsta } });
    } else {                                                                                           // 40
      if (newData.userFb != null) {                                                                    // 41
        DataUser.update({ _id: newData.userId }, { $set: { userFb: newData.userFb } });                // 42
      }                                                                                                // 43
                                                                                                       //
      if (newData.userInsta != null) {                                                                 // 45
        DataUser.update({ _id: newData.userId }, { $set: { userInsta: newData.userInsta } });          // 46
      }                                                                                                // 47
                                                                                                       //
      if (newData.userWhats != null) {                                                                 // 49
        DataUser.update({ _id: newData.userId }, { $set: { userWhats: newData.userWhats } });          // 50
      }                                                                                                // 51
    }                                                                                                  // 52
  },                                                                                                   // 53
                                                                                                       //
  'removeDataSocialNetworks': function removeDataSocialNetworks(newData) {                             // 55
    console.log(newData.userId + " " + newData.propertyToRem);                                         // 56
                                                                                                       //
    switch (newData.propertyToRem) {                                                                   // 58
      case "WhatsApp":                                                                                 // 59
        {                                                                                              // 59
          DataUser.update({ _id: newData.userId }, { $unset: { "userWhats": 1 } });                    // 60
        };                                                                                             // 61
        break;                                                                                         // 62
      case "Instagram":                                                                                // 63
        {                                                                                              // 63
          DataUser.update({ _id: newData.userId }, { $unset: { "userInsta": 1 } });                    // 64
        };                                                                                             // 65
        break;                                                                                         // 66
      case "Facebook":                                                                                 // 67
        {                                                                                              // 67
          DataUser.update({ _id: newData.userId }, { $unset: { "userFb": 1 } });                       // 68
        };                                                                                             // 69
        break;                                                                                         // 70
    }                                                                                                  // 58
                                                                                                       //
    //ESTE COMANDO ES EL QUE SE UTILIZA EN MONGO                                                       //
    //db.dataUser.update({"_id": "rQTzzDMfr4ZkiR7S8"},  {"$unset":{"userWhats":1}});                   //
  },                                                                                                   // 75
                                                                                                       //
  'insertNewImage': function insertNewImage(code) {                                                    // 77
    return Images.insert({                                                                             // 78
      imgCode: code                                                                                    // 79
    });                                                                                                // 78
  }                                                                                                    // 81
});                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userManagement.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// server/userManagement.js                                                                            //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Meteor.methods({                                                                                       // 1
  'tweetsPublish': function tweetsPublish(username) {                                                  // 2
    console.log("Usuario a buscar: " + username);                                                      // 3
    console.log("Resultado: ");                                                                        // 4
    var resul = UserUtils.findTweets(Meteor.user().username);                                          // 5
    return resul.length;                                                                               // 6
  },                                                                                                   // 7
                                                                                                       //
  'usersFollowers': function usersFollowers() {                                                        // 9
    var currentFollowers = UserUtils.findFollowers(Meteor.user().username);                            // 10
    return currentFollowers.length;                                                                    // 11
  },                                                                                                   // 12
                                                                                                       //
  'usersFollowings': function usersFollowings() {                                                      // 14
    var currentFollowings = UserUtils.findFollowings(Meteor.user().username);                          // 15
                                                                                                       //
    return currentFollowings.length;                                                                   // 17
  }                                                                                                    // 18
});                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// server/main.js                                                                                      //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});                            // 1
                                                                                                       //
Meteor.startup(function () {                                                                           // 3
  // code to run on server at startup                                                                  //
  Relationships._ensureIndex({ follower: 1, following: 1 }, { unique: 1 });                            // 5
                                                                                                       //
  Twitts.allow({                                                                                       // 7
    insert: function insert(userId, disconnect) {                                                      // 8
      return true;                                                                                     // 9
    },                                                                                                 // 10
    update: function update(id, doc) {                                                                 // 11
      return true;                                                                                     // 12
    }                                                                                                  // 13
  });                                                                                                  // 7
                                                                                                       //
  Favs.allow({                                                                                         // 16
    insert: function insert(userId, disconnect) {                                                      // 17
      return true;                                                                                     // 18
    },                                                                                                 // 19
    update: function update(userId, doc) {                                                             // 20
      console.log("Update Oper");                                                                      // 21
      return true;                                                                                     // 22
    }                                                                                                  // 23
  });                                                                                                  // 16
                                                                                                       //
  Notifications.allow({                                                                                // 26
    update: function update(userId, doc) {                                                             // 27
      return true;                                                                                     // 28
    }                                                                                                  // 29
  });                                                                                                  // 26
                                                                                                       //
  DataUser.allow({                                                                                     // 32
    insert: function insert(userId, disconnect) {                                                      // 33
      return true;                                                                                     // 34
    }                                                                                                  // 35
  });                                                                                                  // 32
                                                                                                       //
  Images.allow({                                                                                       // 38
    insert: function insert(userId, disconnect) {                                                      // 39
      return true;                                                                                     // 40
    }                                                                                                  // 41
  });                                                                                                  // 38
});                                                                                                    // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/collections/collections.js");
require("./lib/router.js");
require("./lib/userUtils.js");
require("./server/followUsers.js");
require("./server/notifications.js");
require("./server/publications.js");
require("./server/tweetBox.js");
require("./server/userData.js");
require("./server/userManagement.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
