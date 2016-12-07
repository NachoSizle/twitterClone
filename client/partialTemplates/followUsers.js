var arrDataProfile = [];
var arrRecUsers = [];

Template.followUsers.onRendered(function () { 
  (async function() {
    recListUsers  = await Meteor.callPromise('recommendUsers');

    for (var i = 0; i < recListUsers.length; i++) {
      if(recListUsers[i].username != Session.get('currentUser')){
        arrRecUsers.push(recListUsers[i]);
      };
    }

    for (var i = 0; i < arrRecUsers.length; i++) {
      dataUserFound = await Meteor.callPromise('findUserData', arrRecUsers[i].username);
      arrDataProfile.push(dataUserFound);
    }
    
    Session.set('recommendedUsers', recListUsers);
    Session.set('userDataRecProfile', arrDataProfile);
    
  }());
});

Template.followUsers.events({ 
  'click #searchBtn': function(event) {
    
    var searchUser = $('#searchUser').val();
    var foundUser = Meteor.call('findUser', searchUser, function(err, res) {
        if (res) {
          Meteor.call('findUserData', res.username, function(err,res){
            if(res){
              Session.set('foundUser', res);
              Meteor.call('findUserImg', res.userImg, function(err, res){
                Session.set('imgFound', res);  
              });
            }
          });
        } else {
          $('#barFound').append("<h5 class='text-center msgErrorReg'>No se ha encontrado ningún usuario</h5>");
        }
    });
    return false;
  }, 

  'click #follow': function() {
    //ANTES DE SEGUIR A DICHO USUARIO HAY QUE COMPROBAR SI YA LO ESTAMOS SIGUIENDO
    Meteor.call('followUser', Session.get('foundUser').username);
  },

  'click #followRec': function() {
    listRecomm = Session.get('recommendedUsers');
    Meteor.call('followUser', this.userNameProfile);
    //LOCALIZAMOS EL USUARIO QUE ACABAMOS DE SEGUIR Y LO ELIMINAMOS DE LA LISTA DE RECOMENDADOS
    var posUser = listRecomm.indexOf(this.userNameProfile);
    listRecomm.splice(posUser, 1);
    Session.set('recommendedUsers', listRecomm);
  },

  'change #searchUser': function(){
    if($('#searchUser').val().length === 0){
      Session.set('foundUser', '');
      $('.msgErrorReg').remove();
    };
  }

});

Template.followUsers.helpers({ 
  'foundUser': function() {
    return Session.get('foundUser');
  },

  'recommendedUsers': function() {
    return Session.get('userDataRecProfile');
  },

  'recUsersLis': function(){
    if(Session.get('recommendedUsers').length > 0){
      return true;
    } else {
      return false;
    }; 
  },
  'mineUser' : function(user){
    if(user === Session.get('currentUser')){
      return false;
    } else {
      return true;
    }
  },

  'getImgProfile' : function(imgId){
    var imgFound = "imgPath";
    var imgFoundSession = Session.get('imgFound');
    console.log(imgId);

    if(imgId === ''){
      return "/profileImgTest.png";
    } else if(imgFoundSession){
      return imgFoundSession;
    } else {
      Meteor.call('findUserImg', imgId, function(err, res){
        Session.set('imgFound', res);
      });
      return Session.get('imgFound');;
    }
  }
});