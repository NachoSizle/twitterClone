Template.followAnts.onCreated(function() {  
  Session.set('notificationsModeOn', true);
});

Template.followAnts.helpers({
  'setStyleNavBar': function(){
    var widthNav = $(window).width();
    //RESTAMOS DOS PIXELES POR LOS BORDES
    widthNav -= 2; 
    return widthNav/2 + "px";
  },

  'getDataFollowAnts':function(){
    Meteor.call('getFollowers', this.user, function(err, res) {
      Session.set('followers',res);
    });

    Meteor.call('getFollowings', this.user, function(err, res) {
      Session.set('followings',res);
    });

    foundFollowers = Session.get('followers');
    foundFollowings = Session.get('followings');

    if(foundFollowers.length === 0){
      Session.set('noFollowers', true);
    } else {
      Session.set('noFollowers', false);
    }
          
    if(foundFollowings){
      if(foundFollowings.length === 0){
        Session.set('noFollowings', true);
      } else {
        Session.set('noFollowings', false);
      }
    }

    Session.set('showFollowers', this.mode);
    countOrientationCard = 0;
  },

  'getWhatShow': function(){
    return Session.get('showFollowers');
  },

  'noFollowers': function(){
    return Session.get('noFollowers');
  },

  'noFollowings': function(){
    return Session.get('noFollowings');
  },

  'btnShowFollowers': function(){
    return Session.get('showFollowers');
  },

  'showFollowers': function(){
    return foundFollowers;
  }, 

  'showFollowings': function(){
    return foundFollowings;
  },

  'orientationCard': function(){
    countOrientationCard++;
    if(countOrientationCard % 2 === 0){
      return false;
    } else {
      return true;
    }
    
  }
});

Template.followAnts.events({
  'click #btnShowFollowings' : function(){
    Session.set('showFollowers', false);
    countOrientationCard = 0;
  },
  'click #btnShowFollowers' : function(){
    Session.set('showFollowers', true);
    countOrientationCard = 0;
  }
});