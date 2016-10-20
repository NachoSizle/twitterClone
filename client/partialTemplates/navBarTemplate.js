Template.navBarTemplate.onCreated( function() {
	Session.set('sizeDisplay', $(window).width());
	Session.set('navBarCollapse', false);
	Session.set('currentUser', Meteor.user().username);

	//PEDIMOS PERMISO AL USUARIO PARA MOSTRARLE NOTIFICACIONES
	console.log(navigator.platform);

	/*
	HAY QUE CONTROLAR ESTO PORQUE NO FUNCIONA EL NOTIFICATION EN IPHONE
	if(navigator.platform != 'iPad' || navigator.platform != 'iPhone' || navigator.platform != 'iPod'){
		Notification.requestPermission();
	}
	*/
});

Template.navBarTemplate.events({
	'click #recommendationsBtn' : function(){
		//console.log("A quien seguir");
	},
	'click #imgProfile' : function(){
		window.location = "/Profile/" + Session.get('currentUser');
	},
	'click #imgLogTwiiterClone' : function(){
		window.location = "/";
	},
	'show.bs.collapse' : function(){
		Session.set('navBarCollapse', true);
	},
	'hide.bs.collapse' : function(){
		Session.set('navBarCollapse', false);
	},
	'click #btnNewTweet' : function(){
	    Session.set('commentMode', false);
  	},
  	'click #btnNewTwiit' : function(){
	    Session.set('commentMode', false);
  	}
});

Template.navBarTemplate.helpers({
	'notificationCount': function() {
	    return UserUtils.findNumberNotif(Meteor.user().username);
	},
	'infoStateCollapseNavBar': function() {
	  return Session.get('navBarCollapse');
	},
	'userImgFound': function(){
		Meteor.call('findUserData', Meteor.user().username, function(err, res) {
			console.log(res);
			if(res.userImg){
				Meteor.call('findUserImg', res.userImg, function(err, res) {
					$('#imgProfile').attr("src", res);	
			  	});
			} else {
				$('#imgProfile').attr("src", "/profileImgTest.png");
			}
			
	  	});
	}
});
//PARA CONTROLAR SI SE CAMBIA EL TAMAÑO DE PANTALLA
$(window).resize(function(){
	console.log("Change");
	Session.set('sizeDisplay', $(window).width());
});
