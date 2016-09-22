Template.userManagement.events({  
  'click #signup': function() {
    var user = {
      username: $('#signup-username').val(),
      password: $('#signup-password').val(),
      profile: {
        fullname: $('#signup-fullname').val()
      }
    };

    Accounts.createUser(user, function (error) {
      if(error) alert(error);
    });
  },

  'click #login': function() {
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    Meteor.loginWithPassword(username, password, function(error) {
      if(error) alert(error);
    });
    loggingIn = true;
  },

  'click #logout': function() {  
    Meteor.logout();
  }
});

Template.userManagement.helpers({
  'tweets': function(username){
    Meteor.call('tweetsPublish', username, function(err, res) {
      Session.set('numTweets',res);
    });
    return Session.get('numTweets');
  },
  'following': function(){
    Meteor.call('usersFollowings', function(err, res) {
      Session.set('numFollowings',res);
    });
    return Session.get('numFollowings');
  },
  'followers': function(){
    Meteor.call('usersFollowers', function(err, res) {
      Session.set('numFollowers',res);
    });
    return Session.get('numFollowers');
  },
});