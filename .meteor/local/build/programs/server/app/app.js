var require = meteorInstall({"lib":{"collections":{"notifications.js":function(){

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
Favs = new Meteor.Collection('favs');                                                                       // 2
Relationships = new Meteor.Collection('relationships');                                                     // 3
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
/*SE ACCEDE POR PATHFOR*/                                                                                   //
Router.route('/twiits/:_id', {                                                                              // 12
  name: 'twiitPage',                                                                                        // 13
  data: function data() {                                                                                   // 14
    return this.params;                                                                                     // 15
  }                                                                                                         // 16
});                                                                                                         // 12
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
UserUtils.addFavToTwiit = function (id, idUser) {                                                           // 57
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT      //
  var arrAux = Favs.findOne({ idTwiit: id }).idUserTapFav;                                                  // 59
  arrAux.push(idUser);                                                                                      // 60
  var num = UserUtils.findNumberFavPerTwiit(id);                                                            // 61
  num++;                                                                                                    // 62
                                                                                                            //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                                 //
  Favs.update(id, { $set: { idUserTapFav: arrAux } });                                                      // 65
  Twitts.update(id, { $set: { numFav: num } });                                                             // 66
};                                                                                                          // 67
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
Meteor.publish('notifications', function (username) {                                                       // 20
  console.log(username);                                                                                    // 21
  var currentFollowings = UserUtils.findFollowings(username);                                               // 22
  console.log(Notifications.find({ twiitNotifUserName: { $in: currentFollowings }, read: false }).count());
  return Notifications.find({ twiitNotifUserName: { $in: currentFollowings }, read: false });               // 24
});                                                                                                         // 25
                                                                                                            //
Meteor.publish('favs', function () {                                                                        // 27
  return Favs.find();                                                                                       // 28
});                                                                                                         // 29
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
    /*                                                                                                      //
    twiit = _.extend(tweet, {                                                                               //
       user: Meteor.user().username,                                                                        //
       message: tweet,                                                                                      //
       timestamp: new Date()                                                                                //
     });                                                                                                    //
     */                                                                                                     //
    twiit = new Object();                                                                                   // 10
    twiit.message = tweet;                                                                                  // 11
    twiit.user = Meteor.user().username;                                                                    // 12
    twiit.timestamp = new Date();                                                                           // 13
    twiit.numFav = 0;                                                                                       // 14
                                                                                                            //
    fav = new Object();                                                                                     // 16
    fav.idTwiit = "";                                                                                       // 17
    fav.idUserTapFav = [];                                                                                  // 18
                                                                                                            //
    if (Meteor.user()) {                                                                                    // 20
      twiit._id = Twitts.insert({                                                                           // 21
        message: twiit.message,                                                                             // 22
        user: twiit.user,                                                                                   // 23
        timestamp: twiit.timestamp,                                                                         // 24
        numFav: twiit.numFav                                                                                // 25
      });                                                                                                   // 21
                                                                                                            //
      fav._id = Favs.insert({                                                                               // 28
        idTwiit: twiit._id,                                                                                 // 29
        idUserTapFav: fav.idUserTapFav                                                                      // 30
      });                                                                                                   // 28
    }                                                                                                       // 32
    Meteor.call('createTwiitNotification', twiit._id);                                                      // 33
  }                                                                                                         // 34
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
    update: function update(userId, doc) {                                                                  // 17
      return true;                                                                                          // 18
    }                                                                                                       // 19
  });                                                                                                       // 16
                                                                                                            //
  Notifications.allow({                                                                                     // 22
    update: function update(userId, doc) {                                                                  // 23
      return true;                                                                                          // 24
    }                                                                                                       // 25
  });                                                                                                       // 22
});                                                                                                         // 29
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
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
