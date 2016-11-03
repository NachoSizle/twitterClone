Router.configure({
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', {name: 'userManagement'});
/*SE ACCEDE POR WINDOW.LOCATION*/
Router.route('/whoToFollow', {name: 'followUsers'});
Router.route('/Profile/:username', {
	name: 'userProfile',
	data: function(){
		var user = new Object();
		user.name = this.params.username;

		var currentUser = Session.get('currentUser');

		Meteor.call('findUserData', user.name, function(err, res) {
	      Session.set('dataUserShowProfile',res);
	    });

	    dataUserShowProfile = Session.get('dataUserShowProfile');

	    if(dataUserShowProfile){
	    	if(dataUserShowProfile.userNameProfile != currentUser){
		    	Session.set('showProfileOtherUser', false);
		    } else {
		    	Session.set('showProfileOtherUser', true);
		    }
	    }
	    
		return user;
	}
});
Router.route('/Notifications/:userName', {
	name: 'twiitPageNew',
	data: function(){
		var user = new Object();
		user.name = this.params.userName;
		return user;
	}
});

Router.route('/RequestWhatsApp/:userName', {
	name: 'whatsAppRequestPage',
	data: function(){
		var user = new Object();
		user.name = this.params.userName;
		return user;
	}
});

//Router.route('/Comments', {name: 'twiitCommentPage'});
/*SE ACCEDE POR PATHFOR*/
Router.route('/Comments/:_id', {
	name: 'twiitCommentPage',
	data: function(){
		var mode = Session.get('notificationsModeOn');
		var idTwiit = new Object();
		idTwiit._id = this.params._id;

		if(mode){
			idTwiit.mode = mode;
		}

		return idTwiit;
	}
});
Router.route('/twiits/:_id', {
  	name: 'twiitPage',
  	data: function() { 
  		return this.params;
  	}
});

Router.route('/editProfile/:userName', {
	name: 'editProfile',
	data: function(){
		return this.params.userName;	
	}
});