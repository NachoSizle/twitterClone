Template.conversationsMenu.onCreated(function() {  
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

  'showChatsForThisUser' : function(){
    Meteor.call('findChatsAvailable', function(err, res){
      console.log(res);
      if(err){
        console.log(err);
      }
    });
    
  },

  'chatName' : function(nameChat){
    var usersInChat = nameChat.split('_');
    var chatUserName = usersInChat[usersInChat.indexOf(Meteor.user().username)];
    return chatUserName;
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
      if(res){
        Meteor.call('createChat', event.currentTarget.id);
      }
    });
  }
});