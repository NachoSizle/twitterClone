Template.sentPeticion.onRendered(function(){

});

Template.sentPeticion.events({
  	'click #sent': function(){

  	}, 
  	'click #noSent': function(){

  	}
});

Template.sentPeticion.helpers({
  	'userNameToSentPet': function(){
    	return Session.get('userToSentPet');
  	}
});  