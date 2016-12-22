Template.showAllConversations.onCreated(function() {  
  Session.set('showMessages', true);
});

Template.showAllConversations.helpers({
  'setStyleNavBar': function(){
    var widthNav = $(window).width();
    //RESTAMOS DOS PIXELES POR LOS BORDES
    widthNav -= 2; 
    return widthNav/2 + "px";
  },

  'btnShowMessages': function(){
    return Session.get('showMessages');
  },
});

Template.showAllConversations.events({
  'click #btnShowContacts' : function(){
    Session.set('showMessages', false);
  },
  'click #btnShowMessages' : function(){
    Session.set('showMessages', true);
  }
});