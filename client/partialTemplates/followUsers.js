Template.followUsers.onRendered(function () { 
  Meteor.call('recommendUsers', function(err, res) {
    recUsersList = res;
    Session.set('recommendedUsers', res);
  });
});

Template.followUsers.events({ 
  'submit form': function(event) {

    var searchUser = event.target.searchUser.value;
    var foundUser = Meteor.call('findUser', searchUser, function(err, res) {
        if (res) {
          Session.set('foundUser', res);
        }
    });
    return false;
  }, 

  'click #follow': function() {
    //ANTES DE SEGUIR A DICHO USUARIO HAY QUE COMPROBAR SI YA LO ESTAMOS SIGUIENDO
    Meteor.call('followUser', Session.get('foundUser').username);
  },

  'click #followRec': function(event) {
    Meteor.call('followUser', this.username);
    //LOCALIZAMOS EL USUARIO QUE ACABAMOS DE SEGUIR Y LO ELIMINAMOS DE LA LISTA DE RECOMENDADOS
    var posUser = recUsersList.indexOf(this.username);
    recUsersList.splice(posUser, 1);
    Session.set('recommendedUsers', recUsersList);
  },

  'change #searchUser': function(){
    if($('#searchUser').val().length === 0){
      Session.set('foundUser', '');
    };
  }

});

Template.followUsers.helpers({ 
  'foundUser': function() {
    return Session.get('foundUser');
  },

  'recommendedUsers': function() {
    return Session.get('recommendedUsers');
  },

  'recUsersLis': function(){
    if(Session.get('recommendedUsers').length > 0){
      return true;
    } else {
      return false;
    }; 
  }
});