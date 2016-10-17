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
		Meteor.call('findUserData', this.params.userName, function (err, res) {                              // 51
			Session.set('datauser', res);                                                                       // 52
		});                                                                                                  // 53
	}                                                                                                     // 54
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
  var arrAux = favObject.idUserTapFav;                                                                 // 58
  var idFav = favObject._id;                                                                           // 59
                                                                                                       //
  arrAux.push(idUser);                                                                                 // 61
  var num = UserUtils.findNumberFavPerTwiit(id);                                                       // 62
  num++;                                                                                               // 63
                                                                                                       //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                            //
  res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                        // 66
  resT = Twitts.update(id, { $set: { numFav: num } });                                                 // 67
                                                                                                       //
  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                 //
  if (res && resT) {                                                                                   // 70
    resultToUpdate = true;                                                                             // 71
  }                                                                                                    // 72
                                                                                                       //
  return resultToUpdate;                                                                               // 74
};                                                                                                     // 75
                                                                                                       //
UserUtils.removeFavToTwiit = function (id, idUser) {                                                   // 77
  var resultToUpdate = false;                                                                          // 78
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT
  var favObject = UserUtils.findFavsForTwiit(id);                                                      // 80
  var arrAux = favObject.idUserTapFav;                                                                 // 81
  var idFav = favObject._id;                                                                           // 82
                                                                                                       //
  //HAY QUE AVERIGUAR LA POSICION DEL idUser DENTRO DEL ARRAY DE LA BBDD                               //
  var posIdUser = arrAux.indexOf(idUser);                                                              // 85
  //AHORA ELIMINAMOS EL ELEMENTO ASOCIADO A ESA POSICION                                               //
  delete arrAux[posIdUser];                                                                            // 87
                                                                                                       //
  var num = UserUtils.findNumberFavPerTwiit(id);                                                       // 89
  num--;                                                                                               // 90
                                                                                                       //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                            //
  res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                        // 93
  resT = Twitts.update(id, { $set: { numFav: num } });                                                 // 94
                                                                                                       //
  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                 //
  if (res && resT) {                                                                                   // 97
    resultToUpdate = true;                                                                             // 98
  }                                                                                                    // 99
                                                                                                       //
  return resultToUpdate;                                                                               // 101
};                                                                                                     // 102
                                                                                                       //
UserUtils.findTwiitFromNotif = function (id) {                                                         // 104
  var twiitId = Notifications.findOne(id).twiitId;                                                     // 105
  return twiitId;                                                                                      // 106
};                                                                                                     // 107
                                                                                                       //
UserUtils.findNumComment = function (idTweet) {                                                        // 109
  return Twitts.findOne({ _id: idTweet }).numComment;                                                  // 110
};                                                                                                     // 111
                                                                                                       //
//PARA MOSTRAR NOTIFICACIONES EN EL NAVEGADOR WEB                                                      //
UserUtils.createNotifToBrowser = function (typeNotif, userName) {                                      // 114
  if (Notification) {                                                                                  // 115
    if (Notification.permission !== "granted") {                                                       // 116
      Notification.requestPermission();                                                                // 117
    }                                                                                                  // 118
    var title = "TwiitClone";                                                                          // 119
    var bodyNotif = "";                                                                                // 120
                                                                                                       //
    if (typeNotif === "fav") {                                                                         // 122
      bodyNotif = "El usuario " + userName + " ha dado fav a un twiit tuyo";                           // 123
    } else if (typeNotif === "comment") {                                                              // 124
      bodyNotif = "El usuario " + userName + " ha comentado un twiit tuyo";                            // 125
    } else if (typeNotif === "twiit") {                                                                // 126
      bodyNotif = "El usuario " + userName + " ha publicado a un twiit nuevo";                         // 127
    } else if (typeNotif === "moreNotif") {                                                            // 128
      bodyNotif = "Tienes muchas Notificaciones";                                                      // 129
    }                                                                                                  // 130
                                                                                                       //
    var extra = { body: bodyNotif };                                                                   // 132
                                                                                                       //
    var noti = new Notification(title, extra);                                                         // 134
                                                                                                       //
    noti.onclick = function () {                                                                       // 136
      // Al hacer click                                                                                //
      window.location = "/Notifications/" + Meteor.user().username;                                    // 138
    };                                                                                                 // 139
                                                                                                       //
    noti.onclose = {                                                                                   // 141
      // Al cerrar                                                                                     //
    };                                                                                                 // 141
                                                                                                       //
    setTimeout(function () {                                                                           // 145
      noti.close();                                                                                    // 145
    }, 1000);                                                                                          // 145
  }                                                                                                    // 146
};                                                                                                     // 147
                                                                                                       //
UserUtils.findUserFromTwiit = function (twiitId) {                                                     // 149
  return Twitts.findOne({ _id: twiitId }).user;                                                        // 150
};                                                                                                     // 151
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
  'updUserData': function updUserData(newData) {                                                       // 29
    DataUser.update({ _id: newData.userId }, { $set: { userDescription: newData.description } });      // 30
  }                                                                                                    // 31
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
});                                                                                                    // 37
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
