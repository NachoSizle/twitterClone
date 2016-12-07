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
		//Contraer el dropDownMenu 
		$('#btnMenuNavBar').click()
		Session.set('pathActualApp', '/whoToFollow');
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
  	},
  	'click #videoTrans' : function(){
  		console.log(Session.get('currentUser'));
  		if(Session.get('currentUser') === "Nachosizle"){
  			window.location = "/videoTrans";
  		}
  	}
});

Template.navBarTemplate.helpers({
	'notificationCount': function() {
		console.log("NUMERO DE NOTIFICACIONES NORMALES");
	    var resultNotif = UserUtils.findNumberNotif(Meteor.user().username);
	    return resultNotif;
	},
	'whatsNotifCount' : function(){
		//OBTENEMOS EL NUMERO DE NOTIFICACIONES DE LAS PETICIONES DE WHATSAPP Y LAS 
		//RESPUESTAS A LAS PETICIONES REALIZADAS POR EL USUARIO
		resultNotifRequest = Notifications.find({recepNotif: Meteor.user().username, read: false, typeOfNotif: "whatsAppNotif"});
		resultNotifResponse = Notifications.find({recepNotif: Meteor.user().username, read: false, typeOfNotif: "responseWhatsAppNotif"});
		auxTotalCount = 0;

		if(resultNotifRequest.count() > 0){
			auxTotalCount = resultNotifRequest.count();
			if(resultNotifResponse.count() > 0){
				auxTotalCount += resultNotifResponse.count();
			};
		} else {
			if(resultNotifResponse.count() > 0){
				auxTotalCount = resultNotifResponse.count();
			};
		}
		//NO SE ESTA OBTENIENDO CORRECTAMENTE ESTE TIPO DE NOTIF
		//REVISAR publications.js
		//console.log(resultNotifResponse);
		//console.log(resultNotifResponse.count());

		//DEVOLVEMOS LA SUMA TOTAL DE LAS NOTIFICACIONES
		if(auxTotalCount > 0){
			return auxTotalCount;
		}
	},
	'whatsAppReq' : function(){
		console.log("NUMERO DE NOTIFICACIONES DE PETICIONES DE WHATSAPP");
		console.log("Req: " + resultNotifRequest.count());
		console.log("Res: " + resultNotifResponse.count());
	    var cont = 0;
	    var req = [];
	    var res = [];

	    resultNotifRequest.forEach(function(item){
	       req.push(item._id);
	       cont++;
	    });

	    resultNotifResponse.forEach(function(item){
	       res.push(item._id);
	       cont++;
	    }); 

	    if(cont > 0){      
	      Session.set('whatsAppRequest', true);
	      Session.set('requestWhats', req);
	      Session.set('responseWhats', res);
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
