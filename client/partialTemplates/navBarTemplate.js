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

//ESTA ES OTRA FORMA DE HACER APARECER EL SPINNER CUANDO NO SE HA CARGADO LA TEMPLATE
/*
	Session.set("onRender", true);
});

Template.navBarTemplate.onRendered(function() {
	Session.set("onRender", false);
    return Session.get("onRender");
});
*/
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
		console.log("NUMERO DE NOTIFICACIONES NORMALES");
	    var result = UserUtils.findNumberNotif(Meteor.user().username);
	    return result;
	},
	'whatsNotifCount' : function(){
		result = Notifications.find({recepNotif: Meteor.user().username, read: false, typeOfNotif: "whatsAppNotif"});
		if(result.count() > 0){
			return result.count();
		};
	},
	'whatsAppReq' : function(){
		console.log("NUMERO DE NOTIFICACIONES DE PETICIONES DE WHATSAPP");
		
	    var cont = 0;
	    var req = [];

	    result.forEach(function(item){
	       req.push(item._id);
	       cont++;
	    }); 

	    if(cont > 0){      
	      Session.set('whatsAppRequest', true);
	      Session.set('requestWhats', req);
	      return true;
	    } else {
	    	Session.set('whatsAppRequest', false);
	    	return false;
	    }
	},
	'infoStateCollapseNavBar': function() {
	  return Session.get('navBarCollapse');
	},
	'userImgFound': function(){
		Meteor.call('findUserData', Meteor.user().username, function(err, res) {
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
	console.log("Change Display Size");
	Session.set('sizeDisplay', $(window).width());
});
