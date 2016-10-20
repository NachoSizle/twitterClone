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
		console.log(dataUser);
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
  		var btnSocial = "";
  		if(dataUser.userFb){
  			btnSocial += "<button type='button' class='btn btn-warning btn-circle optionsUserProfile'><i class='fa fa-facebook' style='font-size: 24px;'></i></button>"
  		}

  		if(dataUser.userInsta){
  			btnSocial += "<button type='button' class='btn btn-warning btn-circle optionsUserProfile'><i class='fa fa-instagram' style='font-size: 24px;'></i></button>"
  		}

  		if(dataUser.userWhats){
  			btnSocial += "<button type='button' class='btn btn-warning btn-circle optionsUserProfile'><i class='fa fa-whatsapp' style='font-size: 24px;'></i></button>"
  		}

  		return btnSocial;
  	}
});