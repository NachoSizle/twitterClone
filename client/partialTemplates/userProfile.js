Template.userProfile.onCreated(function(){
	currentUserName = this.data.name;
});

Template.userProfile.events({  
	'click #logout': function() {  
    	Meteor.logout();
    	window.location = "/";
  	},
  	'click #editProfile': function(){
  		window.location = "/editProfile/" + currentUserName;
  	},
  	'click .btnShowSN': function(event){

  		var idSN = event.target.id;
  		if(idSN === "Facebook"){
  			window.open("https://www.facebook.com/search/all/?q=" + Session.get('dataUser').userFb);
  		} else if(idSN === "Instagram"){
  			window.open("https://www.instagram.com/" + Session.get('dataUser').userInsta + "/");
  		} else if(idSN === "WhatsApp"){
  			//EL CASO DE WHATSAPP ES MAS DIFERENTE. LO QUE HAREMOS SERÁ SOLICITAR AL USUARIO QUE SI QUIERE
			//AÑADIR EL NUMERO DE TELEFONO EN SU AGENDA (SOLO PARA DISPOSITIVOS MÓVILES)
			//EN EL CASO DE QUE EL USUARIO ACCEDA A LA APP POR DISPOSITIVOS NO MÓVILES, SE MOSTRARÁ UN MODAL
			//EN EL QUE INFORMARA AL USUARIO: ¿Quiere solicitar a {{currentUser.userName}} su numero de telefono?
			//SI EL USUARIO SELECCIONA QUE SI, SE MANDARA UNA SOLICITUD AL USUARIO DEL QUE SE QUIERE CONOCER
			//SU NUMERO DE MOVIL Y SI DIHCO USUARIO ACEPTA, SE LE REVELARA AL USUARIO.
			Session.set('userToSentPet', currentUserName);
			if(!Session.get('showProfileOtherUser')){
				//ESTE PROCESO NO ES INSTANTANEO YA QUE EL USUARIO TIENE QUE ACEPTAR LA PETICION
				$('#dialog-showSocialNetwork').modal('show');
			} else {
				//INICIALIZAMOS EL TOOLTIP
				$('[data-toggle="tooltip"]').tooltip('show'); 
			}
  		}
  	}
});

Template.userProfile.helpers({
	'dataUserFound': function(){
		Meteor.call('findUserData', currentUserName, function(err, res) {
	    	Session.set('dataUser',res);
	  	});

	  	dataUser = Session.get('dataUser');
	  	return dataUser;
	},
	'userImgFound': function(){
		if(dataUser.userImg){
			Meteor.call('findUserImg', dataUser.userImg, function(err, res) {
				$('#imgCurrentUser').attr("src", res);
		  	});
		} else {
			console.log("Imagen test");
			$('#imgCurrentUser').attr("src", "/profileImgTest.png");
		}
	},
	'tweets': function(){
	  	Meteor.call('tweetsPublish', currentUserName, function(err, res) {
	    	Session.set('numTweets',res);
	  	});
	  	return Session.get('numTweets');
	},
  	'following': function(){
		Meteor.call('usersFollowings', currentUserName, function(err, res) {
      		Session.set('numFollowings',res);
    	});
    	return Session.get('numFollowings');
  	},
  	'followers': function(){
	    Meteor.call('usersFollowers', currentUserName, function(err, res) {
	      	Session.set('numFollowers',res);
	    });
    	return Session.get('numFollowers');
  	},
  	'existsSocialNetwork': function(){
  		
  		var btnSocial = [];

  		if(dataUser.userFb){
  			var newData = new Object();
  			newData.color = "primary";
  			newData.class = "fa fa-facebook";
  			newData.id = "Facebook";
  			btnSocial.push(newData);
  		}

  		if(dataUser.userInsta){
  			var newData = new Object();
  			newData.color = "warning";
  			newData.class = "fa fa-instagram";
  			newData.id = "Instagram";
  			btnSocial.push(newData);
  		}

  		if(dataUser.userWhats){
  			var newData = new Object();
  			newData.color = "success";
  			newData.class = "fa fa-whatsapp";
  			newData.id = "WhatsApp";
  			btnSocial.push(newData);
  		}

  		return btnSocial;
  	},
  	'showProfileOtherUser' : function(){
  		return Session.get('showProfileOtherUser');
  	},
  	'isWhatsapp' : function(){
  		if(this.id === "WhatsApp"){
  			return true;
  		}
  	}
});