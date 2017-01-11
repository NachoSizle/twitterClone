Template.conversationsMenu.onCreated(function() {  
  this.subscribe('chats');
  Session.set('showMessages', true);
});

Template.conversationsMenu.helpers({
  'setStyleNavBar': function(){
    var widthNav = $(window).width();
    //RESTAMOS DOS PIXELES POR LOS BORDES
    widthNav -= 2; 
    return widthNav/2 + "px";
  },

  'btnShowMessages': function(){
    return Session.get('showMessages');
  },

  'hasChatsForCurrentUser' : function(){
    Meteor.call('findChatsAvailable', function(err, res){
      Session.set('chatsAvailable', res);
      if(err){
        console.log(err);
      }
    });

    if(Session.get('chatsAvailable')){
      if(Session.get('chatsAvailable').length > 0){
        return true;
      } else {
        return false;
      }  
    };
  },

  'showChatsForThisUser' : function(){
    return Session.get('chatsAvailable');
  },

  'chatName' : function(nameChat){
    if(nameChat){
      var usersInChat = nameChat.split('_');
      var posCurrentUser = usersInChat.indexOf(Meteor.user().username);
      if(posCurrentUser === 0){
        posCurrentUser = 1;
      } else {
        posCurrentUser = 0;
      }
      var chatUserName = usersInChat[posCurrentUser];
      Session.set('chatUserName', chatUserName);
    }
    return Session.get('chatUserName');
  },

  'getLastMessageFromThisChat' : function(nameChat){
    Meteor.call('findLastMessage', nameChat, function(err, res){
      if(res){
        Session.set('lastMessage', res[0]);
      } 
      if(err){
        console.log(err);
      }
    });

    if(Session.get('lastMessage')){
      if(Session.get('lastMessage').nameChat === nameChat){
        return Session.get('lastMessage').contentMsg;
      }
    };
  },

  'getTimeLastMessageFromThisChat' : function(){
    if(Session.get('lastMessage')){
      var timeLastMessage = new Date(Session.get('lastMessage').messageTimestamp);
      var parseTime = timeLastMessage.getHours() + ":" + timeLastMessage.getMinutes();
      return parseTime;
    };
  },

  'hasContactForCurrentUser' : function(){
    Meteor.call('findContactsAvailable', function(err, res){
      Session.set('contactsAvailable', res);
      if(err){
        console.log(err);
      }
    });

    if(Session.get('contactsAvailable')){
      if(Session.get('contactsAvailable').length > 0){
        return true;
      } else {
        return false;
      }  
    };
  },

  'showContactsForThisUser' : function(){
    return Session.get('contactsAvailable');
  }
});

Template.conversationsMenu.events({
  'click #btnShowContacts' : function(){
    Session.set('showMessages', false);
  },
  'click #btnShowMessages' : function(){
    Session.set('showMessages', true);
  },
  'click .goToConversation' : function(event){
    //COMPROBAMOS SI EL CHAT ESTA CREADO
    Meteor.call('checkChat', event.currentTarget.id, function(err, res){
      console.log(res);
      if(res){
        Meteor.call('createChat', event.currentTarget.id);
      }
    });
  }
});