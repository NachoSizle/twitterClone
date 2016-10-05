var require = meteorInstall({"lib":{"collections":{"favs.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// lib/collections/favs.js                                                                                  //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
Favs = new Meteor.Collection('favs');                                                                       // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// lib/collections/notifications.js                                                                         //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
Notifications = new Mongo.Collection('notifications');                                                      // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweets.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// lib/collections/tweets.js                                                                                //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
Twitts = new Meteor.Collection('twitts');                                                                   // 1
Relationships = new Meteor.Collection('relationships');                                                     // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"router.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// lib/router.js                                                                                            //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
Router.configure({                                                                                          // 1
		loadingTemplate: 'loading',                                                                               // 2
		notFoundTemplate: 'notFound'                                                                              // 3
});                                                                                                         // 1
                                                                                                            //
Router.route('/', { name: 'userManagement' });                                                              // 6
/*SE ACCEDE POR WINDOW.LOCATION*/                                                                           //
Router.route('/whoToFollow', { name: 'followUsers' });                                                      // 8
Router.route('/myProfile', { name: 'userProfile' });                                                        // 9
Router.route('/Notifications', { name: 'twiitPageNew' });                                                   // 10
//Router.route('/Comments', {name: 'twiitCommentPage'});                                                    //
/*SE ACCEDE POR PATHFOR*/                                                                                   //
Router.route('/Comments/:_id', {                                                                            // 13
		name: 'twiitCommentPage',                                                                                 // 14
		data: function data() {                                                                                   // 15
				var mode = Session.get('notificationsModeOn');                                                          // 16
				var idTwiit = new Object();                                                                             // 17
				idTwiit._id = this.params._id;                                                                          // 18
                                                                                                            //
				if (mode) {                                                                                             // 20
						idTwiit.mode = mode;                                                                                  // 21
				}                                                                                                       // 22
                                                                                                            //
				return idTwiit;                                                                                         // 24
		}                                                                                                         // 25
});                                                                                                         // 13
Router.route('/twiits/:_id', {                                                                              // 27
		name: 'twiitPage',                                                                                        // 28
		data: function data() {                                                                                   // 29
				return this.params;                                                                                     // 30
		}                                                                                                         // 31
});                                                                                                         // 27
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userUtils.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// lib/userUtils.js                                                                                         //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
UserUtils = function UserUtils() {}; //no var in front                                                      // 1
                                                                                                            //
UserUtils.findTweets = function (username) {                                                                // 3
  var currentTweets = Twitts.find({ user: username }).fetch().map(function (data) {                         // 4
    return data.following;                                                                                  // 5
  });                                                                                                       // 6
  console.log("Tweets: ");                                                                                  // 7
  console.log(currentTweets);                                                                               // 8
                                                                                                            //
  return currentTweets;                                                                                     // 10
};                                                                                                          // 11
//SIGUIENDO                                                                                                 //
UserUtils.findFollowings = function (username) {                                                            // 13
  var currentFollowings = Relationships.find({ follower: username }).fetch().map(function (data) {          // 14
    return data.following;                                                                                  // 15
  });                                                                                                       // 16
  //console.log("Siguiendo: ");                                                                             //
  //console.log(currentFollowings);                                                                         //
                                                                                                            //
  return currentFollowings;                                                                                 // 20
};                                                                                                          // 21
//SEGUIDORES                                                                                                //
UserUtils.findFollowers = function (username) {                                                             // 23
  var currentFollowers = Relationships.find({ following: username }).fetch().map(function (data) {          // 24
    return data.following;                                                                                  // 25
  });                                                                                                       // 26
  //console.log("Seguidores: ");                                                                            //
  //console.log(currentFollowers);                                                                          //
                                                                                                            //
  return currentFollowers;                                                                                  // 30
};                                                                                                          // 31
/*                                                                                                          //
//FORZAMOS LA REACTIVIDAD                                                                                   //
UserUtils.observerProperties = function(){                                                                  //
	Twitts.find().observeChanges({                                                                             //
    changed: function(){                                                                                    //
      console.log("Se han detectado cambios!");                                                             //
    },                                                                                                      //
    added: function(id, doc) {                                                                              //
      //console.log(doc);                                                                                   //
      return true;                                                                                          //
    }                                                                                                       //
  })                                                                                                        //
}                                                                                                           //
*/                                                                                                          //
                                                                                                            //
UserUtils.findNumberNotif = function (username) {                                                           // 47
  var followings = UserUtils.findFollowings();                                                              // 48
  return Notifications.find({ twiitNotifUserName: { $nin: followings }, read: false }).count();             // 49
};                                                                                                          // 50
                                                                                                            //
UserUtils.findNumberFavPerTwiit = function (idTwiit) {                                                      // 52
  var twiitNumFav = Twitts.findOne({ _id: idTwiit }).numFav;                                                // 53
  return twiitNumFav;                                                                                       // 54
};                                                                                                          // 55
                                                                                                            //
UserUtils.findFavsForTwiit = function (id) {                                                                // 57
  return Favs.findOne({ idTwiit: id });                                                                     // 58
};                                                                                                          // 59
                                                                                                            //
UserUtils.addFavToTwiit = function (id, idUser) {                                                           // 61
  var resultToUpdate = false;                                                                               // 62
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT      //
  var favObject = UserUtils.findFavsForTwiit(id);                                                           // 64
  var arrAux = favObject.idUserTapFav;                                                                      // 65
  var idFav = favObject._id;                                                                                // 66
                                                                                                            //
  arrAux.push(idUser);                                                                                      // 68
  var num = UserUtils.findNumberFavPerTwiit(id);                                                            // 69
  num++;                                                                                                    // 70
                                                                                                            //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                                 //
  res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                             // 73
  resT = Twitts.update(id, { $set: { numFav: num } });                                                      // 74
                                                                                                            //
  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                      //
  if (res && resT) {                                                                                        // 77
    resultToUpdate = true;                                                                                  // 78
  }                                                                                                         // 79
                                                                                                            //
  return resultToUpdate;                                                                                    // 81
};                                                                                                          // 82
                                                                                                            //
UserUtils.removeFavToTwiit = function (id, idUser) {                                                        // 84
  var resultToUpdate = false;                                                                               // 85
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT      //
  var favObject = UserUtils.findFavsForTwiit(id);                                                           // 87
  var arrAux = favObject.idUserTapFav;                                                                      // 88
  var idFav = favObject._id;                                                                                // 89
                                                                                                            //
  //HAY QUE AVERIGUAR LA POSICION DEL idUser DENTRO DEL ARRAY DE LA BBDD                                    //
  var posIdUser = arrAux.indexOf(idUser);                                                                   // 92
  //AHORA ELIMINAMOS EL ELEMENTO ASOCIADO A ESA POSICION                                                    //
  delete arrAux[posIdUser];                                                                                 // 94
                                                                                                            //
  var num = UserUtils.findNumberFavPerTwiit(id);                                                            // 96
  num--;                                                                                                    // 97
                                                                                                            //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                                 //
  res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                             // 100
  resT = Twitts.update(id, { $set: { numFav: num } });                                                      // 101
                                                                                                            //
  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                      //
  if (res && resT) {                                                                                        // 104
    resultToUpdate = true;                                                                                  // 105
  }                                                                                                         // 106
                                                                                                            //
  return resultToUpdate;                                                                                    // 108
};                                                                                                          // 109
                                                                                                            //
UserUtils.findTwiitFromNotif = function (id) {                                                              // 111
  var twiitId = Notifications.findOne(id).twiitId;                                                          // 112
  return twiitId;                                                                                           // 113
};                                                                                                          // 114
                                                                                                            //
UserUtils.findNumComment = function (idTweet) {                                                             // 116
  return Twitts.findOne({ _id: idTweet }).numComment;                                                       // 117
};                                                                                                          // 118
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"followUsers.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// server/followUsers.js                                                                                    //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
Meteor.methods({                                                                                            // 1
  'findUser': function findUser(username) {                                                                 // 2
    return Meteor.users.findOne({                                                                           // 3
      username: username                                                                                    // 4
    }, {                                                                                                    // 3
      fields: { 'username': 1 }                                                                             // 6
    });                                                                                                     // 5
  },                                                                                                        // 8
                                                                                                            //
  'followUser': function followUser(username) {                                                             // 10
    Relationships.insert({                                                                                  // 11
      follower: Meteor.user().username,                                                                     // 12
      following: username                                                                                   // 13
    });                                                                                                     // 11
  },                                                                                                        // 15
                                                                                                            //
  'recommendUsers': function recommendUsers() {                                                             // 17
    if (Meteor.user()) {                                                                                    // 18
      var currentFollowings = UserUtils.findFollowings(Meteor.user().username);                             // 19
                                                                                                            //
      var recUsers = Meteor.users.find({                                                                    // 21
        username: {                                                                                         // 22
          $nin: currentFollowings                                                                           // 23
        }                                                                                                   // 22
      }, {                                                                                                  // 21
        fields: { 'username': 1 },                                                                          // 26
        limit: 5                                                                                            // 27
      }).fetch();                                                                                           // 25
      return recUsers;                                                                                      // 29
    }                                                                                                       // 30
  }                                                                                                         // 31
});                                                                                                         // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// server/notifications.js                                                                                  //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
Meteor.methods({                                                                                            // 1
  'createTwiitNotification': function createTwiitNotification(twiitNotifId) {                               // 2
    var twiit = Twitts.findOne(twiitNotifId);                                                               // 3
                                                                                                            //
    Notifications.insert({                                                                                  // 5
      twiitMessage: twiit.message,                                                                          // 6
      twiitId: twiit._id,                                                                                   // 7
      twiitNotifUserName: twiit.user,                                                                       // 8
      twiitTimeStamp: twiit.timestamp,                                                                      // 9
      read: false                                                                                           // 10
    });                                                                                                     // 5
  }                                                                                                         // 12
});                                                                                                         // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// server/publications.js                                                                                   //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
Meteor.publish('twitts', function () {                                                                      // 1
  if (Meteor.userId) {                                                                                      // 2
    var username = Meteor.users.findOne({ _id: this.userId }).username;                                     // 3
    var currentFollowings = UserUtils.findFollowings(username);                                             // 4
                                                                                                            //
    return Twitts.find({ user: { $in: currentFollowings } });                                               // 6
  }                                                                                                         // 7
});                                                                                                         // 8
                                                                                                            //
Meteor.publish('twittsProfile', function (username) {                                                       // 10
  if (Meteor.userId) {                                                                                      // 11
    var username = Meteor.users.findOne({ _id: this.userId }).username;                                     // 12
    //var currentFollowings = UserUtils.findFollowings(username);                                           //
                                                                                                            //
    //return Twitts.find({user: { $in: currentFollowings }});                                               //
    return Twitts.find({ user: username });                                                                 // 16
  }                                                                                                         // 17
});                                                                                                         // 18
                                                                                                            //
Meteor.publish('twittsWithComment', function (idTweet) {                                                    // 20
  if (Meteor.userId) {                                                                                      // 21
    return Twitts.find();                                                                                   // 22
  }                                                                                                         // 23
});                                                                                                         // 24
                                                                                                            //
Meteor.publish('notifications', function (username) {                                                       // 26
  console.log(username);                                                                                    // 27
  var currentFollowings = UserUtils.findFollowings(username);                                               // 28
  console.log(Notifications.find({ twiitNotifUserName: { $in: currentFollowings }, read: false }).count());
  return Notifications.find({ twiitNotifUserName: { $in: currentFollowings }, read: false });               // 30
});                                                                                                         // 31
                                                                                                            //
Meteor.publish('allNotifications', function (notifId) {                                                     // 33
  return Notifications.find({ _id: notifId }, { read: false });                                             // 34
});                                                                                                         // 35
                                                                                                            //
Meteor.publish('favs', function () {                                                                        // 37
  return Favs.find();                                                                                       // 38
});                                                                                                         // 39
/*                                                                                                          //
Meteor.publishComposite('twitts', function(username) {                                                      //
  return {                                                                                                  //
    find: function() {                                                                                      //
      // Comprobar los usuarios a los que se está siguiendo                                                 //
      return Relationships.find({ follower: username });                                                    //
    },                                                                                                      //
    children: [{                                                                                            //
      find: function(relationship) {                                                                        //
        // Encontrar mensajes de los usuarios que se siguen                                                 //
        return Twitts.find({user: relationship.following});                                                 //
      }                                                                                                     //
    }]                                                                                                      //
  }                                                                                                         //
});                                                                                                         //
*/                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetBox.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// server/tweetBox.js                                                                                       //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
Meteor.methods({                                                                                            // 1
  'insertTweet': function insertTweet(tweet) {                                                              // 2
    var insertComment = false;                                                                              // 3
                                                                                                            //
    twiit = new Object();                                                                                   // 5
    twiit.message = tweet.message;                                                                          // 6
    twiit.user = Meteor.user().username;                                                                    // 7
    twiit.timestamp = new Date();                                                                           // 8
    twiit.numFav = 0;                                                                                       // 9
    twiit.numComment = 0;                                                                                   // 10
                                                                                                            //
    //SE EJECUTA CUANDO SE QUIERE INSERTAR UN TWIIT DESDE UN COMENTARIO                                     //
    if (tweet.type) {                                                                                       // 13
      twiit.commentType = true;                                                                             // 14
      twiit.twiitIdComment = tweet.twiitId;                                                                 // 15
    }                                                                                                       // 16
                                                                                                            //
    fav = new Object();                                                                                     // 18
    fav.idTwiit = "";                                                                                       // 19
    fav.idUserTapFav = [];                                                                                  // 20
                                                                                                            //
    if (tweet.type) {                                                                                       // 22
      if (Meteor.user()) {                                                                                  // 23
        twiit._id = Twitts.insert({                                                                         // 24
          message: twiit.message,                                                                           // 25
          user: twiit.user,                                                                                 // 26
          timestamp: twiit.timestamp,                                                                       // 27
          numFav: twiit.numFav,                                                                             // 28
          numComment: twiit.numComment,                                                                     // 29
          commentType: twiit.commentType,                                                                   // 30
          twiitIdComment: twiit.twiitIdComment                                                              // 31
        });                                                                                                 // 24
      }                                                                                                     // 33
    } else {                                                                                                // 34
      if (Meteor.user()) {                                                                                  // 35
        twiit._id = Twitts.insert({                                                                         // 36
          message: twiit.message,                                                                           // 37
          user: twiit.user,                                                                                 // 38
          timestamp: twiit.timestamp,                                                                       // 39
          numFav: twiit.numFav,                                                                             // 40
          numComment: twiit.numComment                                                                      // 41
        });                                                                                                 // 36
      }                                                                                                     // 43
    }                                                                                                       // 44
                                                                                                            //
    fav._id = Favs.insert({                                                                                 // 46
      idTwiit: twiit._id,                                                                                   // 47
      idUserTapFav: fav.idUserTapFav                                                                        // 48
    });                                                                                                     // 46
                                                                                                            //
    Meteor.call('createTwiitNotification', twiit._id);                                                      // 51
                                                                                                            //
    if (tweet.type) {                                                                                       // 53
      Twitts.update({ _id: twiit.twiitIdComment }, { $set: { numComment: tweet.numComment } });             // 54
    }                                                                                                       // 55
  }                                                                                                         // 56
});                                                                                                         // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userManagement.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// server/userManagement.js                                                                                 //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
Meteor.methods({                                                                                            // 1
  'tweetsPublish': function tweetsPublish(username) {                                                       // 2
    console.log("Usuario a buscar: " + username);                                                           // 3
    console.log("Resultado: ");                                                                             // 4
    var resul = UserUtils.findTweets(Meteor.user().username);                                               // 5
    return resul.length;                                                                                    // 6
  },                                                                                                        // 7
                                                                                                            //
  'usersFollowers': function usersFollowers() {                                                             // 9
    var currentFollowers = UserUtils.findFollowers(Meteor.user().username);                                 // 10
    return currentFollowers.length;                                                                         // 11
  },                                                                                                        // 12
                                                                                                            //
  'usersFollowings': function usersFollowings() {                                                           // 14
    var currentFollowings = UserUtils.findFollowings(Meteor.user().username);                               // 15
                                                                                                            //
    return currentFollowings.length;                                                                        // 17
  }                                                                                                         // 18
});                                                                                                         // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// server/main.js                                                                                           //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});                                 // 1
                                                                                                            //
Meteor.startup(function () {                                                                                // 3
  // code to run on server at startup                                                                       //
  Relationships._ensureIndex({ follower: 1, following: 1 }, { unique: 1 });                                 // 5
                                                                                                            //
  Twitts.allow({                                                                                            // 7
    insert: function insert(userId, disconnect) {                                                           // 8
      return true;                                                                                          // 9
    },                                                                                                      // 10
    update: function update(id, doc) {                                                                      // 11
      return true;                                                                                          // 12
    }                                                                                                       // 13
  });                                                                                                       // 7
                                                                                                            //
  Favs.allow({                                                                                              // 16
    insert: function insert(userId, disconnect) {                                                           // 17
      return true;                                                                                          // 18
    },                                                                                                      // 19
    update: function update(userId, doc) {                                                                  // 20
      console.log("Update Oper");                                                                           // 21
      return true;                                                                                          // 22
    }                                                                                                       // 23
  });                                                                                                       // 16
                                                                                                            //
  Notifications.allow({                                                                                     // 26
    update: function update(userId, doc) {                                                                  // 27
      return true;                                                                                          // 28
    }                                                                                                       // 29
  });                                                                                                       // 26
});                                                                                                         // 33
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/collections/favs.js");
require("./lib/collections/notifications.js");
require("./lib/collections/tweets.js");
require("./lib/router.js");
require("./lib/userUtils.js");
require("./server/followUsers.js");
require("./server/notifications.js");
require("./server/publications.js");
require("./server/tweetBox.js");
require("./server/userManagement.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
