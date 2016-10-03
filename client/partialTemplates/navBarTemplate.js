Template.navBarTemplate.onCreated( function() {
	Session.set('sizeDisplay', $(window).width());
	Session.set('navBarCollapse', false);
	Session.set('currentUser',Meteor.user().username);
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
	},
	'show.bs.collapse' : function(){
		Session.set('navBarCollapse', true);
	},
	'hide.bs.collapse' : function(){
		Session.set('navBarCollapse', false);
	}
});

Template.navBarTemplate.helpers({
	'notificationCount': function() {
	    return UserUtils.findNumberNotif(Meteor.user().username);
	},
	'infoStateCollapseNavBar': function() {
	  return Session.get('navBarCollapse');
	}
});
//PARA CONTROLAR SI SE CAMBIA EL TAMAÑO DE PANTALLA
$(window).resize(function(){
	console.log("Change");
	Session.set('sizeDisplay', $(window).width());
});
