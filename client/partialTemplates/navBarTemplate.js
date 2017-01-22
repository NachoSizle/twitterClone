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

	$( window ).scroll(function() {

	});

});

Template.navBarTemplate.events({
	'click #recommendationsBtn' : function(){
		//Contraer el dropDownMenu
		$('#btnMenuNavBar').click();
		Session.set('pathActualApp', '/whoToFollow');
	},
	'show.bs.collapse' : function(){
		Session.set('navBarCollapse', true);
	},
	'hide.bs.collapse' : function(){
		Session.set('navBarCollapse', false);
	},
	'click #btnNewTweet' : function(){
    Session.set('commentMode', false);
		$('#selectFileLbl').hide();
	},
	'click #btnNewTwiit' : function(){
    Session.set('commentMode', false);
	},/*
  	'click #videoTrans' : function(){
  		console.log(Session.get('currentUser'));
  		if(Session.get('currentUser') === "nachosizle"){
  			window.location = "/videoTrans";
  		}
  	},*/

	'click #uploadFile': function(){
		$('#btnMenuNavBar').click();
		Session.set('pathActualApp', '/ShowFiles');
	},

	'click .imgProfileNavBar': function(){
		$('#btnMenuNavBar').click();
		Session.set('pathActualApp', '/Profile/' + Meteor.user().username);
	},
	'click #btnShowConver': function(){
		$('#btnMenuNavBar').click();
		Session.set('pathActualApp', '/Conversations/' + Meteor.user().username);
	},
	'click #btnVideoTweet' : function(){
		$('#selectFileLbl').hide();
	}
});

Template.navBarTemplate.helpers({
	'notificationCount': function() {
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
	},
	'currentUser': function(){
		var user = new Object();
		user.name = Session.get('currentUser');
		return user;
	}
});
//PARA CONTROLAR SI SE CAMBIA EL TAMAÑO DE PANTALLA
$(window).resize(function(){
	console.log("Change Display Size");
	Session.set('sizeDisplay', $(window).width());
});

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++MANEJAR EVENTOS DEL BOTON DE SUBIR NUEVO VIDEO++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
Template.uploadFile.onCreated(function() {
  Meteor.subscribe('files');
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadFile.helpers({
  'currentUpload': function () {
    return Template.instance().currentUpload.get();
  },
});

Template.uploadFile.events({
  'change #selectFile': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      var upload = Files.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);

			/*++++++++++CUANDO EMPIEZA LA SUBIDA DEL ARCHIVO++++++++++*/
      upload.on('start', function () {
				/*HAY QUE ABRIR EL MODAL dialog-StateVideoUpload*/
				$('#dialog-StateVideoUpload').modal();
        template.currentUpload.set(this);
				console.log(this);
      });

			/*++++++++++CUANDO ACABA LA SUBIDA DEL ARCHIVO++++++++++++*/
      upload.on('end', function (error, fileObj) {
				/*
        if (error) {
          alert('Error during upload: ' + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
				*/
				/*HAY QUE CERRAR EL MODAL dialog-StateVideoUpload*/
				//$('#dialog-StateVideoUpload').modal('hide');
        template.currentUpload.set(false);
      });

      upload.start();
    }
  }
});
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
