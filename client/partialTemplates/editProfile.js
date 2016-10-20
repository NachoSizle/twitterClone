Template.editProfile.onCreated(function(){
	Meteor.subscribe('images');
	Meteor.call('findUserData', this.data, function(err, res) {
		Session.set('datauser',res);
  	});
});

Template.editProfile.events({  
	'click #saveChanges': function(){
		userAux = Session.get('datauser');
		newData = new Object();
		newData.description = document.getElementById("userDescription").value;
		if(newData.description === ""){
			newData.description = $('#userDescription').attr("placeholder");
		}
		newData.userId = userAux._id;

		//AHORA NOS GUARDAMOS EL _id DEL DOCUEMNTO QUE VAMSO A INSERTAR EN LA COLECCION Images
		//QUE ALMACENARÁ LA NUEVA FOTO
		var codeImg = $('#imgCurrentUser').attr("src");

		Meteor.call('insertNewImage', codeImg, function(err,res){
			newData.imgId = res;
			console.log(newData.imgId);
			Meteor.call('updUserData', newData);
			window.location = "/Profile/" + userAux.userNameProfile;
		});

		/*
		//REALIZAMOS LA PETICION AJAX PARA GUARDAR LA IMAGEN EN PUBLIC
		//RECUPERAMOS LA IMAGEN QUE HEMOS SUBIDO
  		var file = $('#inputFile')[0].files[0];
  		var readFile = new FileReader();
  		readFile.readAsDataURL(file);

  		console.log(readFile);

		var ruta = "img-ajax.php";
        $.ajax({
            url: ruta,
            type: "POST",
            data: readFile,
            contentType: false,
            processData: false,
            success: function(datos)
            {
                console.log(datos);
            }
        });
        */
  	},
  	'change #inputFile': function(){

  		//RECUPERAMOS LA IMAGEN QUE HEMOS SUBIDO
  		var file = $('#inputFile')[0].files[0];

  		reader = new FileReader();
  		reader.onload = (function(file){
  			return function(e){
  				$('#imgCurrentUser').attr("src", e.target.result);
  			}
  		})(file);

  		reader.readAsDataURL(file);	
  	}
});

Template.editProfile.helpers({
	'dataUserFound': function(){
		dataUser = Session.get('datauser');
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
	'tweets': function(username){
	  	Meteor.call('tweetsPublish', username, function(err, res) {
	    	Session.set('numTweets',res);
	  	});
	  	return Session.get('numTweets');
	},
  	'following': function(){
		Meteor.call('usersFollowings', function(err, res) {
      		Session.set('numFollowings',res);
    	});
    	return Session.get('numFollowings');
  	},
  	'followers': function(){
	    Meteor.call('usersFollowers', function(err, res) {
	      	Session.set('numFollowers',res);
	    });
    	return Session.get('numFollowers');
  	},
});