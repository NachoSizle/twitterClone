Template.userManagement.events({  
  'click #signup': function() {
    var user = {
      username: $('#signup-nameProfile').val(),
      password: $('#signup-password').val(),
      profile: {
        fullname: $('#signup-username').val()
      }
    };

    Accounts.createUser(user, function (error) {
      if(error) alert(error);
    });

    //Creamos el nuevo usuario en DataUser
    var userData = new Object();
    userData.userName = user.profile.fullname;
    userData.userNameProfile = user.username;
    userData.userImg = "";
    userData.userDescription = "";
    
    Meteor.call('insertDataUser', userData);
  },

  'click #login': function() {
    var username = $('#login-nameProfile').val();
    var password = $('#login-password').val();

    Meteor.loginWithPassword(username, password, function(error) {
      if(error) alert(error);
    });
    loggingIn = true;
  },

  'click #recommendationsBtn': function() {  
    Session.set('recommendations', true);
  }
});