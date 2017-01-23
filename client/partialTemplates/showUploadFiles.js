Template.showUploadFiles.onCreated(function() {
  Meteor.subscribe('files');
});

Template.showUploadFiles.helpers({
  'fileUpload' : function(){
    return Files.find().fetch();
  },
});

Template.showUploadFiles.events({
  'click .remThisFile': function(e, template){
      console.log(e.currentTarget.id);
      Meteor.call('removeThisFile', e.currentTarget.id);
  }
});
