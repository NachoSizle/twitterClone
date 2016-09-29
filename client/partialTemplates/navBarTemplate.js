Template.navBarTemplate.onCreated( function() {
	Session.set('sizeDisplay',$(window).width());
});

Template.navBarTemplate.events({
	'click #recommendationsBtn' : function(){
		//console.log("A quien seguir");
	},
	'click #imgProfile' : function(){
		window.location = "/myProfile";
	},
	'click #imgLogTwiiterClone' : function(){
		window.location = "/";
	}
});

Template.navBarTemplate.helpers({
	'notificationCount': function() {
	    return UserUtils.findNumberNotif(Meteor.user().username);
	}
});
//PARA CONTROLAR SI SE CAMBIA EL TAMAÑO DE PANTALLA
$(window).resize(function(){
	console.log("Change");
	Session.set('sizeDisplay',$(window).width());
});
