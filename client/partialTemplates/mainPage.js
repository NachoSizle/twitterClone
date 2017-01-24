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
		$('#dialog-StateVideoUpload').find('div .panel-body').empty();
	},

	'hidden.bs.modal #dialog-NewTwiit' : function(event){
		$('#selectFileLbl').show();
	},

	'show.bs.modal #dialog-StateVideoUpload' : function(event){
		var fileUploaded = Session.get('modalStateVideoUploadContent');
		if(fileUploaded){
			var contentToThisModal = "Uploading <b>" + fileUploaded +"</b> ";
			$('#dialog-StateVideoUpload').find('div .panel-body').append(contentToThisModal);
		}
	},
});
