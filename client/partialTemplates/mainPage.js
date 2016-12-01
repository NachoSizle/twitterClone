Template.mainPage.helpers({
	'mainPage': function(){
		if(window.location.pathname === "/"){
			return true;
		}
	},
})