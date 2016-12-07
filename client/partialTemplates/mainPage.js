Template.mainPage.onCreated(function(){
	Session.set('pathActualApp', window.location.pathname);
});

Template.mainPage.helpers({
	'mainPage': function(){
		if(Session.get('pathActualApp') === "/"){
			return true;
		}
	}
})