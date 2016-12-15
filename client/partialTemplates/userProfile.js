Template.userProfile.onCreated(function(){
	currentUserName = this.data.name;
  Session.set('pathActualApp', window.location.pathname);
});

Template.userProfile.events({  
	'click #logout': function() {  
    	Meteor.logout();
    	window.location = "/";
  	},
  	'click #editProfile': function(){
  		window.location = "/editProfile/" + currentUserName;
  	},
    'click #editWhatsLicenses': function(){
      $('#dialog-editLicenses').modal('show');
    },
  	'click .btnShowSN': function(event){

  		var idSN = event.target.id;
  		if(idSN === "Facebook"){
  			window.open("https://www.facebook.com/search/all/?q=" + Session.get('dataUser').userFb);
  		} else if(idSN === "Instagram"){
  			window.open("https://www.instagram.com/" + Session.get('dataUser').userInsta + "/");
  		} else if(idSN === "WhatsApp"){
  			Session.set('userToSentPet', currentUserName);

  			var userActName = Meteor.user().username;
    			
  			var arrWhats = dataUser.showWhatsTo;

  			Meteor.call('findUserData', userActName, function(err,res){
    			if(arrWhats.length > 0){
    				if(arrWhats.indexOf(res.userId) >= 0){
  	  				//MOSTRAMOS EL WHATSAPP
  	  				console.log($('[data-toggle="tooltip"]'));
              $('[data-toggle="tooltip"]').attr("title", dataUser.userWhats);
    					$('[data-toggle="tooltip"]').tooltip('show'); 
    	  			}
      			} else if(!Session.get('showProfileOtherUser')){
    					//ESTE PROCESO NO ES INSTANTANEO YA QUE EL USUARIO TIENE QUE ACEPTAR LA PETICION
    					$('#dialog-showSocialNetwork').modal('show');
    				} else {
    					//INICIALIZAMOS EL TOOLTIP
    					$('[data-toggle="tooltip"]').tooltip('show'); 
    				}
  			});
  		}
  	},
  	'click .showFollowings': function(){
  		window.location = "/followAnts/" + currentUserName;
  	},
  	'click .showFollowers': function(){
  		window.location = "/followAnts/" + currentUserName;
  	},
    'click #btnUnfollow': function(){
      $('#dialog-stopFollowing').modal('show');
    },
    'click #stopFolBtn': function(){
      Meteor.call('unfollowUser', currentUserName);
      Session.set('userIsFollowMe', false);
      $('#dialog-stopFollowing').modal('hide');
    },
    'click #noStopFolBtn': function(){
      $('#dialog-stopFollowing').modal('hide');
    },
    'click #btnFollow': function(){
      Session.set('userIsFollowMe', true);
      Meteor.call('followUser', currentUserName);
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
		if(dataUser.userImg != ""){
			Meteor.call('findUserImg', dataUser.userImg, function(err, res) {
				$('#imgCurrentUser').attr("src", res);
		  	});
		} else {
			console.log("No Img Profile");
			//$('#imgCurrentUser').attr("src", "/profileImgTest.png");
			return "/profileImgTest.png";
		}
	},
	'tweets': function(){
		return UserUtils.findTweets(currentUserName).count();
	},
	'following': function(){
	  Meteor.call('getFollowings', currentUserName, function(err, res) {
  		Session.set('numFollowings',res.length);
  	});
  	return Session.get('numFollowings');
	},
	'followers': function(){
    Meteor.call('getFollowers', currentUserName, function(err, res) {
      Session.set('getFollowers',res);
    	Session.set('numFollowers',res.length);
    });

    var currentFollowers = Session.get('getFollowers');
    
    if(currentFollowers){
      var posUser = currentFollowers.indexOf(Meteor.user().username);

      if(posUser != -1){
        Session.set('userIsFollowMe', true);
      } else {
        Session.set('userIsFollowMe', false);
      }
    }
    
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
	},
  'userIsFollowMe': function(){
    return Session.get('userIsFollowMe');
  }
});