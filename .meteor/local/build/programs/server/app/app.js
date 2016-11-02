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
//Router.route('/Comments', {name: 'twiitCommentPage'});                                               // 42
/*SE ACCEDE POR PATHFOR*/                                                                              // 43
Router.route('/Comments/:_id', {                                                                       // 44
	name: 'twiitCommentPage',                                                                             // 45
	data: function () {                                                                                   // 46
		function data() {                                                                                    // 46
			var mode = Session.get('notificationsModeOn');                                                      // 47
			var idTwiit = new Object();                                                                         // 48
			idTwiit._id = this.params._id;                                                                      // 49
                                                                                                       //
			if (mode) {                                                                                         // 51
				idTwiit.mode = mode;                                                                               // 52
			}                                                                                                   // 53
                                                                                                       //
			return idTwiit;                                                                                     // 55
		}                                                                                                    // 56
                                                                                                       //
		return data;                                                                                         // 46
	}()                                                                                                   // 46
});                                                                                                    // 44
Router.route('/twiits/:_id', {                                                                         // 58
	name: 'twiitPage',                                                                                    // 59
	data: function () {                                                                                   // 60
		function data() {                                                                                    // 60
			return this.params;                                                                                 // 61
		}                                                                                                    // 62
                                                                                                       //
		return data;                                                                                         // 60
	}()                                                                                                   // 60
});                                                                                                    // 58
                                                                                                       //
Router.route('/editProfile/:userName', {                                                               // 65
	name: 'editProfile',                                                                                  // 66
	data: function () {                                                                                   // 67
		function data() {                                                                                    // 67
			return this.params.userName;                                                                        // 68
		}                                                                                                    // 69
                                                                                                       //
		return data;                                                                                         // 67
	}()                                                                                                   // 67
});                                                                                                    // 65
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
    //console.log("No tiene FAVS");                                                                    // 60
                                                                                                       //
  } else {                                                                                             // 62
    var arrAux = favObject.idUserTapFav;                                                               // 63
    var idFav = favObject._id;                                                                         // 64
                                                                                                       //
    arrAux.push(idUser);                                                                               // 66
    var num = UserUtils.findNumberFavPerTwiit(id);                                                     // 67
    num++;                                                                                             // 68
                                                                                                       //
    //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                          // 70
    res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                      // 71
    resT = Twitts.update(id, { $set: { numFav: num } });                                               // 72
                                                                                                       //
    //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                               // 74
    if (res && resT) {                                                                                 // 75
      resultToUpdate = true;                                                                           // 76
    }                                                                                                  // 77
  }                                                                                                    // 78
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
  //HAY QUE AVERIGUAR LA POSICION DEL idUser DENTRO DEL ARRAY DE LA BBDD                               // 90
  var posIdUser = arrAux.indexOf(idUser);                                                              // 91
  //AHORA ELIMINAMOS EL ELEMENTO ASOCIADO A ESA POSICION                                               // 92
  delete arrAux[posIdUser];                                                                            // 93
                                                                                                       //
  var num = UserUtils.findNumberFavPerTwiit(id);                                                       // 95
  num--;                                                                                               // 96
                                                                                                       //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                            // 98
  res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                        // 99
  resT = Twitts.update(id, { $set: { numFav: num } });                                                 // 100
                                                                                                       //
  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                 // 102
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
//PARA MOSTRAR NOTIFICACIONES EN EL NAVEGADOR WEB                                                      // 119
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
      // Al hacer click                                                                                // 143
      window.location = "/Notifications/" + Meteor.user().username;                                    // 144
    };                                                                                                 // 145
                                                                                                       //
    noti.onclose = {                                                                                   // 147
      // Al cerrar                                                                                     // 148
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
  }()                                                                                                  // 2
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
/*                                                                                                     // 45
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
          userDescription: userData.userDescription                                                    // 20
        });                                                                                            // 15
      }                                                                                                // 22
    }                                                                                                  // 23
                                                                                                       //
    return insertDataUser;                                                                             // 7
  }(),                                                                                                 // 7
                                                                                                       //
  'findUserData': function () {                                                                        // 25
    function findUserData(userName) {                                                                  // 25
      return DataUser.findOne({ userNameProfile: userName });                                          // 26
    }                                                                                                  // 27
                                                                                                       //
    return findUserData;                                                                               // 25
  }(),                                                                                                 // 25
                                                                                                       //
  'findUserImg': function () {                                                                         // 29
    function findUserImg(userImg) {                                                                    // 29
      return Images.findOne({ _id: userImg }).imgCode;                                                 // 30
    }                                                                                                  // 31
                                                                                                       //
    return findUserImg;                                                                                // 29
  }(),                                                                                                 // 29
                                                                                                       //
  'updUserData': function () {                                                                         // 33
    function updUserData(newData) {                                                                    // 33
      DataUser.update({ _id: newData.userId }, { $set: { userDescription: newData.description, userImg: newData.imgId } });
    }                                                                                                  // 35
                                                                                                       //
    return updUserData;                                                                                // 33
  }(),                                                                                                 // 33
                                                                                                       //
  'updUserDataSocialNetworks': function () {                                                           // 37
    function updUserDataSocialNetworks(newData) {                                                      // 37
      if (newData.userFb != null && newData.userInsta != null && newData.userWhats != null) {          // 38
        DataUser.update({ _id: newData.userId }, { $set: { userFb: newData.userFb, userWhats: newData.userWhats, userInsta: newData.userInsta } });
      } else {                                                                                         // 40
        if (newData.userFb != null) {                                                                  // 41
          DataUser.update({ _id: newData.userId }, { $set: { userFb: newData.userFb } });              // 42
        }                                                                                              // 43
                                                                                                       //
        if (newData.userInsta != null) {                                                               // 45
          DataUser.update({ _id: newData.userId }, { $set: { userInsta: newData.userInsta } });        // 46
        }                                                                                              // 47
                                                                                                       //
        if (newData.userWhats != null) {                                                               // 49
          DataUser.update({ _id: newData.userId }, { $set: { userWhats: newData.userWhats } });        // 50
        }                                                                                              // 51
      }                                                                                                // 52
    }                                                                                                  // 53
                                                                                                       //
    return updUserDataSocialNetworks;                                                                  // 37
  }(),                                                                                                 // 37
                                                                                                       //
  'removeDataSocialNetworks': function () {                                                            // 55
    function removeDataSocialNetworks(newData) {                                                       // 55
      console.log(newData.userId + " " + newData.propertyToRem);                                       // 56
                                                                                                       //
      switch (newData.propertyToRem) {                                                                 // 58
        case "WhatsApp":                                                                               // 59
          {                                                                                            // 59
            DataUser.update({ _id: newData.userId }, { $unset: { "userWhats": 1 } });                  // 60
          };                                                                                           // 61
          break;                                                                                       // 62
        case "Instagram":                                                                              // 63
          {                                                                                            // 63
            DataUser.update({ _id: newData.userId }, { $unset: { "userInsta": 1 } });                  // 64
          };                                                                                           // 65
          break;                                                                                       // 66
        case "Facebook":                                                                               // 67
          {                                                                                            // 67
            DataUser.update({ _id: newData.userId }, { $unset: { "userFb": 1 } });                     // 68
          };                                                                                           // 69
          break;                                                                                       // 70
      }                                                                                                // 58
                                                                                                       //
      //ESTE COMANDO ES EL QUE SE UTILIZA EN MONGO                                                     // 73
      //db.dataUser.update({"_id": "rQTzzDMfr4ZkiR7S8"},  {"$unset":{"userWhats":1}});                 // 74
    }                                                                                                  // 75
                                                                                                       //
    return removeDataSocialNetworks;                                                                   // 55
  }(),                                                                                                 // 55
                                                                                                       //
  'insertNewImage': function () {                                                                      // 77
    function insertNewImage(code) {                                                                    // 77
      return Images.insert({                                                                           // 78
        imgCode: code                                                                                  // 79
      });                                                                                              // 78
    }                                                                                                  // 81
                                                                                                       //
    return insertNewImage;                                                                             // 77
  }(),                                                                                                 // 77
                                                                                                       //
  'removeThisUser': function () {                                                                      // 83
    function removeThisUser(userToRemove) {                                                            // 83
      //HAY QUE ELIMINAR EL USUARIO DE dataUser Y DE users                                             // 84
      var idImgUser = DataUser.findOne({ userId: userToRemove.id }).userImg;                           // 85
                                                                                                       //
      if (idImgUser) {                                                                                 // 87
        Images.remove({ _id: idImgUser });                                                             // 88
      }                                                                                                // 89
                                                                                                       //
      Notifications.remove({ recepNotif: userToRemove.name });                                         // 91
      Relationships.remove({ follower: userToRemove.name });                                           // 92
      Relationships.remove({ following: userToRemove.name });                                          // 93
                                                                                                       //
      Favs.find({ idUserTapFav: userToRemove.id }).fetch().map(function (data) {                       // 95
        if (data.idUserTapFav) {                                                                       // 96
          var aux = data.idUserTapFav;                                                                 // 97
          var pos = aux.indexOf(userToRemove.id);                                                      // 98
          if (pos != -1) {                                                                             // 99
            UserUtils.removeFavToTwiit(data.idTwiit, userToRemove.id);                                 // 100
          }                                                                                            // 101
        }                                                                                              // 102
      });                                                                                              // 103
                                                                                                       //
      Twitts.remove({ user: userToRemove.name });                                                      // 105
      Meteor.users.remove({ _id: userToRemove.id });                                                   // 106
      DataUser.remove({ userId: userToRemove.id });                                                    // 107
    }                                                                                                  // 108
                                                                                                       //
    return removeThisUser;                                                                             // 83
  }()                                                                                                  // 83
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
    }()                                                                                                // 34
  });                                                                                                  // 33
                                                                                                       //
  Images.allow({                                                                                       // 39
    insert: function () {                                                                              // 40
      function insert(userId, disconnect) {                                                            // 40
        return true;                                                                                   // 41
      }                                                                                                // 42
                                                                                                       //
      return insert;                                                                                   // 40
    }()                                                                                                // 40
  });                                                                                                  // 39
});                                                                                                    // 44
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
