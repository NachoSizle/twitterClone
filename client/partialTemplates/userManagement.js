Template.userManagement.onRendered(function(){
  Session.set('pageToLoad', true);
});

Template.userManagement.events({  
  'click #signup': function(event) {
    var passOk = false;
    var emailOk = false;

    //LIMPIAMOS LOS MENSAJES DE ERROR QUE HABIA ANTES
    $('.msgErrorReg').each(function(){
      $(this).remove();
    });
    $('.invalidField').each(function(){
      $(this).removeClass('invalidField')
    });

    var user = {
      username: $('#signupNameProfile').val(),
      password: $('#signupPassword').val(),
      profile: {
        fullname: $('#signupUsername').val(),
        email : $('#signupEmail').val()
      }
    };

    //VALIDAMOS QUE EL CORREO ES VALIDO
    if(user.profile.email.indexOf('@') === -1){
      $('.formRegisterNew').append("<h5 class='text-center msgErrorReg'>El email no es válido</h5>");
      $('#signupEmail').addClass('invalidField');
      emailOk = false;
    } else {
      emailOk = true;
    };

    //VALIDAMOS QUE LAS CONTRASEÑAS SEAN IGUALES
    var pass2 = Session.get('valInputPass2');

    if(user.password != pass2){
      $('.formRegisterNew').append("<h5 class='text-center msgErrorReg'>Las contraseñas no coinciden</h5>");
      $('#signupPassword').addClass('invalidField');
      $('#signupPassword2').addClass('invalidField');
      passOk = false;
    } else {
      passOk = true;
    };

    if(passOk && emailOk){
      Accounts.createUser(user, function (err) {
        //VALIDAMOS SI EL NOMRBE DE USUARIO username YA EXISTE
        if(err.reason === "Username already exists."){
          $('#signupNameProfile').addClass('invalidField');
          $('.formRegisterNew').append("<h5 class='text-center msgErrorReg'>El nombre de usuario está en uso</h5>");
        }
      });

      //Creamos el nuevo usuario en DataUser
      var userData = new Object();
      userData.userName = user.profile.fullname;
      userData.userNameProfile = user.username;
      userData.emailUser = user.email;
      userData.userImg = "";
      userData.userDescription = "";
      
      Meteor.call('insertDataUser', userData);
    };
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
  'change #signupPassword2': function(event){
    Session.set('valInputPass2', $('#signupPassword2').val());
  }
});

Template.userManagement.helpers({
  'loginPage': function(){
    return Session.get('pageToLoad');
  },
});