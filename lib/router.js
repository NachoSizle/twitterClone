Router.configure({
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route('/', {name: 'userManagement'});
Router.route('/whoToFollow', {name: 'followUsers'});
Router.route('/myProfile', {name: 'userProfile'});
Router.route('/twiits/:_id', {
  name: 'twiitPage',
  data: function() { 
  	return this.params;
  }
});