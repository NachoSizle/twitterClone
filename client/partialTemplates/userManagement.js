Template.userManagement.onRendered(function(){
  Session.set('pageToLoad', true);
});

Template.userManagement.events({  
  'click #signup': function(event) {

    var user = {
      username: $('#signupNameProfile').val(),
      password: $('#signupPassword').val(),
      profile: {
        fullname: $('#signupUsername').val(),
        email : $('#signupEmail').val()
      }
    };

    Accounts.createUser(user, function (err) {
      if(err) alert(err);
    });

    //Creamos el nuevo usuario en DataUser
    var userData = new Object();
    userData.userName = user.profile.fullname;
    userData.userNameProfile = user.username;
    userData.emailUser = user.email;
    userData.userImg = "";
    userData.userDescription = "";
    
    Meteor.call('insertDataUser', userData);
  },

  'click #login': function(event) {
    event.preventDefault();
    var username = $('#loginNameProfile').val();
    var password = $('#loginPassword').val();

    Meteor.loginWithPassword(username, password, function(err) {
      if(err.reason === "User not found"){
        console.log(err.reason);
        alert(err.reason);
      } else {
        console.log(err.reason);
        alert(err.reason);
      }
    });
    loggingIn = true;
  },

  'click #recommendationsBtn': function() {  
    Session.set('recommendations', true);
  },

  'click #goToLogInPage': function(){
    Session.set('pageToLoad', true);
  }, 

  'click #goToRegisterPage': function(){
    Session.set('pageToLoad', false);
  }, 
});

Template.userManagement.helpers({
  'loginPage': function(){
    return Session.get('pageToLoad');
  },
});