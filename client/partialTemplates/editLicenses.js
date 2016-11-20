Template.editLicenses.onCreated(function(){
	currentUserName = this.data.name;
  currDataUser = Session.get('dataUser');
  arrAux = currDataUser.showWhatsTo;
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

    //POR ULTIMO ACTUALIZAMOS EL VALOR DE ESTE ARRAY EN LA BBDD
    Meteor.call('updateShowWhatsTo', data);
  }
});

Template.editLicenses.helpers({
  'userWhatsCount': function(){
    if(arrAux.length > 0){
      return true;
    }
  },

  'responseLicenses' : function(){
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
    return Session.get('usersFound');
  },
});