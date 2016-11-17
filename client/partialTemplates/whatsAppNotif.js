Template.whatsAppNotif.onCreated(function() { 
  //console.log("Usuario: "); 
  //console.log(Meteor.user().username);
  Meteor.subscribe('whatsAppNotifications', Meteor.user().username);
});

Template.whatsAppNotif.helpers({
  modeDisplay: function() {
    var size = Session.get('sizeDisplay');
    if(size > 768){
      return true;
    } else {
      return false;
    }
  },
  whatsNotifCount: function(){
    numNotif = Session.get('requestWhats').length;
    numNotif += Session.get('responseWhats').length;
    return numNotif;
  },
  'infoStateCollapseNavBar': function() {
    return Session.get('navBarCollapse');
  }
});

Template.whatsAppNotif.events({
  
  'click #linkToWhatsNotif' : function(){
    if(numNotif > 0){
      window.location = "/RequestWhatsApp/" + Meteor.user().username;
    }
  }
  
});