Template.editLicenses.onCreated(function(){
	currentUserName = this.data.name;
  currDataUser = Session.get('dataUser');

  arrAux = currDataUser.showWhatsTo;
  var usersFound = new Array();
  for(var i in arrAux){
    Meteor.call('findUserDataWithId', arrAux[i], function(err, res) {
      var aux = new Object();
      aux.name = res.userNameProfile;
      aux.userId = res.userId;
      usersFound.push(aux);
      Session.set('usersFound', usersFound);
    });
  };

  if(arrAux.length > 0){
    Session.set('countUsersFound', true);
  } else {
    Session.set('countUsersFound', false);
  }
});

Template.editLicenses.events({  
  'click #scrollSpy a': function(event){
    selectUser = event.target.id;
  },

	'click #remLicense': function(event) {  
    var pos = arrAux.indexOf(selectUser);
    arrAux.splice(pos,1);
  
    var data = new Object();
    data.userId = currDataUser.userId;
    data.showWhats = arrAux;

    Session.set('usersFound', arrAux);
    
    if(arrAux.length > 0){
      Session.set('countUsersFound', true);
    } else {
      Session.set('countUsersFound', false);
    }

    //POR ULTIMO ACTUALIZAMOS EL VALOR DE ESTE ARRAY EN LA BBDD
    Meteor.call('updateShowWhatsTo', data);
  }
});

Template.editLicenses.helpers({
  'userWhatsCount': function(){
    return Session.get('countUsersFound');
  },

  'responseLicenses' : function(){
    return Session.get('usersFound');
  },
});