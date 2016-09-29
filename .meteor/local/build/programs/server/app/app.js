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
Router.route('/whoToFollow', { name: 'followUsers' });                                                      // 7
Router.route('/myProfile', { name: 'userProfile' });                                                        // 8
Router.route('/twiits/:_id', {                                                                              // 9
  name: 'twiitPage',                                                                                        // 10
  data: function data() {                                                                                   // 11
    return this.params;                                                                                     // 12
  }                                                                                                         // 13
});                                                                                                         // 9
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
                                                                                                            //
UserUtils.findFollowings = function (username) {                                                            // 13
  var currentFollowings = Relationships.find({ follower: username }).fetch().map(function (data) {          // 14
    return data.following;                                                                                  // 15
  });                                                                                                       // 16
  //console.log("Siguiendo: ");                                                                             //
  //console.log(currentFollowings);                                                                         //
                                                                                                            //
  return currentFollowings;                                                                                 // 20
};                                                                                                          // 21
                                                                                                            //
UserUtils.findFollowers = function (username) {                                                             // 23
  var currentFollowers = Relationships.find({ following: username }).fetch().map(function (data) {          // 24
    return data.following;                                                                                  // 25
  });                                                                                                       // 26
  //console.log("Seguidores: ");                                                                            //
  //console.log(currentFollowers);                                                                          //
                                                                                                            //
  return currentFollowers;                                                                                  // 30
};                                                                                                          // 31
                                                                                                            //
//FORZAMOS LA REACTIVIDAD                                                                                   //
UserUtils.observerProperties = function () {                                                                // 34
  Twitts.find().observeChanges({                                                                            // 35
    changed: function changed() {                                                                           // 36
      console.log("Se han detectado cambios!");                                                             // 37
    },                                                                                                      // 38
    added: function added(id, doc) {                                                                        // 39
      //console.log(doc);                                                                                   //
      return true;                                                                                          // 41
    }                                                                                                       // 42
  });                                                                                                       // 35
};                                                                                                          // 44
                                                                                                            //
UserUtils.findNumberNotif = function (username) {                                                           // 46
  var followings = UserUtils.findFollowings();                                                              // 47
  return Notifications.find({ twiitNotifUserName: { $nin: followings }, read: false }).count();             // 48
};                                                                                                          // 49
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
Notifications.allow({                                                                                       // 1
  update: function update(userId, doc) {                                                                    // 2
    //console.log(userId);                                                                                  //
    console.log("Update");                                                                                  // 4
    //console.log(fieldNames);                                                                              //
    //Notifications.update({ _id: doc.twiitId }, { $set: {read: true }});                                   //
    return true;                                                                                            // 7
  }                                                                                                         // 8
});                                                                                                         // 1
                                                                                                            //
Meteor.methods({                                                                                            // 11
  'createTwiitNotification': function createTwiitNotification(twiitNotifId) {                               // 12
    var twiit = Twitts.findOne(twiitNotifId);                                                               // 13
                                                                                                            //
    Notifications.insert({                                                                                  // 15
      twiitMessage: twiit.message,                                                                          // 16
      twiitId: twiit._id,                                                                                   // 17
      twiitNotifUserName: twiit.user,                                                                       // 18
      twiitTimeStamp: twiit.timestamp,                                                                      // 19
      read: false                                                                                           // 20
    });                                                                                                     // 15
  }                                                                                                         // 22
});                                                                                                         // 11
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
                                                                                                            //
    if (Meteor.user()) {                                                                                    // 15
      twiit._id = Twitts.insert({                                                                           // 16
        message: twiit.message,                                                                             // 17
        user: twiit.user,                                                                                   // 18
        timestamp: twiit.timestamp                                                                          // 19
      });                                                                                                   // 16
    }                                                                                                       // 21
    Meteor.call('createTwiitNotification', twiit._id);                                                      // 22
  }                                                                                                         // 23
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
    }                                                                                                       // 10
  });                                                                                                       // 7
});                                                                                                         // 12
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
