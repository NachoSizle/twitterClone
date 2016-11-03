Template.sendRequest.onRendered(function(){

});

Template.sendRequest.events({
  	'click #sent': function(){

  		var notif = new Object();
  		
  		notif.recepNotif = Session.get('userToSentPet'); //EL USUARIO QUE VA A RECIBIR LA PETICION
  		notif.actorNotif = Meteor.user().username; //EL USUARIO QUE REALIZA LA PETICION
  		notif.timestamp = new Date();
  		notif.typeOfNotif = "whatsAppNotif";

  		Meteor.call('createWhatsAppNotification', notif);
  		$('#dialog-showSocialNetwork').modal('hide');
  		//POR ULTIMO INFORMAMOS AL USUARIO QUE LA PETICION SE HA ENVIADO

  		$('#dialog-operationSuccess').modal('show');
  	}, 
  	'click #noSent': function(){
  		$('#dialog-showSocialNetwork').modal('hide');
  	}
});

Template.sendRequest.helpers({
  	'userNameToSentPet': function(){
    	return Session.get('userToSentPet');
  	}
});  