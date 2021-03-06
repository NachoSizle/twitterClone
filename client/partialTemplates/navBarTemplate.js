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
	/* PARA CONTROLAR EL SCROLL DEL #selectFileLbl
	var previousScroll = 0;
	var posTopLblUploadFile = 0;
	var moveToPosition = 0;

	$( window ).scroll(function(event) {
		console.log(event);

		if(window.scrollY % 100 === 0){
			posTopLblUploadFile = $('#selectFileLbl').offset().top;
			if(previousScroll < window.scrollY){
				moveToPosition = posTopLblUploadFile + 100;
				previousScroll += 100;
			} else {
				moveToPosition = posTopLblUploadFile - 100;
				previousScroll -= 100;
			}
			$('#selectFileLbl').css('top', moveToPosition);
			posTopLblUploadFile = $('#selectFileLbl').offset().top;
		} else if(window.scrollY === 0){
			$('#selectFileLbl').css('top', '92%');
		}
		console.log(window.scrollY);
	});
	AL FINAL LO SOLUCIONAMOS PONIENDO LA POSITION A FIXED POR CSS
	*/
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

			var fileRead = e.currentTarget.files[0];
			var upload = Files.insert({
				file: fileRead,
				streams: 'dynamic',
				chunkSize: 'dynamic'
			}, false);

			/*++++++++++CUANDO EMPIEZA LA SUBIDA DEL ARCHIVO++++++++++*/
			upload.on('start', function () {
				/*HAY QUE ABRIR EL MODAL dialog-StateVideoUpload*/
				console.log(this.file.name);

				Session.set('modalStateVideoUploadContent', this.file.name);
				$('#dialog-StateVideoUpload').modal();
				template.currentUpload.set(this);
			});

			/*++++++++++CUANDO ACABA LA SUBIDA DEL ARCHIVO++++++++++++*/
			upload.on('end', function (error, fileObj) {
				if (error) {
					alert('Error during upload: ' + error);
				} else {
					//alert('File "' + fileObj.name + '" successfully uploaded');
					/*INFORMAMOS AL USUARIO DE QUE SE HA SUBIDO EL ARCHIVO*/
					$('#dialog-StateVideoUpload').find('div .panel-body').empty();
					$('#dialog-StateVideoUpload').find('div .panel-body').append("Upload: " + fileObj.name + "<span class='glyphicon glyphicon-ok' style='color: #4caf50'></span>");

					Meteor.call('searchFiles', function(err, res){
						filesFound = res;
						console.log(res);
						Session.set('filesFound', res);
					});
				}
				template.currentUpload.set(false);
			});

			upload.start();

			/*
			console.log("fileRead antes de modificacion");
			console.log(fileRead);

			//HAY QUE REDIMENSIONAR LAS IMAGENES A TAMANIO 75x75 ANTES DE SER SUBIDAS
			if(/png|jpg|jpeg|/i.test(fileRead.extension)){
				var imageProcessed = processImage(fileRead, 75, 75, function(data) {
					Session.set('newFileMod', data);
					return newFileMod;
				});
				setTimeout(imageProcessed, 1000);
			}

			if(Session.get('newFileMod')){
				var fileMod = Session.get('newFileMod');
				console.log(fileMod);
				var newFileMod = new File([fileMod], fileRead.name, {type: fileRead.type});

				console.log("FileMod start upload");
				console.log(newFileMod);
				//ADJUNTAR EL CODIGO DE MAS ABAJO PARA HACER EL UPLOAD
			}
			****************************/
    }
  }
});
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
