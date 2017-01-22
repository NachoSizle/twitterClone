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

Template.mainPage.events({
	'hidden.bs.modal #dialog-VideoTwiit' : function(event){
		$('#selectFileLbl').show();
	},

	'hidden.bs.modal #dialog-NewTwiit' : function(event){
		$('#selectFileLbl').show();
	},
});
