Meteor.methods({ 

  'findChatsAvailable' : function(){
    console.log("Buscando chats");
    var chatsAvailable = Chats.find({}, {$or: [ { userCreatedChat : Meteor.user().username}, { userToChat : Meteor.user().username } ] }, {sort: {messageTimestamp: -1}}).fetch();;
    return chatsAvailable;
  },

  'findChatFromUser': function(username) {
    var nameChat = username + "_" + Meteor.user().username;
    var msgFound = ChatsMsg.find({"nameChat" : nameChat}).fetch();
    if(msgFound.length === 0){
      console.log(msgFound);
      nameChat = Meteor.user().username + "_" + username;
      msgFound = ChatsMsg.find({"nameChat" : nameChat}).fetch();
    }
    return msgFound;
  },

  'insertMsgChat': function(messageData) {
    var userToSentMsg = Meteor.call('findUserFromDB',messageData.userRecepMsg);

    if (Meteor.user()) {
      ChatsMsg.insert({
        userIdSentMsg : Meteor.user()._id,
        userNameSentMsg : Meteor.user().username,
        userRecepMsg : messageData.userRecepMsg,
        userIdRecepMsg : userToSentMsg._id,
        nameChat : messageData.userRecepMsg + "_" + Meteor.user().username,
        contentMsg : messageData.contentMessage,
        messageTimestamp : new Date()
      });
    }
  },

  'insertMsg': function(messageData) {
    var userToSentMsg = Meteor.call('findUserFromDB',messageData.userRecepMsg);

    if (Meteor.user()) {
      ChatsMsg.insert({
        userIdSentMsg : Meteor.user()._id,
        userNameSentMsg : Meteor.user().username,
        userRecepMsg : messageData.userRecepMsg,
        userIdRecepMsg : userToSentMsg._id,
        nameChat : messageData.nameChat,
        contentMsg : messageData.contentMessage,
        messageTimestamp : new Date()
      });
    }
  },

  'checkChat' : function(userNameToCheckChat){
    var chatIsAvailable = Chats.findOne({"nameChat" : userNameToCheckChat + "_" + Meteor.user().username});
    console.log(chatIsAvailable);
    if(chatIsAvailable){
      return false;
    } else {
      return true;
    }
  },

  'createChat' : function(userNameToCreateChat){
    Chats.insert({
      userCreatedChat : Meteor.user().username,
      userToChat : userNameToCreateChat,
      nameChat : userNameToCreateChat + "_" + Meteor.user().username
    });
  },

  'removeChat': function(nameChat){
    ChatsMsg.remove({"nameChat" : nameChat});
    Chats.remove({"nameChat" : nameChat});
  },

}); 