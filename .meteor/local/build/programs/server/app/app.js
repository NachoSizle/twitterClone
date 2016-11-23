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
/*SE ACCEDE POR WINDOW.LOCATION*/                                                                      // 7
Router.route('/whoToFollow', { name: 'followUsers' });                                                 // 8
Router.route('/Profile/:username', {                                                                   // 9
	name: 'userProfile',                                                                                  // 10
	data: function () {                                                                                   // 11
		function data() {                                                                                    // 11
			var user = new Object();                                                                            // 12
			user.name = this.params.username;                                                                   // 13
                                                                                                       //
			var currentUser = Session.get('currentUser');                                                       // 15
                                                                                                       //
			Meteor.call('findUserData', user.name, function (err, res) {                                        // 17
				Session.set('dataUserShowProfile', res);                                                           // 18
			});                                                                                                 // 19
                                                                                                       //
			dataUserShowProfile = Session.get('dataUserShowProfile');                                           // 21
                                                                                                       //
			if (dataUserShowProfile) {                                                                          // 23
				if (dataUserShowProfile.userNameProfile != currentUser) {                                          // 24
					Session.set('showProfileOtherUser', false);                                                       // 25
				} else {                                                                                           // 26
					Session.set('showProfileOtherUser', true);                                                        // 27
				}                                                                                                  // 28
			}                                                                                                   // 29
                                                                                                       //
			return user;                                                                                        // 31
		}                                                                                                    // 32
                                                                                                       //
		return data;                                                                                         // 11
	}()                                                                                                   // 11
});                                                                                                    // 9
Router.route('/Notifications/:userName', {                                                             // 34
	name: 'twiitPageNew',                                                                                 // 35
	data: function () {                                                                                   // 36
		function data() {                                                                                    // 36
			var user = new Object();                                                                            // 37
			user.name = this.params.userName;                                                                   // 38
			return user;                                                                                        // 39
		}                                                                                                    // 40
                                                                                                       //
		return data;                                                                                         // 36
	}()                                                                                                   // 36
});                                                                                                    // 34
                                                                                                       //
Router.route('/RequestWhatsApp/:userName', {                                                           // 43
	name: 'whatsAppRequestPage',                                                                          // 44
	data: function () {                                                                                   // 45
		function data() {                                                                                    // 45
			var user = new Object();                                                                            // 46
			user.name = this.params.userName;                                                                   // 47
			return user;                                                                                        // 48
		}                                                                                                    // 49
                                                                                                       //
		return data;                                                                                         // 45
	}()                                                                                                   // 45
});                                                                                                    // 43
                                                                                                       //
//Router.route('/Comments', {name: 'twiitCommentPage'});                                               // 52
/*SE ACCEDE POR PATHFOR*/                                                                              // 53
Router.route('/Comments/:_id', {                                                                       // 54
	name: 'twiitCommentPage',                                                                             // 55
	data: function () {                                                                                   // 56
		function data() {                                                                                    // 56
			var mode = Session.get('notificationsModeOn');                                                      // 57
			var idTwiit = new Object();                                                                         // 58
			idTwiit._id = this.params._id;                                                                      // 59
                                                                                                       //
			if (mode) {                                                                                         // 61
				idTwiit.mode = mode;                                                                               // 62
			}                                                                                                   // 63
                                                                                                       //
			return idTwiit;                                                                                     // 65
		}                                                                                                    // 66
                                                                                                       //
		return data;                                                                                         // 56
	}()                                                                                                   // 56
});                                                                                                    // 54
Router.route('/twiits/:_id', {                                                                         // 68
	name: 'twiitPage',                                                                                    // 69
	data: function () {                                                                                   // 70
		function data() {                                                                                    // 70
			return this.params;                                                                                 // 71
		}                                                                                                    // 72
                                                                                                       //
		return data;                                                                                         // 70
	}()                                                                                                   // 70
});                                                                                                    // 68
                                                                                                       //
Router.route('/editProfile/:userName', {                                                               // 75
	name: 'editProfile',                                                                                  // 76
	data: function () {                                                                                   // 77
		function data() {                                                                                    // 77
			return this.params.userName;                                                                        // 78
		}                                                                                                    // 79
                                                                                                       //
		return data;                                                                                         // 77
	}()                                                                                                   // 77
});                                                                                                    // 75
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
//SIGUIENDO                                                                                            // 12
UserUtils.findFollowings = function (username) {                                                       // 13
  var currentFollowings = Relationships.find({ follower: username }).fetch().map(function (data) {     // 14
    return data.following;                                                                             // 15
  });                                                                                                  // 16
  //console.log("Siguiendo: ");                                                                        // 17
  //console.log(currentFollowings);                                                                    // 18
                                                                                                       //
  return currentFollowings;                                                                            // 20
};                                                                                                     // 21
//SEGUIDORES                                                                                           // 22
UserUtils.findFollowers = function (username) {                                                        // 23
  var currentFollowers = Relationships.find({ following: username }).fetch().map(function (data) {     // 24
    return data.following;                                                                             // 25
  });                                                                                                  // 26
  //console.log("Seguidores: ");                                                                       // 27
  //console.log(currentFollowers);                                                                     // 28
                                                                                                       //
  return currentFollowers;                                                                             // 30
};                                                                                                     // 31
                                                                                                       //
UserUtils.findNotifications = function (username) {                                                    // 33
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                     // 35
                                                                                                       //
UserUtils.findNotifForTypeNotif = function (username, type) {                                          // 37
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false, typeOfNotif: type }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                     // 39
                                                                                                       //
UserUtils.findOneNotification = function (username) {                                                  // 41
  return Notifications.findOne({ recepNotif: username, read: false, isOwnTwiit: false }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                     // 43
                                                                                                       //
UserUtils.findNumberNotif = function (username) {                                                      // 45
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false, $or: [{ typeOfNotif: 'twiit' }, { typeOfNotif: 'fav' }, { typeOfNotif: 'comment' }] }).count();
};                                                                                                     // 47
                                                                                                       //
UserUtils.findWhatsAppNotifications = function (notifId) {                                             // 49
  return Notifications.findOne({ _id: notifId });                                                      // 50
};                                                                                                     // 51
                                                                                                       //
UserUtils.findNumberFavPerTwiit = function (idTwiit) {                                                 // 53
  var twiitNumFav = Twitts.findOne({ _id: idTwiit }).numFav;                                           // 54
  return twiitNumFav;                                                                                  // 55
};                                                                                                     // 56
                                                                                                       //
UserUtils.findFavsForTwiit = function (id) {                                                           // 58
  return Favs.findOne({ idTwiit: id });                                                                // 59
};                                                                                                     // 60
                                                                                                       //
UserUtils.addFavToTwiit = function (id, idUser) {                                                      // 62
  var resultToUpdate = false;                                                                          // 63
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT
  var favObject = UserUtils.findFavsForTwiit(id);                                                      // 65
                                                                                                       //
  if (!favObject) {                                                                                    // 67
    //console.log("No tiene FAVS");                                                                    // 68
                                                                                                       //
  } else {                                                                                             // 70
    var arrAux = favObject.idUserTapFav;                                                               // 71
    var idFav = favObject._id;                                                                         // 72
                                                                                                       //
    arrAux.push(idUser);                                                                               // 74
    var num = UserUtils.findNumberFavPerTwiit(id);                                                     // 75
    num++;                                                                                             // 76
                                                                                                       //
    //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                          // 78
    res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                      // 79
    resT = Twitts.update(id, { $set: { numFav: num } });                                               // 80
                                                                                                       //
    //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                               // 82
    if (res && resT) {                                                                                 // 83
      resultToUpdate = true;                                                                           // 84
    }                                                                                                  // 85
  }                                                                                                    // 86
                                                                                                       //
  return resultToUpdate;                                                                               // 88
};                                                                                                     // 89
                                                                                                       //
UserUtils.removeFavToTwiit = function (id, idUser) {                                                   // 91
  var resultToUpdate = false;                                                                          // 92
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT
  var favObject = UserUtils.findFavsForTwiit(id);                                                      // 94
  var arrAux = favObject.idUserTapFav;                                                                 // 95
  var idFav = favObject._id;                                                                           // 96
                                                                                                       //
  //HAY QUE AVERIGUAR LA POSICION DEL idUser DENTRO DEL ARRAY DE LA BBDD                               // 98
  var posIdUser = arrAux.indexOf(idUser);                                                              // 99
  //AHORA ELIMINAMOS EL ELEMENTO ASOCIADO A ESA POSICION                                               // 100
  delete arrAux[posIdUser];                                                                            // 101
                                                                                                       //
  var num = UserUtils.findNumberFavPerTwiit(id);                                                       // 103
  num--;                                                                                               // 104
                                                                                                       //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                            // 106
  res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                        // 107
  resT = Twitts.update(id, { $set: { numFav: num } });                                                 // 108
                                                                                                       //
  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                 // 110
  if (res && resT) {                                                                                   // 111
    resultToUpdate = true;                                                                             // 112
  }                                                                                                    // 113
                                                                                                       //
  return resultToUpdate;                                                                               // 115
};                                                                                                     // 116
                                                                                                       //
UserUtils.findTwiitFromNotif = function (id) {                                                         // 118
  var twiitId = Notifications.findOne(id).twiitId;                                                     // 119
  return twiitId;                                                                                      // 120
};                                                                                                     // 121
                                                                                                       //
UserUtils.findNumComment = function (idTweet) {                                                        // 123
  return Twitts.findOne({ _id: idTweet }).numComment;                                                  // 124
};                                                                                                     // 125
                                                                                                       //
//PARA MOSTRAR NOTIFICACIONES EN EL NAVEGADOR WEB                                                      // 127
UserUtils.createNotifToBrowser = function (typeNotif, userName) {                                      // 128
  if (Notification) {                                                                                  // 129
    if (Notification.permission !== "granted") {                                                       // 130
      Notification.requestPermission();                                                                // 131
    }                                                                                                  // 132
    var title = "TwiitClone";                                                                          // 133
    var bodyNotif = "";                                                                                // 134
                                                                                                       //
    if (typeNotif === "fav") {                                                                         // 136
      bodyNotif = "El usuario " + userName + " ha dado fav a un twiit tuyo";                           // 137
    } else if (typeNotif === "comment") {                                                              // 138
      bodyNotif = "El usuario " + userName + " ha comentado un twiit tuyo";                            // 139
    } else if (typeNotif === "twiit") {                                                                // 140
      bodyNotif = "El usuario " + userName + " ha publicado a un twiit nuevo";                         // 141
    } else if (typeNotif === "moreNotif") {                                                            // 142
      bodyNotif = "Tienes muchas Notificaciones";                                                      // 143
    }                                                                                                  // 144
                                                                                                       //
    var extra = { body: bodyNotif };                                                                   // 146
                                                                                                       //
    var noti = new Notification(title, extra);                                                         // 148
                                                                                                       //
    noti.onclick = function () {                                                                       // 150
      // Al hacer click                                                                                // 151
      window.location = "/Notifications/" + Meteor.user().username;                                    // 152
    };                                                                                                 // 153
                                                                                                       //
    noti.onclose = {                                                                                   // 155
      // Al cerrar                                                                                     // 156
    };                                                                                                 // 155
                                                                                                       //
    setTimeout(function () {                                                                           // 159
      noti.close();                                                                                    // 159
    }, 5000);                                                                                          // 159
  }                                                                                                    // 160
};                                                                                                     // 161
                                                                                                       //
UserUtils.findUserFromTwiit = function (twiitId) {                                                     // 163
  return Twitts.findOne({ _id: twiitId }).user;                                                        // 164
};                                                                                                     // 165
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"followUsers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// server/followUsers.js                                                                               //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Meteor.methods({                                                                                       // 1
  'findUser': function () {                                                                            // 2
    function findUser(username) {                                                                      // 2
      return Meteor.users.findOne({                                                                    // 3
        username: username                                                                             // 4
      }, {                                                                                             // 3
        fields: { 'username': 1 }                                                                      // 6
      });                                                                                              // 5
    }                                                                                                  // 8
                                                                                                       //
    return findUser;                                                                                   // 2
  }(),                                                                                                 // 2
                                                                                                       //
  'followUser': function () {                                                                          // 10
    function followUser(username) {                                                                    // 10
      Relationships.insert({                                                                           // 11
        follower: Meteor.user().username,                                                              // 12
        following: username                                                                            // 13
      });                                                                                              // 11
    }                                                                                                  // 15
                                                                                                       //
    return followUser;                                                                                 // 10
  }(),                                                                                                 // 10
                                                                                                       //
  'recommendUsers': function () {                                                                      // 17
    function recommendUsers() {                                                                        // 17
      if (Meteor.user()) {                                                                             // 18
        var currentFollowings = UserUtils.findFollowings(Meteor.user().username);                      // 19
                                                                                                       //
        var recUsers = Meteor.users.find({                                                             // 21
          username: {                                                                                  // 22
            $nin: currentFollowings                                                                    // 23
          }                                                                                            // 22
        }, {                                                                                           // 21
          fields: { 'username': 1 },                                                                   // 26
          limit: 5                                                                                     // 27
        }).fetch();                                                                                    // 25
        return recUsers;                                                                               // 29
      }                                                                                                // 30
    }                                                                                                  // 31
                                                                                                       //
    return recommendUsers;                                                                             // 17
  }()                                                                                                  // 17
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
  'createTwiitNotification': function () {                                                             // 2
    function createTwiitNotification(notif) {                                                          // 2
      var twiit = Twitts.findOne(notif._id);                                                           // 3
      var typeNotif = notif.typeOfNotif;                                                               // 4
                                                                                                       //
      if (notif.recepNotif === notif.actorNotif) {                                                     // 6
        isOwn = true;                                                                                  // 7
      } else {                                                                                         // 8
        isOwn = false;                                                                                 // 9
      }                                                                                                // 10
                                                                                                       //
      Notifications.insert({                                                                           // 12
        twiitMessage: twiit.message,                                                                   // 13
        twiitId: twiit._id,                                                                            // 14
        recepNotif: notif.recepNotif,                                                                  // 15
        actorNotif: notif.actorNotif,                                                                  // 16
        twiitTimeStamp: twiit.timestamp,                                                               // 17
        typeOfNotif: typeNotif,                                                                        // 18
        read: false,                                                                                   // 19
        isOwnTwiit: isOwn                                                                              // 20
      });                                                                                              // 12
    }                                                                                                  // 23
                                                                                                       //
    return createTwiitNotification;                                                                    // 2
  }(),                                                                                                 // 2
                                                                                                       //
  'createWhatsAppNotification': function () {                                                          // 25
    function createWhatsAppNotification(notif) {                                                       // 25
                                                                                                       //
      Notifications.insert({                                                                           // 27
        recepNotif: notif.recepNotif,                                                                  // 28
        actorNotif: notif.actorNotif,                                                                  // 29
        timeStamp: notif.timestamp,                                                                    // 30
        typeOfNotif: notif.typeOfNotif,                                                                // 31
        read: false,                                                                                   // 32
        isOwnTwiit: false                                                                              // 33
      });                                                                                              // 27
    }                                                                                                  // 36
                                                                                                       //
    return createWhatsAppNotification;                                                                 // 25
  }(),                                                                                                 // 25
                                                                                                       //
  'createResponseWhatsAppNotification': function () {                                                  // 38
    function createResponseWhatsAppNotification(notif) {                                               // 38
                                                                                                       //
      Notifications.insert({                                                                           // 40
        recepNotif: notif.recepNotif,                                                                  // 41
        actorNotif: notif.actorNotif,                                                                  // 42
        timeStamp: notif.timestamp,                                                                    // 43
        typeOfNotif: notif.typeOfNotif,                                                                // 44
        stateResponse: notif.stateResponse,                                                            // 45
        idNotifRequestWhatsApp: notif.idNotifRequestWhatsApp,                                          // 46
        read: false,                                                                                   // 47
        isOwnTwiit: false                                                                              // 48
      });                                                                                              // 40
    }                                                                                                  // 51
                                                                                                       //
    return createResponseWhatsAppNotification;                                                         // 38
  }()                                                                                                  // 38
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
    //var currentFollowings = UserUtils.findFollowings(username);                                      // 13
                                                                                                       //
    //return Twitts.find({user: { $in: currentFollowings }});                                          // 15
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
Meteor.publish('whatsAppNotifications', function (notifName) {                                         // 34
  return Notifications.find({ recepNotif: notifName }, { read: false });                               // 35
});                                                                                                    // 36
                                                                                                       //
Meteor.publish('favs', function () {                                                                   // 38
  return Favs.find();                                                                                  // 39
});                                                                                                    // 40
                                                                                                       //
Meteor.publish('dataUser', function () {                                                               // 42
  return DataUser.find();                                                                              // 43
});                                                                                                    // 44
                                                                                                       //
Meteor.publish('images', function () {                                                                 // 46
  return Images.find();                                                                                // 47
});                                                                                                    // 48
/*                                                                                                     // 49
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
  'insertTweet': function () {                                                                         // 2
    function insertTweet(tweet) {                                                                      // 2
      var insertComment = false;                                                                       // 3
                                                                                                       //
      twiit = new Object();                                                                            // 5
      twiit.message = tweet.message;                                                                   // 6
      twiit.user = Meteor.user().username;                                                             // 7
      twiit.timestamp = new Date();                                                                    // 8
      twiit.numFav = 0;                                                                                // 9
      twiit.numComment = 0;                                                                            // 10
                                                                                                       //
      //SE EJECUTA CUANDO SE QUIERE INSERTAR UN TWIIT DESDE UN COMENTARIO                              // 12
      if (tweet.type) {                                                                                // 13
        twiit.commentType = true;                                                                      // 14
        twiit.twiitIdComment = tweet.twiitId;                                                          // 15
      }                                                                                                // 16
                                                                                                       //
      fav = new Object();                                                                              // 18
      fav.idTwiit = "";                                                                                // 19
      fav.idUserTapFav = [];                                                                           // 20
                                                                                                       //
      if (tweet.type) {                                                                                // 22
        if (Meteor.user()) {                                                                           // 23
          twiit._id = Twitts.insert({                                                                  // 24
            message: twiit.message,                                                                    // 25
            user: twiit.user,                                                                          // 26
            timestamp: twiit.timestamp,                                                                // 27
            numFav: twiit.numFav,                                                                      // 28
            numComment: twiit.numComment,                                                              // 29
            commentType: twiit.commentType,                                                            // 30
            twiitIdComment: twiit.twiitIdComment                                                       // 31
          });                                                                                          // 24
        }                                                                                              // 33
      } else {                                                                                         // 34
        if (Meteor.user()) {                                                                           // 35
          twiit._id = Twitts.insert({                                                                  // 36
            message: twiit.message,                                                                    // 37
            user: twiit.user,                                                                          // 38
            timestamp: twiit.timestamp,                                                                // 39
            numFav: twiit.numFav,                                                                      // 40
            numComment: twiit.numComment                                                               // 41
          });                                                                                          // 36
        }                                                                                              // 43
      }                                                                                                // 44
                                                                                                       //
      fav._id = Favs.insert({                                                                          // 46
        idTwiit: twiit._id,                                                                            // 47
        idUserTapFav: fav.idUserTapFav                                                                 // 48
      });                                                                                              // 46
                                                                                                       //
      var notif = new Object();                                                                        // 51
      notif._id = twiit._id;                                                                           // 52
      notif.typeOfNotif = tweet.typeOfNotif;                                                           // 53
      notif.actorNotif = tweet.actorUser;                                                              // 54
      notif.recepNotif = tweet.recepUser;                                                              // 55
                                                                                                       //
      //console.log(notif);                                                                            // 57
                                                                                                       //
      Meteor.call('createTwiitNotification', notif);                                                   // 59
                                                                                                       //
      if (tweet.type) {                                                                                // 61
        Twitts.update({ _id: twiit.twiitIdComment }, { $set: { numComment: tweet.numComment } });      // 62
      }                                                                                                // 63
    }                                                                                                  // 64
                                                                                                       //
    return insertTweet;                                                                                // 2
  }()                                                                                                  // 2
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
  'findUserFromDB': function () {                                                                      // 2
    function findUserFromDB(username) {                                                                // 2
      //Meteor._sleepForMs(1000);                                                                      // 3
      return Meteor.users.findOne({ "username": username });                                           // 4
    }                                                                                                  // 5
                                                                                                       //
    return findUserFromDB;                                                                             // 2
  }(),                                                                                                 // 2
                                                                                                       //
  'insertDataUser': function () {                                                                      // 7
    function insertDataUser(userData) {                                                                // 7
                                                                                                       //
      //BUSCAMOS AL USUARIO QUE SE HA CREADO ANTES PARA RECUPERAR SU _ID                               // 9
      Meteor.call('findUserFromDB', userData.userNameProfile, function (err, res) {                    // 10
        userData.userId = res._id;                                                                     // 11
      });                                                                                              // 12
                                                                                                       //
      if (Meteor.user()) {                                                                             // 14
        DataUser.insert({                                                                              // 15
          userId: userData.userId,                                                                     // 16
          userNameProfile: userData.userNameProfile,                                                   // 17
          userName: userData.userName,                                                                 // 18
          userImg: userData.userImg,                                                                   // 19
          userDescription: userData.userDescription,                                                   // 20
          showWhatsTo: []                                                                              // 21
        });                                                                                            // 15
      }                                                                                                // 23
    }                                                                                                  // 24
                                                                                                       //
    return insertDataUser;                                                                             // 7
  }(),                                                                                                 // 7
                                                                                                       //
  'findUserData': function () {                                                                        // 26
    function findUserData(userName) {                                                                  // 26
      return DataUser.findOne({ userNameProfile: userName });                                          // 27
    }                                                                                                  // 28
                                                                                                       //
    return findUserData;                                                                               // 26
  }(),                                                                                                 // 26
                                                                                                       //
  'findUserDataWithId': function () {                                                                  // 30
    function findUserDataWithId(userId) {                                                              // 30
      return DataUser.findOne({ userId: userId });                                                     // 31
    }                                                                                                  // 32
                                                                                                       //
    return findUserDataWithId;                                                                         // 30
  }(),                                                                                                 // 30
                                                                                                       //
  'findUserImg': function () {                                                                         // 34
    function findUserImg(userImg) {                                                                    // 34
      return Images.findOne({ _id: userImg }).imgCode;                                                 // 35
    }                                                                                                  // 36
                                                                                                       //
    return findUserImg;                                                                                // 34
  }(),                                                                                                 // 34
                                                                                                       //
  'updUserData': function () {                                                                         // 38
    function updUserData(newData) {                                                                    // 38
      DataUser.update({ _id: newData.userId }, { $set: { userDescription: newData.description, userImg: newData.imgId } });
    }                                                                                                  // 40
                                                                                                       //
    return updUserData;                                                                                // 38
  }(),                                                                                                 // 38
                                                                                                       //
  'updUserDataSocialNetworks': function () {                                                           // 42
    function updUserDataSocialNetworks(newData) {                                                      // 42
      if (newData.userFb != null && newData.userInsta != null && newData.userWhats != null) {          // 43
        DataUser.update({ _id: newData.userId }, { $set: { userFb: newData.userFb, userWhats: newData.userWhats, userInsta: newData.userInsta } });
      } else {                                                                                         // 45
        if (newData.userFb != null) {                                                                  // 46
          DataUser.update({ _id: newData.userId }, { $set: { userFb: newData.userFb } });              // 47
        }                                                                                              // 48
                                                                                                       //
        if (newData.userInsta != null) {                                                               // 50
          DataUser.update({ _id: newData.userId }, { $set: { userInsta: newData.userInsta } });        // 51
        }                                                                                              // 52
                                                                                                       //
        if (newData.userWhats != null) {                                                               // 54
          DataUser.update({ _id: newData.userId }, { $set: { userWhats: newData.userWhats } });        // 55
        }                                                                                              // 56
      }                                                                                                // 57
    }                                                                                                  // 58
                                                                                                       //
    return updUserDataSocialNetworks;                                                                  // 42
  }(),                                                                                                 // 42
                                                                                                       //
  'removeDataSocialNetworks': function () {                                                            // 60
    function removeDataSocialNetworks(newData) {                                                       // 60
      console.log(newData.userId + " " + newData.propertyToRem);                                       // 61
                                                                                                       //
      switch (newData.propertyToRem) {                                                                 // 63
        case "WhatsApp":                                                                               // 64
          {                                                                                            // 64
            DataUser.update({ _id: newData.userId }, { $unset: { "userWhats": 1 } });                  // 65
          };                                                                                           // 66
          break;                                                                                       // 67
        case "Instagram":                                                                              // 68
          {                                                                                            // 68
            DataUser.update({ _id: newData.userId }, { $unset: { "userInsta": 1 } });                  // 69
          };                                                                                           // 70
          break;                                                                                       // 71
        case "Facebook":                                                                               // 72
          {                                                                                            // 72
            DataUser.update({ _id: newData.userId }, { $unset: { "userFb": 1 } });                     // 73
          };                                                                                           // 74
          break;                                                                                       // 75
      }                                                                                                // 63
                                                                                                       //
      //ESTE COMANDO ES EL QUE SE UTILIZA EN MONGO                                                     // 78
      //db.dataUser.update({"_id": "rQTzzDMfr4ZkiR7S8"},  {"$unset":{"userWhats":1}});                 // 79
    }                                                                                                  // 80
                                                                                                       //
    return removeDataSocialNetworks;                                                                   // 60
  }(),                                                                                                 // 60
                                                                                                       //
  'insertNewImage': function () {                                                                      // 82
    function insertNewImage(code) {                                                                    // 82
      return Images.insert({                                                                           // 83
        imgCode: code                                                                                  // 84
      });                                                                                              // 83
    }                                                                                                  // 86
                                                                                                       //
    return insertNewImage;                                                                             // 82
  }(),                                                                                                 // 82
                                                                                                       //
  'removeThisUser': function () {                                                                      // 88
    function removeThisUser(userToRemove) {                                                            // 88
      //HAY QUE ELIMINAR EL USUARIO DE dataUser Y DE users                                             // 89
      var idImgUser = DataUser.findOne({ userId: userToRemove.id }).userImg;                           // 90
                                                                                                       //
      if (idImgUser) {                                                                                 // 92
        Images.remove({ _id: idImgUser });                                                             // 93
      }                                                                                                // 94
                                                                                                       //
      Notifications.remove({ recepNotif: userToRemove.name });                                         // 96
      Relationships.remove({ follower: userToRemove.name });                                           // 97
      Relationships.remove({ following: userToRemove.name });                                          // 98
                                                                                                       //
      Favs.find({ idUserTapFav: userToRemove.id }).fetch().map(function (data) {                       // 100
        if (data.idUserTapFav) {                                                                       // 101
          var aux = data.idUserTapFav;                                                                 // 102
          var pos = aux.indexOf(userToRemove.id);                                                      // 103
          if (pos != -1) {                                                                             // 104
            UserUtils.removeFavToTwiit(data.idTwiit, userToRemove.id);                                 // 105
          }                                                                                            // 106
        }                                                                                              // 107
      });                                                                                              // 108
                                                                                                       //
      Twitts.remove({ user: userToRemove.name });                                                      // 110
      Meteor.users.remove({ _id: userToRemove.id });                                                   // 111
      DataUser.remove({ userId: userToRemove.id });                                                    // 112
    }                                                                                                  // 113
                                                                                                       //
    return removeThisUser;                                                                             // 88
  }(),                                                                                                 // 88
                                                                                                       //
  'updateArrayWhatsAppAuthorize': function () {                                                        // 115
    function updateArrayWhatsAppAuthorize(data) {                                                      // 115
      var user = DataUser.findOne({ userNameProfile: data.user });                                     // 116
      var arrShowWhats = user.showWhatsTo;                                                             // 117
      console.log("Array: ");                                                                          // 118
      console.log(arrShowWhats);                                                                       // 119
                                                                                                       //
      //BUSCAMOS EL USUARIO QUE VAMOS A AÑADIR AL ARRAY                                                // 121
      var userToAdd = DataUser.findOne({ userNameProfile: data.userToShow });                          // 122
      arrShowWhats.push(userToAdd.userId);                                                             // 123
                                                                                                       //
      console.log(arrShowWhats);                                                                       // 125
      console.log(user);                                                                               // 126
                                                                                                       //
      DataUser.update({ userId: user.userId }, { $set: { showWhatsTo: arrShowWhats } });               // 128
    }                                                                                                  // 130
                                                                                                       //
    return updateArrayWhatsAppAuthorize;                                                               // 115
  }(),                                                                                                 // 115
                                                                                                       //
  'updateShowWhatsTo': function () {                                                                   // 132
    function updateShowWhatsTo(data) {                                                                 // 132
      DataUser.update({ userId: data.userId }, { $set: { showWhatsTo: data.showWhats } });             // 133
    }                                                                                                  // 134
                                                                                                       //
    return updateShowWhatsTo;                                                                          // 132
  }()                                                                                                  // 132
                                                                                                       //
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
  'tweetsPublish': function () {                                                                       // 2
    function tweetsPublish(username) {                                                                 // 2
      console.log("Usuario a buscar: " + username);                                                    // 3
      console.log("Resultado: ");                                                                      // 4
      var resul = UserUtils.findTweets(Meteor.user().username);                                        // 5
      return resul.length;                                                                             // 6
    }                                                                                                  // 7
                                                                                                       //
    return tweetsPublish;                                                                              // 2
  }(),                                                                                                 // 2
                                                                                                       //
  'usersFollowers': function () {                                                                      // 9
    function usersFollowers(username) {                                                                // 9
      var currentFollowers = UserUtils.findFollowers(username);                                        // 10
      return currentFollowers.length;                                                                  // 11
    }                                                                                                  // 12
                                                                                                       //
    return usersFollowers;                                                                             // 9
  }(),                                                                                                 // 9
                                                                                                       //
  'usersFollowings': function () {                                                                     // 14
    function usersFollowings(username) {                                                               // 14
      var currentFollowings = UserUtils.findFollowings(username);                                      // 15
                                                                                                       //
      return currentFollowings.length;                                                                 // 17
    }                                                                                                  // 18
                                                                                                       //
    return usersFollowings;                                                                            // 14
  }()                                                                                                  // 14
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
  // code to run on server at startup                                                                  // 4
  Relationships._ensureIndex({ follower: 1, following: 1 }, { unique: 1 });                            // 5
                                                                                                       //
  Twitts.allow({                                                                                       // 7
    insert: function () {                                                                              // 8
      function insert(userId, disconnect) {                                                            // 8
        return true;                                                                                   // 9
      }                                                                                                // 10
                                                                                                       //
      return insert;                                                                                   // 8
    }(),                                                                                               // 8
    update: function () {                                                                              // 11
      function update(id, doc) {                                                                       // 11
        return true;                                                                                   // 12
      }                                                                                                // 13
                                                                                                       //
      return update;                                                                                   // 11
    }()                                                                                                // 11
                                                                                                       //
  });                                                                                                  // 7
                                                                                                       //
  Favs.allow({                                                                                         // 17
    insert: function () {                                                                              // 18
      function insert(userId, disconnect) {                                                            // 18
        return true;                                                                                   // 19
      }                                                                                                // 20
                                                                                                       //
      return insert;                                                                                   // 18
    }(),                                                                                               // 18
    update: function () {                                                                              // 21
      function update(userId, doc) {                                                                   // 21
        console.log("Update Oper");                                                                    // 22
        return true;                                                                                   // 23
      }                                                                                                // 24
                                                                                                       //
      return update;                                                                                   // 21
    }()                                                                                                // 21
  });                                                                                                  // 17
                                                                                                       //
  Notifications.allow({                                                                                // 27
    update: function () {                                                                              // 28
      function update(userId, doc) {                                                                   // 28
        return true;                                                                                   // 29
      }                                                                                                // 30
                                                                                                       //
      return update;                                                                                   // 28
    }()                                                                                                // 28
  });                                                                                                  // 27
                                                                                                       //
  DataUser.allow({                                                                                     // 33
    insert: function () {                                                                              // 34
      function insert(userId, disconnect) {                                                            // 34
        return true;                                                                                   // 35
      }                                                                                                // 36
                                                                                                       //
      return insert;                                                                                   // 34
    }(),                                                                                               // 34
    update: function () {                                                                              // 37
      function update(userId, doc) {                                                                   // 37
        return true;                                                                                   // 38
      }                                                                                                // 39
                                                                                                       //
      return update;                                                                                   // 37
    }()                                                                                                // 37
                                                                                                       //
  });                                                                                                  // 33
                                                                                                       //
  Images.allow({                                                                                       // 43
    insert: function () {                                                                              // 44
      function insert(userId, disconnect) {                                                            // 44
        return true;                                                                                   // 45
      }                                                                                                // 46
                                                                                                       //
      return insert;                                                                                   // 44
    }()                                                                                                // 44
  });                                                                                                  // 43
});                                                                                                    // 48
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
