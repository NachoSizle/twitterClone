Template.videoTwiitBox.onRendered(function(){
  $('#dialog-VideoTwiit').height(window.innerHeight - 50);
  $('#btnSelectGalery').addClass('activeBtnModeVideoUpload');
});

Template.videoTwiitBox.events({

});


Template.videoTwiitBox.helpers({
  'setStyleNavBar': function(){
    var widthNav = $(window).width();
    //RESTAMOS DOS PIXELES POR LOS BORDES
    widthNav -= 2;
    return widthNav/2 + "px";
  },

  'filesInDevice' : function(){
    var filesFound = Files.find().fetch();
    console.log(filesFound);

    if(filesFound.length > 0){
      console.log(Files.findOne({_id: filesFound[0]._id}).link());
      return filesFound;
    } else {
      return false;
    }
  }
});
