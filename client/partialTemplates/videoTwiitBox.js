Template.videoTwiitBox.onRendered(function(){
  Meteor.subscribe('files');
  $('#dialog-VideoTwiit').height(window.innerHeight - 50);
  $('#btnSelectGalery').addClass('activeBtnModeVideoUpload');
});

Template.videoTwiitBox.events({
  'click .textToVideoTwiitBox span' : function(event){
    $('#dialog-VideoTwiit').modal('hide');
  },

  'click #play-pause' : function(event){
    if ($('.containerMediaInDevice video')[0].paused === true) {
      // Play the video
      $('.containerMediaInDevice video')[0].play();
      // Update the button text to 'Pause'
      $("#play-pause").removeClass('glyphicon-play');
      $("#play-pause").addClass('glyphicon-pause');
    } else if($(this).is(":visible")){
      // Pause the video
      $('.containerMediaInDevice video')[0].pause();
      // Update the button text to 'Play'
      $("#play-pause").removeClass('glyphicon-pause');
      $("#play-pause").addClass('glyphicon-play');
    } else {
    }
  },

  'mouseenter .containerMediaInDevice video' : function(event){
    console.log("Enter");
  },

  'mouseleave .containerMediaInDevice video' : function(event){
    console.log("Out");
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
      };
   },
});
