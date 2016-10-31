Template.removeProfile.events({  
	'click #remove': function() { 
    var userToRemove = new Object();
    var aux = Session.get('dataUser');

    userToRemove.id = aux.userId;
    userToRemove.name = aux.userNameProfile;

    console.log(userToRemove);

    Meteor.call('removeThisUser', userToRemove);

    window.location = "/";
	},
  'click #noRemove': function(){
    //HAY QUE DECIRLE AL MODAL QUE SE CIERRE
    $('#dialog-removeProfile').modal('hide');
  }
});