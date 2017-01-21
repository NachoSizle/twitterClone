Template.uploadFile.onCreated(function() {

});

Template.uploadFile.helpers({
  'tweetMessage': function() {

  },
});

Template.uploadFile.events({
  'change .myFileInput': function(event, template) {
		//RECUPERAMOS LA IMAGEN QUE HEMOS SUBIDO
		var file = $('#btnSelectFile')[0].files[0];

		reader = new FileReader();
		reader.onload = (function(file){
			console.log(file);
			return function(e){
				$(".fileSelected").attr('src', e.target.result);
				console.log(e.target.result);
			}
		})(file);

		reader.readAsDataURL(file);
  },
	'click #btnUploadFile': function(){

	}
});
