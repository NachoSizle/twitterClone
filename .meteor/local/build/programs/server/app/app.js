var require = meteorInstall({"lib":{"collections":{"tweets.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// lib/collections/tweets.js                                                                       //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
Twitts = new Meteor.Collection('twitts');                                                          // 1
Relationships = new Meteor.Collection('relationships');                                            // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////

}},"router.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// lib/router.js                                                                                   //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
Router.route('/', { name: 'userManagement' });                                                     // 1
Router.route('/whoToFollow', { name: 'followUsers' });                                             // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////

},"userUtils.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// lib/userUtils.js                                                                                //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
UserUtils = function UserUtils() {}; //no var in front                                             // 1
                                                                                                   //
UserUtils.findTweets = function (username) {                                                       // 3
  var currentTweets = Twitts.find({ user: username }).fetch().map(function (data) {                // 4
    return data.following;                                                                         // 5
  });                                                                                              // 6
  console.log("Tweets: ");                                                                         // 7
  console.log(currentTweets);                                                                      // 8
                                                                                                   //
  return currentTweets;                                                                            // 10
};                                                                                                 // 11
                                                                                                   //
UserUtils.findFollowings = function (username) {                                                   // 13
  var currentFollowings = Relationships.find({ follower: username }).fetch().map(function (data) {
    return data.following;                                                                         // 15
  });                                                                                              // 16
  console.log("Siguiendo: ");                                                                      // 17
  console.log(currentFollowings);                                                                  // 18
                                                                                                   //
  return currentFollowings;                                                                        // 20
};                                                                                                 // 21
                                                                                                   //
UserUtils.findFollowers = function (username) {                                                    // 23
  var currentFollowers = Relationships.find({ following: username }).fetch().map(function (data) {
    return data.following;                                                                         // 25
  });                                                                                              // 26
  console.log("Seguidores: ");                                                                     // 27
  console.log(currentFollowers);                                                                   // 28
                                                                                                   //
  return currentFollowers;                                                                         // 30
};                                                                                                 // 31
                                                                                                   //
//FORZAMOS LA REACTIVIDAD                                                                          //
UserUtils.observerProperties = function () {                                                       // 34
  Twitts.find().observeChanges({                                                                   // 35
    changed: function changed() {                                                                  // 36
      console.log("Se han detectado cambios!");                                                    // 37
    },                                                                                             // 38
    added: function added(id, doc) {                                                               // 39
      console.log(doc);                                                                            // 40
      return true;                                                                                 // 41
    }                                                                                              // 42
  });                                                                                              // 35
};                                                                                                 // 44
/////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"followUsers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// server/followUsers.js                                                                           //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
Meteor.methods({                                                                                   // 1
  'findUser': function findUser(username) {                                                        // 2
    return Meteor.users.findOne({                                                                  // 3
      username: username                                                                           // 4
    }, {                                                                                           // 3
      fields: { 'username': 1 }                                                                    // 6
    });                                                                                            // 5
  },                                                                                               // 8
                                                                                                   //
  'followUser': function followUser(username) {                                                    // 10
    Relationships.insert({                                                                         // 11
      follower: Meteor.user().username,                                                            // 12
      following: username                                                                          // 13
    });                                                                                            // 11
  },                                                                                               // 15
                                                                                                   //
  'recommendUsers': function recommendUsers() {                                                    // 17
    if (Meteor.user()) {                                                                           // 18
      var currentFollowings = UserUtils.findFollowings(Meteor.user().username);                    // 19
                                                                                                   //
      var recUsers = Meteor.users.find({                                                           // 21
        username: {                                                                                // 22
          $nin: currentFollowings                                                                  // 23
        }                                                                                          // 22
      }, {                                                                                         // 21
        fields: { 'username': 1 },                                                                 // 26
        limit: 5                                                                                   // 27
      }).fetch();                                                                                  // 25
      return recUsers;                                                                             // 29
    }                                                                                              // 30
  }                                                                                                // 31
});                                                                                                // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// server/publications.js                                                                          //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
Meteor.publish('twitts', function () {                                                             // 1
  if (Meteor.userId) {                                                                             // 2
    var username = Meteor.users.findOne({ _id: this.userId }).username;                            // 3
    var currentFollowings = UserUtils.findFollowings(username);                                    // 4
                                                                                                   //
    return Twitts.find({ user: { $in: currentFollowings } });                                      // 6
  }                                                                                                // 7
});                                                                                                // 8
/*                                                                                                 //
Meteor.publishComposite('twitts', function(username) {                                             //
  return {                                                                                         //
    find: function() {                                                                             //
      // Comprobar los usuarios a los que se está siguiendo                                        //
      return Relationships.find({ follower: username });                                           //
    },                                                                                             //
    children: [{                                                                                   //
      find: function(relationship) {                                                               //
        // Encontrar mensajes de los usuarios que se siguen                                        //
        return Twitts.find({user: relationship.following});                                        //
      }                                                                                            //
    }]                                                                                             //
  }                                                                                                //
});                                                                                                //
*/                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetBox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// server/tweetBox.js                                                                              //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
Meteor.methods({                                                                                   // 1
  'insertTweet': function insertTweet(tweet) {                                                     // 2
    if (Meteor.user()) {                                                                           // 3
      Twitts.insert({                                                                              // 4
        message: tweet,                                                                            // 5
        user: Meteor.user().username,                                                              // 6
        timestamp: new Date()                                                                      // 7
      });                                                                                          // 4
    }                                                                                              // 9
  }                                                                                                // 10
});                                                                                                // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////

},"userManagement.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// server/userManagement.js                                                                        //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
Meteor.methods({                                                                                   // 1
  'tweetsPublish': function tweetsPublish(username) {                                              // 2
    console.log("Usuario a buscar: " + username);                                                  // 3
    console.log("Resultado: ");                                                                    // 4
    var resul = UserUtils.findTweets(Meteor.user().username);                                      // 5
    return resul.length;                                                                           // 6
  },                                                                                               // 7
                                                                                                   //
  'usersFollowers': function usersFollowers() {                                                    // 9
    var currentFollowers = UserUtils.findFollowers(Meteor.user().username);                        // 10
    return currentFollowers.length;                                                                // 11
  },                                                                                               // 12
                                                                                                   //
  'usersFollowings': function usersFollowings() {                                                  // 14
    var currentFollowings = UserUtils.findFollowings(Meteor.user().username);                      // 15
                                                                                                   //
    return currentFollowings.length;                                                               // 17
  }                                                                                                // 18
});                                                                                                // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                 //
// server/main.js                                                                                  //
//                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                   //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});                        // 1
                                                                                                   //
Meteor.startup(function () {                                                                       // 3
  // code to run on server at startup                                                              //
  Relationships._ensureIndex({ follower: 1, following: 1 }, { unique: 1 });                        // 5
                                                                                                   //
  Twitts.allow({                                                                                   // 7
    insert: function insert(userId, disconnect) {                                                  // 8
      return true;                                                                                 // 9
    }                                                                                              // 10
  });                                                                                              // 7
});                                                                                                // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/collections/tweets.js");
require("./lib/router.js");
require("./lib/userUtils.js");
require("./server/followUsers.js");
require("./server/publications.js");
require("./server/tweetBox.js");
require("./server/userManagement.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
