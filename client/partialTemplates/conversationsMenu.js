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
    return Meteor.call('findChatsAvailable');
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
    Meteor.call('createChat', event.currentTarget.id);
  }
});