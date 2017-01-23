Router.configure({
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', {
	name: 'userManagement',
	data: function(){
    $('#selectFileLbl').css('margin-bottom', '0px');
    $('#selectFileLbl').show();
		Session.set('pathActualApp', '/');
	}
});
/*SE ACCEDE POR WINDOW.LOCATION*/
Router.route('/whoToFollow', {
  name: 'followUsers',
  data: function(){
    $('#selectFileLbl').css('margin-bottom', '0px');
    $('#selectFileLbl').show();
  }
});
Router.route('/Profile/:username', {
	name: 'userProfile',
	data: function(){
    $('#selectFileLbl').css('margin-bottom', '0px');
    $('#selectFileLbl').show();

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

	    Session.set('pathActualApp', "/Profile/" + this.params.username);

		return user;
	}
});
Router.route('/Notifications/:userName', {
	name: 'twiitPageNew',
	data: function(){
    $('#selectFileLbl').css('margin-bottom', '0px');
    $('#selectFileLbl').show();

		var user = new Object();
		user.name = this.params.userName;
		Session.set('pathActualApp', "/Notifications/" + this.params.username);
		return user;
	}
});

Router.route('/RequestWhatsApp/:userName', {
	name: 'whatsAppRequestPage',
	data: function(){
    $('#selectFileLbl').css('margin-bottom', '0px');
    $('#selectFileLbl').show();

		var user = new Object();
		user.name = this.params.userName;
		Session.set('pathActualApp', "/RequestWhatsApp/" + this.params.username);
		return user;
	}
});

//Router.route('/Comments', {name: 'twiitCommentPage'});
/*SE ACCEDE POR PATHFOR*/
Router.route('/Comments/:_id', {
	name: 'twiitCommentPage',
	data: function(){
    $('#selectFileLbl').css('margin-bottom', '0px');
    $('#selectFileLbl').show();

		var mode = Session.get('notificationsModeOn');
		var idTwiit = new Object();
		idTwiit._id = this.params._id;

		if(mode){
			idTwiit.mode = mode;
		}

		Session.set('pathActualApp', "/Comments/" + this.params.username);

		return idTwiit;
	}
});
Router.route('/twiits/:_id', {
  	name: 'twiitPage',
  	data: function() {
      $('#selectFileLbl').css('margin-bottom', '0px');
      $('#selectFileLbl').show();
  		return this.params;
  	}
});

Router.route('/editProfile/:userName', {
	name: 'editProfile',
	data: function(){ç
    $('#selectFileLbl').show();
    $('#selectFileLbl').css('margin-bottom', '0px');

		Session.set('pathActualApp', "/editProfile/" + this.params.username);
		return this.params.userName;
	}
});

Router.route('/followAnts/:userName', {
	name: 'followAnts',
	data: function(){
    $('#selectFileLbl').show();
    $('#selectFileLbl').css('margin-bottom', '0px');

		var showData = new Object();
		showData.user = this.params.userName;
		showData.mode = true;
		Session.set('pathActualApp', "/followAnts/" + this.params.username);
		return showData;
	}
});

Router.route('/videoTrans', {
  name: 'videoTrans'
});
Router.route('/ShowFiles', {
  name: 'showUploadFiles',
  data : function(){
    $('#selectFileLbl').show();
    $('#selectFileLbl').css('margin-bottom', '0px');
  }
});


Router.route('/Chats/', {
	name: 'conversationsMenu',
  data : function(){
    $('#selectFileLbl').hide();
    $('#selectFileLbl').css('margin-bottom', '50px');
  }
});

Router.route('/Conversation/:username', {
	name: 'showConver',
	data: function(){
    $('#selectFileLbl').hide();

		var user = new Object();
		user.name = this.params.username;

		return user;
	}
});
