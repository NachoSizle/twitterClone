Router.configure({
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', {name: 'userManagement'});
/*SE ACCEDE POR WINDOW.LOCATION*/
Router.route('/whoToFollow', {name: 'followUsers'});
Router.route('/myProfile', {name: 'userProfile'});
Router.route('/Notifications', {name: 'twiitPageNew'});
Router.route('/Comments', {name: 'twiitCommentPage'});
/*SE ACCEDE POR PATHFOR*/
Router.route('/twiits/:_id', {
  	name: 'twiitPage',
  	data: function() { 
  		return this.params;
  	}
});