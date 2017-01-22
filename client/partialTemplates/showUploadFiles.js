Template.showUploadFiles.onCreated(function() {
  Meteor.subscribe('files');
});

Template.showUploadFiles.helpers({
  'fileUpload' : function(){
    return Files.find().fetch();
  },
});

Template.showUploadFiles.events({

});
