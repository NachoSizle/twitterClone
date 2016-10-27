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
  	'click .optionsUserProfile': function(event){
  		//PRIMERO COGEMOS EL NOMBRE DE LA RED SOCIAL DE LA QUE VAMOS A MOSTRAR LA INFORMACION
  		Session.set("SocialNetworkToShow", event.target.id);
  		//A CONTINUACION SE ABRIRA EL MODAL CON LA INFORMACION DE LA RED SOCIAL
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
  	}
});