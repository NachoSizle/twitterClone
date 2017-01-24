Template.videoTwiitBox.onRendered(function(){
  Meteor.subscribe('files');
  $('#dialog-VideoTwiit').height(window.innerHeight - 50);
  $('#btnSelectGalery').addClass('activeBtnModeVideoUpload');
});

Template.videoTwiitBox.events({
  'click .textToVideoTwiitBox span' : function(event){
    $('#dialog-VideoTwiit').modal('hide');
  }
});


Template.videoTwiitBox.helpers({
  'setStyleNavBar': function(){
    var widthNav = $(window).width();
    //RESTAMOS DOS PIXELES POR LOS BORDES
    widthNav -= 2;
    return widthNav/2 + "px";
  },

  'filesInDevice' : function(){
    var filesFound = [];
    console.log('Searching files in device');
    Meteor.call('searchFiles', function(err, res){
      filesFound = res;
      console.log(res);
      Session.set('filesFound', res);
    });

    if(Session.get('filesFound')){
      filesFound = Session.get('filesFound');
      if(filesFound.length > 0){
        return filesFound;
      } else {
        return false;
      }
    }

  }
});
