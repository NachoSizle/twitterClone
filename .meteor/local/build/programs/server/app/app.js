var require = meteorInstall({"lib":{"collections.js":["meteor/ostrio:files",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// lib/collections.js                                                                                          //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var FilesCollection;module.import('meteor/ostrio:files',{"FilesCollection":function(v){FilesCollection=v}});   // 1
                                                                                                               //
Twitts = new Meteor.Collection('twitts');                                                                      // 3
Relationships = new Meteor.Collection('relationships');                                                        // 4
DataUser = new Meteor.Collection('dataUser');                                                                  // 5
Favs = new Meteor.Collection('favs');                                                                          // 6
Notifications = new Mongo.Collection('notifications');                                                         // 7
Images = new Mongo.Collection('images');                                                                       // 8
ChatsMsg = new Mongo.Collection('chatsMsg');                                                                   // 9
Chats = new Mongo.Collection('chats');                                                                         // 10
Files = new FilesCollection({                                                                                  // 11
  collectionName: 'Files',                                                                                     // 12
  allowClientCode: false, // Disallow remove files from Client                                                 // 13
  onBeforeUpload: function () {                                                                                // 14
    function onBeforeUpload(file) {                                                                            // 14
      console.log('onBeforeUploadpload');                                                                      // 15
      // Allow upload files under 10MB, and only in png/jpg/jpeg formats                                       // 16
      if (file.size <= 10485760 && /png|jpg|jpeg|mp4/i.test(file.extension)) {                                 // 17
        return true;                                                                                           // 18
      } else {                                                                                                 // 19
        return 'Please upload image, with size equal or less than 10MB';                                       // 20
      }                                                                                                        // 21
    }                                                                                                          // 22
                                                                                                               //
    return onBeforeUpload;                                                                                     // 14
  }(),                                                                                                         // 14
  onAfterupload: function () {                                                                                 // 23
    function onAfterupload(file) {                                                                             // 23
      console.log('onAfterupload');                                                                            // 24
      console.log(file);                                                                                       // 25
    }                                                                                                          // 26
                                                                                                               //
    return onAfterupload;                                                                                      // 23
  }()                                                                                                          // 23
});                                                                                                            // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"router.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// lib/router.js                                                                                               //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
Router.configure({                                                                                             // 1
		loadingTemplate: 'loading',                                                                                  // 2
		notFoundTemplate: 'notFound'                                                                                 // 3
});                                                                                                            // 1
                                                                                                               //
Router.route('/', {                                                                                            // 6
		name: 'userManagement',                                                                                      // 7
		data: function () {                                                                                          // 8
				function data() {                                                                                          // 8
						$('#selectFileLbl').css('margin-bottom', '0px');                                                         // 9
						$('#selectFileLbl').show();                                                                              // 10
						Session.set('pathActualApp', '/');                                                                       // 11
				}                                                                                                          // 12
                                                                                                               //
				return data;                                                                                               // 8
		}()                                                                                                          // 8
});                                                                                                            // 6
/*SE ACCEDE POR WINDOW.LOCATION*/                                                                              // 14
Router.route('/whoToFollow', {                                                                                 // 15
		name: 'followUsers',                                                                                         // 16
		data: function () {                                                                                          // 17
				function data() {                                                                                          // 17
						$('#selectFileLbl').css('margin-bottom', '0px');                                                         // 18
						$('#selectFileLbl').show();                                                                              // 19
				}                                                                                                          // 20
                                                                                                               //
				return data;                                                                                               // 17
		}()                                                                                                          // 17
});                                                                                                            // 15
Router.route('/Profile/:username', {                                                                           // 22
		name: 'userProfile',                                                                                         // 23
		data: function () {                                                                                          // 24
				function data() {                                                                                          // 24
						$('#selectFileLbl').css('margin-bottom', '0px');                                                         // 25
						$('#selectFileLbl').show();                                                                              // 26
                                                                                                               //
						var user = new Object();                                                                                 // 28
						user.name = this.params.username;                                                                        // 29
                                                                                                               //
						var currentUser = Session.get('currentUser');                                                            // 31
                                                                                                               //
						Meteor.call('findUserData', user.name, function (err, res) {                                             // 33
								Session.set('dataUserShowProfile', res);                                                               // 34
						});                                                                                                      // 35
                                                                                                               //
						dataUserShowProfile = Session.get('dataUserShowProfile');                                                // 37
                                                                                                               //
						if (dataUserShowProfile) {                                                                               // 39
								if (dataUserShowProfile.userNameProfile != currentUser) {                                              // 40
										Session.set('showProfileOtherUser', false);                                                          // 41
								} else {                                                                                               // 42
										Session.set('showProfileOtherUser', true);                                                           // 43
								}                                                                                                      // 44
						}                                                                                                        // 45
                                                                                                               //
						Session.set('pathActualApp', "/Profile/" + this.params.username);                                        // 47
                                                                                                               //
						return user;                                                                                             // 49
				}                                                                                                          // 50
                                                                                                               //
				return data;                                                                                               // 24
		}()                                                                                                          // 24
});                                                                                                            // 22
Router.route('/Notifications/:userName', {                                                                     // 52
		name: 'twiitPageNew',                                                                                        // 53
		data: function () {                                                                                          // 54
				function data() {                                                                                          // 54
						$('#selectFileLbl').css('margin-bottom', '0px');                                                         // 55
						$('#selectFileLbl').show();                                                                              // 56
                                                                                                               //
						var user = new Object();                                                                                 // 58
						user.name = this.params.userName;                                                                        // 59
						Session.set('pathActualApp', "/Notifications/" + this.params.username);                                  // 60
						return user;                                                                                             // 61
				}                                                                                                          // 62
                                                                                                               //
				return data;                                                                                               // 54
		}()                                                                                                          // 54
});                                                                                                            // 52
                                                                                                               //
Router.route('/RequestWhatsApp/:userName', {                                                                   // 65
		name: 'whatsAppRequestPage',                                                                                 // 66
		data: function () {                                                                                          // 67
				function data() {                                                                                          // 67
						$('#selectFileLbl').css('margin-bottom', '0px');                                                         // 68
						$('#selectFileLbl').show();                                                                              // 69
                                                                                                               //
						var user = new Object();                                                                                 // 71
						user.name = this.params.userName;                                                                        // 72
						Session.set('pathActualApp', "/RequestWhatsApp/" + this.params.username);                                // 73
						return user;                                                                                             // 74
				}                                                                                                          // 75
                                                                                                               //
				return data;                                                                                               // 67
		}()                                                                                                          // 67
});                                                                                                            // 65
                                                                                                               //
//Router.route('/Comments', {name: 'twiitCommentPage'});                                                       // 78
/*SE ACCEDE POR PATHFOR*/                                                                                      // 79
Router.route('/Comments/:_id', {                                                                               // 80
		name: 'twiitCommentPage',                                                                                    // 81
		data: function () {                                                                                          // 82
				function data() {                                                                                          // 82
						$('#selectFileLbl').css('margin-bottom', '0px');                                                         // 83
						$('#selectFileLbl').show();                                                                              // 84
                                                                                                               //
						var mode = Session.get('notificationsModeOn');                                                           // 86
						var idTwiit = new Object();                                                                              // 87
						idTwiit._id = this.params._id;                                                                           // 88
                                                                                                               //
						if (mode) {                                                                                              // 90
								idTwiit.mode = mode;                                                                                   // 91
						}                                                                                                        // 92
                                                                                                               //
						Session.set('pathActualApp', "/Comments/" + this.params.username);                                       // 94
                                                                                                               //
						return idTwiit;                                                                                          // 96
				}                                                                                                          // 97
                                                                                                               //
				return data;                                                                                               // 82
		}()                                                                                                          // 82
});                                                                                                            // 80
Router.route('/twiits/:_id', {                                                                                 // 99
		name: 'twiitPage',                                                                                           // 100
		data: function () {                                                                                          // 101
				function data() {                                                                                          // 101
						$('#selectFileLbl').css('margin-bottom', '0px');                                                         // 102
						$('#selectFileLbl').show();                                                                              // 103
						return this.params;                                                                                      // 104
				}                                                                                                          // 105
                                                                                                               //
				return data;                                                                                               // 101
		}()                                                                                                          // 101
});                                                                                                            // 99
                                                                                                               //
Router.route('/editProfile/:userName', {                                                                       // 108
		name: 'editProfile',                                                                                         // 109
		data: function () {                                                                                          // 110
				function data() {                                                                                          // 110
						ç;                                                                                                       // 110
						$('#selectFileLbl').show();                                                                              // 111
						$('#selectFileLbl').css('margin-bottom', '0px');                                                         // 112
                                                                                                               //
						Session.set('pathActualApp', "/editProfile/" + this.params.username);                                    // 114
						return this.params.userName;                                                                             // 115
				}                                                                                                          // 116
                                                                                                               //
				return data;                                                                                               // 110
		}()                                                                                                          // 110
});                                                                                                            // 108
                                                                                                               //
Router.route('/followAnts/:userName', {                                                                        // 119
		name: 'followAnts',                                                                                          // 120
		data: function () {                                                                                          // 121
				function data() {                                                                                          // 121
						$('#selectFileLbl').show();                                                                              // 122
						$('#selectFileLbl').css('margin-bottom', '0px');                                                         // 123
                                                                                                               //
						var showData = new Object();                                                                             // 125
						showData.user = this.params.userName;                                                                    // 126
						showData.mode = true;                                                                                    // 127
						Session.set('pathActualApp', "/followAnts/" + this.params.username);                                     // 128
						return showData;                                                                                         // 129
				}                                                                                                          // 130
                                                                                                               //
				return data;                                                                                               // 121
		}()                                                                                                          // 121
});                                                                                                            // 119
                                                                                                               //
Router.route('/videoTrans', {                                                                                  // 133
		name: 'videoTrans'                                                                                           // 134
});                                                                                                            // 133
Router.route('/ShowFiles', {                                                                                   // 136
		name: 'showUploadFiles',                                                                                     // 137
		data: function () {                                                                                          // 138
				function data() {                                                                                          // 138
						$('#selectFileLbl').show();                                                                              // 139
						$('#selectFileLbl').css('margin-bottom', '0px');                                                         // 140
				}                                                                                                          // 141
                                                                                                               //
				return data;                                                                                               // 138
		}()                                                                                                          // 138
});                                                                                                            // 136
                                                                                                               //
Router.route('/Chats/', {                                                                                      // 145
		name: 'conversationsMenu',                                                                                   // 146
		data: function () {                                                                                          // 147
				function data() {                                                                                          // 147
						$('#selectFileLbl').hide();                                                                              // 148
						$('#selectFileLbl').css('margin-bottom', '50px');                                                        // 149
				}                                                                                                          // 150
                                                                                                               //
				return data;                                                                                               // 147
		}()                                                                                                          // 147
});                                                                                                            // 145
                                                                                                               //
Router.route('/Conversation/:username', {                                                                      // 153
		name: 'showConver',                                                                                          // 154
		data: function () {                                                                                          // 155
				function data() {                                                                                          // 155
						$('#selectFileLbl').hide();                                                                              // 156
                                                                                                               //
						var user = new Object();                                                                                 // 158
						user.name = this.params.username;                                                                        // 159
                                                                                                               //
						return user;                                                                                             // 161
				}                                                                                                          // 162
                                                                                                               //
				return data;                                                                                               // 155
		}()                                                                                                          // 155
});                                                                                                            // 153
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userUtils.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// lib/userUtils.js                                                                                            //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
UserUtils = function UserUtils() {}; //no var in front                                                         // 1
                                                                                                               //
UserUtils.findTweets = function (username) {                                                                   // 3
  /*                                                                                                           // 4
  var currentTweets = Twitts.find({ user: username }).fetch().map(function(data) {                             //
    								return data;                                                                                       //
  						  });                                                                                                  //
                */                                                                                             //
  return Twitts.find({ user: username }, { sort: { timestamp: -1 } });                                         // 9
};                                                                                                             // 10
//SIGUIENDO                                                                                                    // 11
UserUtils.findFollowings = function (username) {                                                               // 12
  var currentFollowings = Relationships.find({ follower: username }).fetch().map(function (data) {             // 13
    return data.following;                                                                                     // 14
  });                                                                                                          // 15
  //console.log("Siguiendo: ");                                                                                // 16
  //console.log(currentFollowings);                                                                            // 17
                                                                                                               //
  return currentFollowings;                                                                                    // 19
};                                                                                                             // 20
//SEGUIDORES                                                                                                   // 21
UserUtils.findFollowers = function (username) {                                                                // 22
  var currentFollowers = Relationships.find({ following: username }).fetch().map(function (data) {             // 23
    return data.follower;                                                                                      // 24
  });                                                                                                          // 25
  //console.log("Seguidores: ");                                                                               // 26
  //console.log(currentFollowers);                                                                             // 27
                                                                                                               //
  return currentFollowers;                                                                                     // 29
};                                                                                                             // 30
                                                                                                               //
UserUtils.findNotifications = function (username) {                                                            // 32
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                             // 34
                                                                                                               //
UserUtils.findNotifForTypeNotif = function (username, type) {                                                  // 36
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false, typeOfNotif: type }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                             // 38
                                                                                                               //
UserUtils.findOneNotification = function (username) {                                                          // 40
  return Notifications.findOne({ recepNotif: username, read: false, isOwnTwiit: false }, { sort: { twiitTimeStamp: -1 } });
};                                                                                                             // 42
                                                                                                               //
UserUtils.findNumberNotif = function (username) {                                                              // 44
  return Notifications.find({ recepNotif: username, read: false, isOwnTwiit: false, $or: [{ typeOfNotif: 'twiit' }, { typeOfNotif: 'fav' }, { typeOfNotif: 'comment' }] }).count();
};                                                                                                             // 46
                                                                                                               //
UserUtils.findWhatsAppNotifications = function (notifId) {                                                     // 48
  return Notifications.findOne({ _id: notifId });                                                              // 49
};                                                                                                             // 50
                                                                                                               //
UserUtils.findNumberFavPerTwiit = function (idTwiit) {                                                         // 52
  var twiitNumFav = Twitts.findOne({ _id: idTwiit }).numFav;                                                   // 53
  return twiitNumFav;                                                                                          // 54
};                                                                                                             // 55
                                                                                                               //
UserUtils.findFavsForTwiit = function (id) {                                                                   // 57
  return Favs.findOne({ idTwiit: id });                                                                        // 58
};                                                                                                             // 59
                                                                                                               //
UserUtils.addFavToTwiit = function (id, idUser) {                                                              // 61
  var resultToUpdate = false;                                                                                  // 62
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT         // 63
  var favObject = UserUtils.findFavsForTwiit(id);                                                              // 64
                                                                                                               //
  if (!favObject) {                                                                                            // 66
    //console.log("No tiene FAVS");                                                                            // 67
                                                                                                               //
  } else {                                                                                                     // 69
    var arrAux = favObject.idUserTapFav;                                                                       // 70
    var idFav = favObject._id;                                                                                 // 71
                                                                                                               //
    arrAux.push(idUser);                                                                                       // 73
    var num = UserUtils.findNumberFavPerTwiit(id);                                                             // 74
    num++;                                                                                                     // 75
                                                                                                               //
    //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                                  // 77
    res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                              // 78
    resT = Twitts.update(id, { $set: { numFav: num } });                                                       // 79
                                                                                                               //
    //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                       // 81
    if (res && resT) {                                                                                         // 82
      resultToUpdate = true;                                                                                   // 83
    }                                                                                                          // 84
  }                                                                                                            // 85
                                                                                                               //
  return resultToUpdate;                                                                                       // 87
};                                                                                                             // 88
                                                                                                               //
UserUtils.removeFavToTwiit = function (id, idUser) {                                                           // 90
  var resultToUpdate = false;                                                                                  // 91
  //RECUPERAMOS EL ARRAY QUE USAREMOS PARA ALMACENAR TODOS LOS ID DE LOS USUARIOS QUE DEN FAV AL TWIIT         // 92
  var favObject = UserUtils.findFavsForTwiit(id);                                                              // 93
  var arrAux = favObject.idUserTapFav;                                                                         // 94
  var idFav = favObject._id;                                                                                   // 95
                                                                                                               //
  //HAY QUE AVERIGUAR LA POSICION DEL idUser DENTRO DEL ARRAY DE LA BBDD                                       // 97
  var posIdUser = arrAux.indexOf(idUser);                                                                      // 98
  //AHORA ELIMINAMOS EL ELEMENTO ASOCIADO A ESA POSICION                                                       // 99
  delete arrAux[posIdUser];                                                                                    // 100
                                                                                                               //
  var num = UserUtils.findNumberFavPerTwiit(id);                                                               // 102
  num--;                                                                                                       // 103
                                                                                                               //
  //AHORA HACEMOS LAS OPERACIONES DE UPDATE                                                                    // 105
  res = Favs.update(idFav, { $set: { idUserTapFav: arrAux } });                                                // 106
  resT = Twitts.update(id, { $set: { numFav: num } });                                                         // 107
                                                                                                               //
  //COMPROBAMOS EL RESULTADO DE LA OPERACION DE UPDATE                                                         // 109
  if (res && resT) {                                                                                           // 110
    resultToUpdate = true;                                                                                     // 111
  }                                                                                                            // 112
                                                                                                               //
  return resultToUpdate;                                                                                       // 114
};                                                                                                             // 115
                                                                                                               //
UserUtils.findTwiitFromNotif = function (id) {                                                                 // 117
  var twiitId = Notifications.findOne(id).twiitId;                                                             // 118
  return twiitId;                                                                                              // 119
};                                                                                                             // 120
                                                                                                               //
UserUtils.findNumComment = function (idTweet) {                                                                // 122
  return Twitts.findOne({ _id: idTweet }).numComment;                                                          // 123
};                                                                                                             // 124
                                                                                                               //
//PARA MOSTRAR NOTIFICACIONES EN EL NAVEGADOR WEB                                                              // 126
UserUtils.createNotifToBrowser = function (typeNotif, userName) {                                              // 127
  if (Notification) {                                                                                          // 128
    if (Notification.permission !== "granted") {                                                               // 129
      Notification.requestPermission();                                                                        // 130
    }                                                                                                          // 131
    var title = "TwiitClone";                                                                                  // 132
    var bodyNotif = "";                                                                                        // 133
                                                                                                               //
    if (typeNotif === "fav") {                                                                                 // 135
      bodyNotif = "El usuario " + userName + " ha dado fav a un twiit tuyo";                                   // 136
    } else if (typeNotif === "comment") {                                                                      // 137
      bodyNotif = "El usuario " + userName + " ha comentado un twiit tuyo";                                    // 138
    } else if (typeNotif === "twiit") {                                                                        // 139
      bodyNotif = "El usuario " + userName + " ha publicado a un twiit nuevo";                                 // 140
    } else if (typeNotif === "moreNotif") {                                                                    // 141
      bodyNotif = "Tienes muchas Notificaciones";                                                              // 142
    }                                                                                                          // 143
                                                                                                               //
    var extra = { body: bodyNotif };                                                                           // 145
                                                                                                               //
    var noti = new Notification(title, extra);                                                                 // 147
                                                                                                               //
    noti.onclick = function () {                                                                               // 149
      // Al hacer click                                                                                        // 150
      window.location = "/Notifications/" + Meteor.user().username;                                            // 151
    };                                                                                                         // 152
                                                                                                               //
    noti.onclose = {                                                                                           // 154
      // Al cerrar                                                                                             // 155
    };                                                                                                         // 154
                                                                                                               //
    setTimeout(function () {                                                                                   // 158
      noti.close();                                                                                            // 158
    }, 5000);                                                                                                  // 158
  }                                                                                                            // 159
};                                                                                                             // 160
                                                                                                               //
UserUtils.findUserFromTwiit = function (twiitId) {                                                             // 162
  return Twitts.findOne({ _id: twiitId }).user;                                                                // 163
};                                                                                                             // 164
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"chatsData.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// server/chatsData.js                                                                                         //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
Meteor.methods({                                                                                               // 1
                                                                                                               //
  'findChatsAvailable': function () {                                                                          // 3
    function findChatsAvailable() {                                                                            // 3
      console.log("Buscando chats");                                                                           // 4
      var chatsAvailable = Chats.find({}, { $or: [{ userCreatedChat: Meteor.user().username }, { userToChat: Meteor.user().username }] }).fetch();;
      return chatsAvailable;                                                                                   // 6
    }                                                                                                          // 7
                                                                                                               //
    return findChatsAvailable;                                                                                 // 3
  }(),                                                                                                         // 3
                                                                                                               //
  'findChatFromUser': function () {                                                                            // 9
    function findChatFromUser(username) {                                                                      // 9
      var nameChat = username + "_" + Meteor.user().username;                                                  // 10
      var msgFound = ChatsMsg.find({ "nameChat": nameChat }).fetch();                                          // 11
      if (msgFound.length === 0) {                                                                             // 12
        console.log(msgFound);                                                                                 // 13
        nameChat = Meteor.user().username + "_" + username;                                                    // 14
        msgFound = ChatsMsg.find({ "nameChat": nameChat }).fetch();                                            // 15
      }                                                                                                        // 16
      return msgFound;                                                                                         // 17
    }                                                                                                          // 18
                                                                                                               //
    return findChatFromUser;                                                                                   // 9
  }(),                                                                                                         // 9
                                                                                                               //
  'insertMsgChat': function () {                                                                               // 20
    function insertMsgChat(messageData) {                                                                      // 20
      var userToSentMsg = Meteor.call('findUserFromDB', messageData.userRecepMsg);                             // 21
                                                                                                               //
      if (Meteor.user()) {                                                                                     // 23
        ChatsMsg.insert({                                                                                      // 24
          userIdSentMsg: Meteor.user()._id,                                                                    // 25
          userNameSentMsg: Meteor.user().username,                                                             // 26
          userRecepMsg: messageData.userRecepMsg,                                                              // 27
          userIdRecepMsg: userToSentMsg._id,                                                                   // 28
          nameChat: messageData.userRecepMsg + "_" + Meteor.user().username,                                   // 29
          contentMsg: messageData.contentMessage,                                                              // 30
          messageTimestamp: new Date()                                                                         // 31
        });                                                                                                    // 24
      }                                                                                                        // 33
    }                                                                                                          // 34
                                                                                                               //
    return insertMsgChat;                                                                                      // 20
  }(),                                                                                                         // 20
                                                                                                               //
  'insertMsg': function () {                                                                                   // 36
    function insertMsg(messageData) {                                                                          // 36
      var userToSentMsg = Meteor.call('findUserFromDB', messageData.userRecepMsg);                             // 37
                                                                                                               //
      if (Meteor.user()) {                                                                                     // 39
        ChatsMsg.insert({                                                                                      // 40
          userIdSentMsg: Meteor.user()._id,                                                                    // 41
          userNameSentMsg: Meteor.user().username,                                                             // 42
          userRecepMsg: messageData.userRecepMsg,                                                              // 43
          userIdRecepMsg: userToSentMsg._id,                                                                   // 44
          nameChat: messageData.nameChat,                                                                      // 45
          contentMsg: messageData.contentMessage,                                                              // 46
          messageTimestamp: new Date()                                                                         // 47
        });                                                                                                    // 40
      }                                                                                                        // 49
    }                                                                                                          // 50
                                                                                                               //
    return insertMsg;                                                                                          // 36
  }(),                                                                                                         // 36
                                                                                                               //
  'checkChat': function () {                                                                                   // 52
    function checkChat(userNameToCheckChat) {                                                                  // 52
      var chatIsAvailable = Chats.findOne({ "nameChat": userNameToCheckChat + "_" + Meteor.user().username });
      console.log(chatIsAvailable);                                                                            // 54
      if (chatIsAvailable) {                                                                                   // 55
        return false;                                                                                          // 56
      } else {                                                                                                 // 57
        return true;                                                                                           // 58
      }                                                                                                        // 59
    }                                                                                                          // 60
                                                                                                               //
    return checkChat;                                                                                          // 52
  }(),                                                                                                         // 52
                                                                                                               //
  'createChat': function () {                                                                                  // 62
    function createChat(userNameToCreateChat) {                                                                // 62
      Chats.insert({                                                                                           // 63
        userCreatedChat: Meteor.user().username,                                                               // 64
        userToChat: userNameToCreateChat,                                                                      // 65
        nameChat: userNameToCreateChat + "_" + Meteor.user().username                                          // 66
      });                                                                                                      // 63
    }                                                                                                          // 68
                                                                                                               //
    return createChat;                                                                                         // 62
  }(),                                                                                                         // 62
                                                                                                               //
  'removeChat': function () {                                                                                  // 70
    function removeChat(nameUserRecepChat) {                                                                   // 70
      ChatsMsg.remove({ "nameChat": nameUserRecepChat + "_" + Meteor.user().username });                       // 71
      Chats.remove({ "nameChat": nameUserRecepChat + "_" + Meteor.user().username });                          // 72
    }                                                                                                          // 73
                                                                                                               //
    return removeChat;                                                                                         // 70
  }(),                                                                                                         // 70
                                                                                                               //
  'findLastMessage': function () {                                                                             // 75
    function findLastMessage(nameChat) {                                                                       // 75
      var users = nameChat.split('_');                                                                         // 76
      var chats = ChatsMsg.findOne({ "nameChat": nameChat }, { sort: { messageTimestamp: -1 } });              // 77
                                                                                                               //
      if (!chats) {                                                                                            // 79
        chats = ChatsMsg.findOne({ "userNameSentMsg": users[1], "userRecepMsg": users[0] }, { sort: { messageTimestamp: -1 } });
      }                                                                                                        // 81
                                                                                                               //
      console.log(chats);                                                                                      // 83
                                                                                                               //
      if (chats) {                                                                                             // 85
        return chats;                                                                                          // 86
      }                                                                                                        // 87
    }                                                                                                          // 88
                                                                                                               //
    return findLastMessage;                                                                                    // 75
  }(),                                                                                                         // 75
                                                                                                               //
  'findContactsAvailable': function () {                                                                       // 90
    function findContactsAvailable() {                                                                         // 90
      /*OBTENEMOS LOS USUARIOS A LOS QUE SIGUE EL CURRENTUSER*/                                                // 91
      var currentFollowings = UserUtils.findFollowings(Meteor.user().username);                                // 92
      var currentFollowers = UserUtils.findFollowers(Meteor.user().username);                                  // 93
      var currentContacts = [];                                                                                // 94
                                                                                                               //
      currentFollowings.forEach(function (elem, pos) {                                                         // 96
        if (currentFollowers.indexOf(elem) >= 0) {                                                             // 97
          currentContacts.push(elem);                                                                          // 98
        }                                                                                                      // 99
      });                                                                                                      // 100
                                                                                                               //
      return currentContacts;                                                                                  // 102
    }                                                                                                          // 103
                                                                                                               //
    return findContactsAvailable;                                                                              // 90
  }()                                                                                                          // 90
});                                                                                                            // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"followUsers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// server/followUsers.js                                                                                       //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
Meteor.methods({                                                                                               // 1
  'findUser': function () {                                                                                    // 2
    function findUser(username) {                                                                              // 2
      return Meteor.users.findOne({                                                                            // 3
        username: username                                                                                     // 4
      }, {                                                                                                     // 3
        fields: { 'username': 1 }                                                                              // 6
      });                                                                                                      // 5
    }                                                                                                          // 8
                                                                                                               //
    return findUser;                                                                                           // 2
  }(),                                                                                                         // 2
                                                                                                               //
  'followUser': function () {                                                                                  // 10
    function followUser(username) {                                                                            // 10
      Relationships.insert({                                                                                   // 11
        follower: Meteor.user().username,                                                                      // 12
        following: username                                                                                    // 13
      });                                                                                                      // 11
    }                                                                                                          // 15
                                                                                                               //
    return followUser;                                                                                         // 10
  }(),                                                                                                         // 10
                                                                                                               //
  'unfollowUser': function () {                                                                                // 17
    function unfollowUser(username) {                                                                          // 17
      Relationships.remove({                                                                                   // 18
        follower: Meteor.user().username,                                                                      // 19
        following: username                                                                                    // 20
      });                                                                                                      // 18
    }                                                                                                          // 22
                                                                                                               //
    return unfollowUser;                                                                                       // 17
  }(),                                                                                                         // 17
                                                                                                               //
  'recommendUsers': function () {                                                                              // 24
    function recommendUsers() {                                                                                // 24
      if (Meteor.user()) {                                                                                     // 25
        var currentFollowings = UserUtils.findFollowings(Meteor.user().username);                              // 26
                                                                                                               //
        console.log("currentFollowings");                                                                      // 28
        console.log(currentFollowings);                                                                        // 29
                                                                                                               //
        var recUsers = Meteor.users.find({                                                                     // 31
          username: {                                                                                          // 32
            $nin: currentFollowings                                                                            // 33
          }                                                                                                    // 32
        }, {                                                                                                   // 31
          fields: { 'username': 1 },                                                                           // 36
          limit: 5                                                                                             // 37
        }).fetch();                                                                                            // 35
                                                                                                               //
        return recUsers;                                                                                       // 40
      }                                                                                                        // 41
    }                                                                                                          // 42
                                                                                                               //
    return recommendUsers;                                                                                     // 24
  }()                                                                                                          // 24
});                                                                                                            // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// server/notifications.js                                                                                     //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
Meteor.methods({                                                                                               // 1
  'createTwiitNotification': function () {                                                                     // 2
    function createTwiitNotification(notif) {                                                                  // 2
      var twiit = Twitts.findOne(notif._id);                                                                   // 3
      var typeNotif = notif.typeOfNotif;                                                                       // 4
                                                                                                               //
      if (notif.recepNotif === notif.actorNotif) {                                                             // 6
        isOwn = true;                                                                                          // 7
      } else {                                                                                                 // 8
        isOwn = false;                                                                                         // 9
      }                                                                                                        // 10
                                                                                                               //
      Notifications.insert({                                                                                   // 12
        twiitMessage: twiit.message,                                                                           // 13
        twiitId: twiit._id,                                                                                    // 14
        recepNotif: notif.recepNotif,                                                                          // 15
        actorNotif: notif.actorNotif,                                                                          // 16
        twiitTimeStamp: twiit.timestamp,                                                                       // 17
        typeOfNotif: typeNotif,                                                                                // 18
        read: false,                                                                                           // 19
        isOwnTwiit: isOwn                                                                                      // 20
      });                                                                                                      // 12
    }                                                                                                          // 23
                                                                                                               //
    return createTwiitNotification;                                                                            // 2
  }(),                                                                                                         // 2
                                                                                                               //
  'createWhatsAppNotification': function () {                                                                  // 25
    function createWhatsAppNotification(notif) {                                                               // 25
                                                                                                               //
      Notifications.insert({                                                                                   // 27
        recepNotif: notif.recepNotif,                                                                          // 28
        actorNotif: notif.actorNotif,                                                                          // 29
        timeStamp: notif.timestamp,                                                                            // 30
        typeOfNotif: notif.typeOfNotif,                                                                        // 31
        read: false,                                                                                           // 32
        isOwnTwiit: false                                                                                      // 33
      });                                                                                                      // 27
    }                                                                                                          // 36
                                                                                                               //
    return createWhatsAppNotification;                                                                         // 25
  }(),                                                                                                         // 25
                                                                                                               //
  'createResponseWhatsAppNotification': function () {                                                          // 38
    function createResponseWhatsAppNotification(notif) {                                                       // 38
                                                                                                               //
      Notifications.insert({                                                                                   // 40
        recepNotif: notif.recepNotif,                                                                          // 41
        actorNotif: notif.actorNotif,                                                                          // 42
        timeStamp: notif.timestamp,                                                                            // 43
        typeOfNotif: notif.typeOfNotif,                                                                        // 44
        stateResponse: notif.stateResponse,                                                                    // 45
        idNotifRequestWhatsApp: notif.idNotifRequestWhatsApp,                                                  // 46
        read: false,                                                                                           // 47
        isOwnTwiit: false                                                                                      // 48
      });                                                                                                      // 40
    }                                                                                                          // 51
                                                                                                               //
    return createResponseWhatsAppNotification;                                                                 // 38
  }()                                                                                                          // 38
});                                                                                                            // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// server/publications.js                                                                                      //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
Meteor.publish('twitts', function () {                                                                         // 1
  if (Meteor.userId) {                                                                                         // 2
    var username = Meteor.users.findOne({ _id: this.userId }).username;                                        // 3
    var currentFollowings = UserUtils.findFollowings(username);                                                // 4
                                                                                                               //
    return Twitts.find({ user: { $in: currentFollowings } });                                                  // 6
  }                                                                                                            // 7
});                                                                                                            // 8
                                                                                                               //
Meteor.publish('twittsProfile', function (username) {                                                          // 10
  if (Meteor.userId) {                                                                                         // 11
    return Twitts.find();                                                                                      // 12
  }                                                                                                            // 13
});                                                                                                            // 14
                                                                                                               //
Meteor.publish('twittsWithComment', function (idTweet) {                                                       // 16
  if (Meteor.userId) {                                                                                         // 17
    return Twitts.find();                                                                                      // 18
  }                                                                                                            // 19
});                                                                                                            // 20
                                                                                                               //
Meteor.publish('notifications', function () {                                                                  // 22
  return Notifications.find();                                                                                 // 23
});                                                                                                            // 24
                                                                                                               //
Meteor.publish('allNotifications', function (notifId) {                                                        // 26
  return Notifications.find({ _id: notifId }, { read: false });                                                // 27
});                                                                                                            // 28
                                                                                                               //
Meteor.publish('whatsAppNotifications', function (notifName) {                                                 // 30
  return Notifications.find({ recepNotif: notifName }, { read: false });                                       // 31
});                                                                                                            // 32
                                                                                                               //
Meteor.publish('favs', function () {                                                                           // 34
  return Favs.find();                                                                                          // 35
});                                                                                                            // 36
                                                                                                               //
Meteor.publish('dataUser', function () {                                                                       // 38
  return DataUser.find();                                                                                      // 39
});                                                                                                            // 40
                                                                                                               //
Meteor.publish('images', function () {                                                                         // 42
  return Images.find();                                                                                        // 43
});                                                                                                            // 44
                                                                                                               //
Meteor.publish('chatsMsg', function () {                                                                       // 46
  if (Meteor.userId) {                                                                                         // 47
    return ChatsMsg.find({ userIdRecepMsg: this.userId });                                                     // 48
  }                                                                                                            // 49
});                                                                                                            // 50
                                                                                                               //
Meteor.publish('chats', function () {                                                                          // 52
  if (Meteor.userId) {                                                                                         // 53
    return Chats.find();                                                                                       // 54
  }                                                                                                            // 55
});                                                                                                            // 56
                                                                                                               //
Meteor.publish('files', function () {                                                                          // 58
  return Files.find().cursor;                                                                                  // 59
});                                                                                                            // 60
                                                                                                               //
if (Meteor.isServer) {                                                                                         // 62
  Files.denyClient();                                                                                          // 63
                                                                                                               //
  Meteor.startup(function () {                                                                                 // 65
    if (!Files.findOne()) {                                                                                    // 66
      Files.load('https://raw.githubusercontent.com/VeliovGroup/Meteor-Files/master/logo.png', {               // 67
        fileName: 'logo.png'                                                                                   // 68
      });                                                                                                      // 67
    }                                                                                                          // 70
  });                                                                                                          // 71
}                                                                                                              // 72
                                                                                                               //
/*                                                                                                             // 74
Meteor.publishComposite('twitts', function(username) {                                                         //
  return {                                                                                                     //
    find: function() {                                                                                         //
      // Comprobar los usuarios a los que se está siguiendo                                                    //
      return Relationships.find({ follower: username });                                                       //
    },                                                                                                         //
    children: [{                                                                                               //
      find: function(relationship) {                                                                           //
        // Encontrar mensajes de los usuarios que se siguen                                                    //
        return Twitts.find({user: relationship.following});                                                    //
      }                                                                                                        //
    }]                                                                                                         //
  }                                                                                                            //
});                                                                                                            //
*/                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tweetBox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// server/tweetBox.js                                                                                          //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
Meteor.methods({                                                                                               // 1
  'insertTweet': function () {                                                                                 // 2
    function insertTweet(tweet) {                                                                              // 2
      var insertComment = false;                                                                               // 3
                                                                                                               //
      twiit = new Object();                                                                                    // 5
      twiit.message = tweet.message;                                                                           // 6
      twiit.user = Meteor.user().username;                                                                     // 7
      twiit.timestamp = new Date();                                                                            // 8
      twiit.numFav = 0;                                                                                        // 9
      twiit.numComment = 0;                                                                                    // 10
                                                                                                               //
      //SE EJECUTA CUANDO SE QUIERE INSERTAR UN TWIIT DESDE UN COMENTARIO                                      // 12
      if (tweet.type) {                                                                                        // 13
        twiit.commentType = true;                                                                              // 14
        twiit.twiitIdComment = tweet.twiitId;                                                                  // 15
      }                                                                                                        // 16
                                                                                                               //
      fav = new Object();                                                                                      // 18
      fav.idTwiit = "";                                                                                        // 19
      fav.idUserTapFav = [];                                                                                   // 20
                                                                                                               //
      if (tweet.type) {                                                                                        // 22
        if (Meteor.user()) {                                                                                   // 23
          twiit._id = Twitts.insert({                                                                          // 24
            message: twiit.message,                                                                            // 25
            user: twiit.user,                                                                                  // 26
            timestamp: twiit.timestamp,                                                                        // 27
            numFav: twiit.numFav,                                                                              // 28
            numComment: twiit.numComment,                                                                      // 29
            commentType: twiit.commentType,                                                                    // 30
            twiitIdComment: twiit.twiitIdComment                                                               // 31
          });                                                                                                  // 24
        }                                                                                                      // 33
      } else {                                                                                                 // 34
        if (Meteor.user()) {                                                                                   // 35
          twiit._id = Twitts.insert({                                                                          // 36
            message: twiit.message,                                                                            // 37
            user: twiit.user,                                                                                  // 38
            timestamp: twiit.timestamp,                                                                        // 39
            numFav: twiit.numFav,                                                                              // 40
            numComment: twiit.numComment                                                                       // 41
          });                                                                                                  // 36
        }                                                                                                      // 43
      }                                                                                                        // 44
                                                                                                               //
      fav._id = Favs.insert({                                                                                  // 46
        idTwiit: twiit._id,                                                                                    // 47
        idUserTapFav: fav.idUserTapFav                                                                         // 48
      });                                                                                                      // 46
                                                                                                               //
      var notif = new Object();                                                                                // 51
      notif._id = twiit._id;                                                                                   // 52
      notif.typeOfNotif = tweet.typeOfNotif;                                                                   // 53
      notif.actorNotif = tweet.actorUser;                                                                      // 54
      notif.recepNotif = tweet.recepUser;                                                                      // 55
                                                                                                               //
      //console.log(notif);                                                                                    // 57
                                                                                                               //
      Meteor.call('createTwiitNotification', notif);                                                           // 59
                                                                                                               //
      if (tweet.type) {                                                                                        // 61
        Twitts.update({ _id: twiit.twiitIdComment }, { $set: { numComment: tweet.numComment } });              // 62
      }                                                                                                        // 63
    }                                                                                                          // 64
                                                                                                               //
    return insertTweet;                                                                                        // 2
  }()                                                                                                          // 2
});                                                                                                            // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userData.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// server/userData.js                                                                                          //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
Meteor.methods({                                                                                               // 1
  'findUserFromDB': function () {                                                                              // 2
    function findUserFromDB(username) {                                                                        // 2
      //Meteor._sleepForMs(1000);                                                                              // 3
      return Meteor.users.findOne({ "username": username });                                                   // 4
    }                                                                                                          // 5
                                                                                                               //
    return findUserFromDB;                                                                                     // 2
  }(),                                                                                                         // 2
                                                                                                               //
  'insertDataUser': function () {                                                                              // 7
    function insertDataUser(userData) {                                                                        // 7
                                                                                                               //
      //BUSCAMOS AL USUARIO QUE SE HA CREADO ANTES PARA RECUPERAR SU _ID                                       // 9
      Meteor.call('findUserFromDB', userData.userNameProfile, function (err, res) {                            // 10
        userData.userId = res._id;                                                                             // 11
      });                                                                                                      // 12
                                                                                                               //
      if (Meteor.user()) {                                                                                     // 14
        DataUser.insert({                                                                                      // 15
          userId: userData.userId,                                                                             // 16
          userNameProfile: userData.userNameProfile,                                                           // 17
          userName: userData.userName,                                                                         // 18
          userImg: userData.userImg,                                                                           // 19
          userDescription: userData.userDescription,                                                           // 20
          showWhatsTo: []                                                                                      // 21
        });                                                                                                    // 15
      }                                                                                                        // 23
    }                                                                                                          // 24
                                                                                                               //
    return insertDataUser;                                                                                     // 7
  }(),                                                                                                         // 7
                                                                                                               //
  'findUserData': function () {                                                                                // 26
    function findUserData(userName) {                                                                          // 26
      return DataUser.findOne({ userNameProfile: userName });                                                  // 27
    }                                                                                                          // 28
                                                                                                               //
    return findUserData;                                                                                       // 26
  }(),                                                                                                         // 26
                                                                                                               //
  'findUserDataWithId': function () {                                                                          // 30
    function findUserDataWithId(userId) {                                                                      // 30
      return DataUser.findOne({ userId: userId });                                                             // 31
    }                                                                                                          // 32
                                                                                                               //
    return findUserDataWithId;                                                                                 // 30
  }(),                                                                                                         // 30
                                                                                                               //
  'findUserImg': function () {                                                                                 // 34
    function findUserImg(userImg) {                                                                            // 34
      return Images.findOne({ _id: userImg }).imgCode;                                                         // 35
    }                                                                                                          // 36
                                                                                                               //
    return findUserImg;                                                                                        // 34
  }(),                                                                                                         // 34
                                                                                                               //
  'updUserData': function () {                                                                                 // 38
    function updUserData(newData) {                                                                            // 38
      DataUser.update({ _id: newData.userId }, { $set: { userDescription: newData.description, userImg: newData.imgId } });
    }                                                                                                          // 40
                                                                                                               //
    return updUserData;                                                                                        // 38
  }(),                                                                                                         // 38
                                                                                                               //
  'updUserDataSocialNetworks': function () {                                                                   // 42
    function updUserDataSocialNetworks(newData) {                                                              // 42
      if (newData.userFb != null && newData.userInsta != null && newData.userWhats != null) {                  // 43
        DataUser.update({ _id: newData.userId }, { $set: { userFb: newData.userFb, userWhats: newData.userWhats, userInsta: newData.userInsta } });
      } else {                                                                                                 // 45
        if (newData.userFb != null) {                                                                          // 46
          DataUser.update({ _id: newData.userId }, { $set: { userFb: newData.userFb } });                      // 47
        }                                                                                                      // 48
                                                                                                               //
        if (newData.userInsta != null) {                                                                       // 50
          DataUser.update({ _id: newData.userId }, { $set: { userInsta: newData.userInsta } });                // 51
        }                                                                                                      // 52
                                                                                                               //
        if (newData.userWhats != null) {                                                                       // 54
          DataUser.update({ _id: newData.userId }, { $set: { userWhats: newData.userWhats } });                // 55
        }                                                                                                      // 56
      }                                                                                                        // 57
    }                                                                                                          // 58
                                                                                                               //
    return updUserDataSocialNetworks;                                                                          // 42
  }(),                                                                                                         // 42
                                                                                                               //
  'removeDataSocialNetworks': function () {                                                                    // 60
    function removeDataSocialNetworks(newData) {                                                               // 60
      console.log(newData.userId + " " + newData.propertyToRem);                                               // 61
                                                                                                               //
      switch (newData.propertyToRem) {                                                                         // 63
        case "WhatsApp":                                                                                       // 64
          {                                                                                                    // 64
            DataUser.update({ _id: newData.userId }, { $unset: { "userWhats": 1 } });                          // 65
          };                                                                                                   // 66
          break;                                                                                               // 67
        case "Instagram":                                                                                      // 68
          {                                                                                                    // 68
            DataUser.update({ _id: newData.userId }, { $unset: { "userInsta": 1 } });                          // 69
          };                                                                                                   // 70
          break;                                                                                               // 71
        case "Facebook":                                                                                       // 72
          {                                                                                                    // 72
            DataUser.update({ _id: newData.userId }, { $unset: { "userFb": 1 } });                             // 73
          };                                                                                                   // 74
          break;                                                                                               // 75
      }                                                                                                        // 63
                                                                                                               //
      //ESTE COMANDO ES EL QUE SE UTILIZA EN MONGO                                                             // 78
      //db.dataUser.update({"_id": "rQTzzDMfr4ZkiR7S8"},  {"$unset":{"userWhats":1}});                         // 79
    }                                                                                                          // 80
                                                                                                               //
    return removeDataSocialNetworks;                                                                           // 60
  }(),                                                                                                         // 60
                                                                                                               //
  'insertNewImage': function () {                                                                              // 82
    function insertNewImage(code) {                                                                            // 82
      return Images.insert({                                                                                   // 83
        imgCode: code                                                                                          // 84
      });                                                                                                      // 83
    }                                                                                                          // 86
                                                                                                               //
    return insertNewImage;                                                                                     // 82
  }(),                                                                                                         // 82
                                                                                                               //
  'removeThisUser': function () {                                                                              // 88
    function removeThisUser(userToRemove) {                                                                    // 88
      //HAY QUE ELIMINAR EL USUARIO DE dataUser Y DE users                                                     // 89
      var idImgUser = DataUser.findOne({ userId: userToRemove.id }).userImg;                                   // 90
                                                                                                               //
      if (idImgUser) {                                                                                         // 92
        Images.remove({ _id: idImgUser });                                                                     // 93
      }                                                                                                        // 94
                                                                                                               //
      Notifications.remove({ recepNotif: userToRemove.name });                                                 // 96
      Relationships.remove({ follower: userToRemove.name });                                                   // 97
      Relationships.remove({ following: userToRemove.name });                                                  // 98
                                                                                                               //
      Favs.find({ idUserTapFav: userToRemove.id }).fetch().map(function (data) {                               // 100
        if (data.idUserTapFav) {                                                                               // 101
          var aux = data.idUserTapFav;                                                                         // 102
          var pos = aux.indexOf(userToRemove.id);                                                              // 103
          if (pos != -1) {                                                                                     // 104
            UserUtils.removeFavToTwiit(data.idTwiit, userToRemove.id);                                         // 105
          }                                                                                                    // 106
        }                                                                                                      // 107
      });                                                                                                      // 108
                                                                                                               //
      Twitts.remove({ user: userToRemove.name });                                                              // 110
      Meteor.users.remove({ _id: userToRemove.id });                                                           // 111
      DataUser.remove({ userId: userToRemove.id });                                                            // 112
    }                                                                                                          // 113
                                                                                                               //
    return removeThisUser;                                                                                     // 88
  }(),                                                                                                         // 88
                                                                                                               //
  'updateArrayWhatsAppAuthorize': function () {                                                                // 115
    function updateArrayWhatsAppAuthorize(data) {                                                              // 115
      var user = DataUser.findOne({ userNameProfile: data.user });                                             // 116
      var arrShowWhats = user.showWhatsTo;                                                                     // 117
      console.log("Array: ");                                                                                  // 118
      console.log(arrShowWhats);                                                                               // 119
                                                                                                               //
      //BUSCAMOS EL USUARIO QUE VAMOS A AÑADIR AL ARRAY                                                        // 121
      var userToAdd = DataUser.findOne({ userNameProfile: data.userToShow });                                  // 122
      arrShowWhats.push(userToAdd.userId);                                                                     // 123
                                                                                                               //
      console.log(arrShowWhats);                                                                               // 125
      console.log(user);                                                                                       // 126
                                                                                                               //
      DataUser.update({ userId: user.userId }, { $set: { showWhatsTo: arrShowWhats } });                       // 128
    }                                                                                                          // 130
                                                                                                               //
    return updateArrayWhatsAppAuthorize;                                                                       // 115
  }(),                                                                                                         // 115
                                                                                                               //
  'updateShowWhatsTo': function () {                                                                           // 132
    function updateShowWhatsTo(data) {                                                                         // 132
      DataUser.update({ userId: data.userId }, { $set: { showWhatsTo: data.showWhats } });                     // 133
    }                                                                                                          // 134
                                                                                                               //
    return updateShowWhatsTo;                                                                                  // 132
  }()                                                                                                          // 132
                                                                                                               //
});                                                                                                            // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userFileManagement.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// server/userFileManagement.js                                                                                //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
Meteor.methods({                                                                                               // 1
  'removeThisFile': function () {                                                                              // 2
    function removeThisFile(idFileToRem) {                                                                     // 2
      console.log(idFileToRem);                                                                                // 3
      if (Meteor.isServer) {                                                                                   // 4
        //var fileFound = Files.find({_id: idFileToRem}).fetch();                                              // 5
        Files.remove({ _id: idFileToRem });                                                                    // 6
      }                                                                                                        // 7
    }                                                                                                          // 8
                                                                                                               //
    return removeThisFile;                                                                                     // 2
  }(),                                                                                                         // 2
                                                                                                               //
  'searchFiles': function () {                                                                                 // 10
    function searchFiles() {                                                                                   // 10
      if (Meteor.isServer) {                                                                                   // 11
        console.log('Searching files..');                                                                      // 12
        var filesFound = Files.find().fetch();                                                                 // 13
        console.log(filesFound);                                                                               // 14
        return filesFound;                                                                                     // 15
      }                                                                                                        // 16
    }                                                                                                          // 17
                                                                                                               //
    return searchFiles;                                                                                        // 10
  }(),                                                                                                         // 10
                                                                                                               //
  'searchOneFile': function () {                                                                               // 19
    function searchOneFile() {                                                                                 // 19
      if (Meteor.isServer) {                                                                                   // 20
        console.log('Search one file..');                                                                      // 21
        var fileFound = Files.findOne().fetch();                                                               // 22
        return fileFound;                                                                                      // 23
      }                                                                                                        // 24
    }                                                                                                          // 25
                                                                                                               //
    return searchOneFile;                                                                                      // 19
  }(),                                                                                                         // 19
                                                                                                               //
  'searchThisFile': function () {                                                                              // 27
    function searchThisFile(idFile) {                                                                          // 27
      if (Meteor.isServer) {                                                                                   // 28
        console.log('Search file ' + idFile);                                                                  // 29
        var fileFound = Files.findOne({ _id: idFile }).fetch();                                                // 30
        return fileFound;                                                                                      // 31
      }                                                                                                        // 32
    }                                                                                                          // 33
                                                                                                               //
    return searchThisFile;                                                                                     // 27
  }()                                                                                                          // 27
});                                                                                                            // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userManagement.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// server/userManagement.js                                                                                    //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
Meteor.methods({                                                                                               // 1
  /*                                                                                                           // 2
  'tweetsPublish': function(username) {                                                                        //
    console.log("Usuario a buscar: " + username);                                                              //
    console.log("Resultado: ");                                                                                //
    var resul =  UserUtils.findTweets(username);                                                               //
    return resul.length;                                                                                       //
  },                                                                                                           //
  */                                                                                                           //
  'usersFollowers': function () {                                                                              // 10
    function usersFollowers(username) {                                                                        // 10
      var currentFollowers = UserUtils.findFollowers(username);                                                // 11
      return currentFollowers.length;                                                                          // 12
    }                                                                                                          // 13
                                                                                                               //
    return usersFollowers;                                                                                     // 10
  }(),                                                                                                         // 10
                                                                                                               //
  'usersFollowings': function () {                                                                             // 15
    function usersFollowings(username) {                                                                       // 15
      var currentFollowings = UserUtils.findFollowings(username);                                              // 16
                                                                                                               //
      return currentFollowings.length;                                                                         // 18
    }                                                                                                          // 19
                                                                                                               //
    return usersFollowings;                                                                                    // 15
  }(),                                                                                                         // 15
                                                                                                               //
  'getFollowers': function () {                                                                                // 21
    function getFollowers(username) {                                                                          // 21
      var currentFollowers = UserUtils.findFollowers(username);                                                // 22
                                                                                                               //
      return currentFollowers;                                                                                 // 24
    }                                                                                                          // 25
                                                                                                               //
    return getFollowers;                                                                                       // 21
  }(),                                                                                                         // 21
                                                                                                               //
  'getFollowings': function () {                                                                               // 27
    function getFollowings(username) {                                                                         // 27
      var currentFollowings = UserUtils.findFollowings(username);                                              // 28
                                                                                                               //
      return currentFollowings;                                                                                // 30
    }                                                                                                          // 31
                                                                                                               //
    return getFollowings;                                                                                      // 27
  }()                                                                                                          // 27
                                                                                                               //
});                                                                                                            // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// server/main.js                                                                                              //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});                                    // 1
                                                                                                               //
Meteor.startup(function () {                                                                                   // 3
  // code to run on server at startup                                                                          // 4
  Relationships._ensureIndex({ follower: 1, following: 1 }, { unique: 1 });                                    // 5
                                                                                                               //
  Twitts.allow({                                                                                               // 7
    insert: function () {                                                                                      // 8
      function insert(userId, disconnect) {                                                                    // 8
        return true;                                                                                           // 9
      }                                                                                                        // 10
                                                                                                               //
      return insert;                                                                                           // 8
    }(),                                                                                                       // 8
    update: function () {                                                                                      // 11
      function update(id, doc) {                                                                               // 11
        return true;                                                                                           // 12
      }                                                                                                        // 13
                                                                                                               //
      return update;                                                                                           // 11
    }()                                                                                                        // 11
                                                                                                               //
  });                                                                                                          // 7
                                                                                                               //
  Favs.allow({                                                                                                 // 17
    insert: function () {                                                                                      // 18
      function insert(userId, disconnect) {                                                                    // 18
        return true;                                                                                           // 19
      }                                                                                                        // 20
                                                                                                               //
      return insert;                                                                                           // 18
    }(),                                                                                                       // 18
    update: function () {                                                                                      // 21
      function update(userId, doc) {                                                                           // 21
        return true;                                                                                           // 22
      }                                                                                                        // 23
                                                                                                               //
      return update;                                                                                           // 21
    }()                                                                                                        // 21
  });                                                                                                          // 17
                                                                                                               //
  Notifications.allow({                                                                                        // 26
    update: function () {                                                                                      // 27
      function update(userId, doc) {                                                                           // 27
        return true;                                                                                           // 28
      }                                                                                                        // 29
                                                                                                               //
      return update;                                                                                           // 27
    }()                                                                                                        // 27
  });                                                                                                          // 26
                                                                                                               //
  DataUser.allow({                                                                                             // 32
    insert: function () {                                                                                      // 33
      function insert(userId, disconnect) {                                                                    // 33
        return true;                                                                                           // 34
      }                                                                                                        // 35
                                                                                                               //
      return insert;                                                                                           // 33
    }(),                                                                                                       // 33
    update: function () {                                                                                      // 36
      function update(userId, doc) {                                                                           // 36
        return true;                                                                                           // 37
      }                                                                                                        // 38
                                                                                                               //
      return update;                                                                                           // 36
    }()                                                                                                        // 36
                                                                                                               //
  });                                                                                                          // 32
                                                                                                               //
  Images.allow({                                                                                               // 42
    insert: function () {                                                                                      // 43
      function insert(userId, disconnect) {                                                                    // 43
        return true;                                                                                           // 44
      }                                                                                                        // 45
                                                                                                               //
      return insert;                                                                                           // 43
    }()                                                                                                        // 43
  });                                                                                                          // 42
                                                                                                               //
  Chats.allow({                                                                                                // 48
    insert: function () {                                                                                      // 49
      function insert(userId, disconnect) {                                                                    // 49
        return true;                                                                                           // 50
      }                                                                                                        // 51
                                                                                                               //
      return insert;                                                                                           // 49
    }(),                                                                                                       // 49
    update: function () {                                                                                      // 52
      function update(userId, doc) {                                                                           // 52
        return true;                                                                                           // 53
      }                                                                                                        // 54
                                                                                                               //
      return update;                                                                                           // 52
    }()                                                                                                        // 52
                                                                                                               //
  });                                                                                                          // 48
                                                                                                               //
  Files.allow({                                                                                                // 58
    insert: function () {                                                                                      // 59
      function insert() {                                                                                      // 59
        return true;                                                                                           // 60
      }                                                                                                        // 61
                                                                                                               //
      return insert;                                                                                           // 59
    }(),                                                                                                       // 59
    update: function () {                                                                                      // 62
      function update() {                                                                                      // 62
        return true;                                                                                           // 63
      }                                                                                                        // 64
                                                                                                               //
      return update;                                                                                           // 62
    }(),                                                                                                       // 62
    remove: function () {                                                                                      // 65
      function remove() {                                                                                      // 65
        console.log("Deleting");                                                                               // 66
        return true;                                                                                           // 67
      }                                                                                                        // 68
                                                                                                               //
      return remove;                                                                                           // 65
    }()                                                                                                        // 65
  });                                                                                                          // 58
});                                                                                                            // 71
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/collections.js");
require("./lib/router.js");
require("./lib/userUtils.js");
require("./server/chatsData.js");
require("./server/followUsers.js");
require("./server/notifications.js");
require("./server/publications.js");
require("./server/tweetBox.js");
require("./server/userData.js");
require("./server/userFileManagement.js");
require("./server/userManagement.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
