Template.videoTwiitBox.onRendered(function(){
  Meteor.subscribe('files');
  $('#dialog-VideoTwiit').height(window.innerHeight - 50);
  $('#btnSelectGalery').addClass('activeBtnModeVideoUpload');
  Session.set('modeSelectedToUploadMedia', true);
});

Template.videoTwiitBox.events({
  'click .containerInitialTextAndExit span' : function(event){
    $('#dialog-VideoTwiit').modal('hide');
  },

  'click #play-pause' : function(event){
    if ($('.containerMediaInDevice video')[0].paused === true) {
      $('.containerMediaInDevice video')[0].play();
      $("#play-pause").removeClass('glyphicon-play');
      $("#play-pause").addClass('glyphicon-pause');
      $('#play-pause').animate({
        opacity: 0
      }, 1250);
    } else if($('#play-pause').css("opacity") > 0){
      $('.containerMediaInDevice video')[0].pause();
      $("#play-pause").removeClass('glyphicon-pause');
      $("#play-pause").addClass('glyphicon-play');
    } else {
      $('#play-pause').animate({
        opacity: 1
      }, 1250);
    }
  },

  'mouseenter .containerMediaInDevice video' : function(event){
    $('#play-pause').animate({
      opacity: 1
    }, 1250);
  },

  'mouseleave .containerMediaInDevice video' : function(event){
    $('#play-pause').animate({
      opacity: 0
    }, 1250);
  },

  /*PARA MOSTRAR LA GALERIA DE IMAGENES*/
  'click #btnSelectGalery': function(event){
    Session.set('modeSelectedToUploadMedia', true);
    $('#btnSelectGalery').addClass('activeBtnModeVideoUpload');
    $('#btnSelectCamera').removeClass('activeBtnModeVideoUpload');
  },
  /*PARA ACCEDER A LA CAMARA*/
  'click #btnSelectCamera': function(event){
    Session.set('modeSelectedToUploadMedia', false);
    $('#btnSelectCamera').addClass('activeBtnModeVideoUpload');
    $('#btnSelectGalery').removeClass('activeBtnModeVideoUpload');
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

   'modeSelectedToUploadMedia' : function() {
     return Session.get('modeSelectedToUploadMedia');
   }
});
