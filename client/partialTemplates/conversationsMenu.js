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
});

Template.conversationsMenu.events({
  'click #btnShowContacts' : function(){
    Session.set('showMessages', false);
  },
  'click #btnShowMessages' : function(){
    Session.set('showMessages', true);
  }
});