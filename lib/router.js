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
		Meteor.call('findUserData', this.params.userName, function(err, res) {
	    	Session.set('datauser',res);
	  	});
	}
});