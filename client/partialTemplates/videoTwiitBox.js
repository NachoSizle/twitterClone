Template.videoTwiitBox.onRendered(function(){
  $('#dialog-VideoTwiit').height(window.innerHeight - 50);
  $('#btnSelectGalery').addClass('activeBtnModeVideoUpload');
});

Template.videoTwiitBox.events({
  	'input #tweetText':function(){

    }
});


Template.videoTwiitBox.helpers({
  'setStyleNavBar': function(){
    var widthNav = $(window).width();
    //RESTAMOS DOS PIXELES POR LOS BORDES
    widthNav -= 2;
    return widthNav/2 + "px";
  },
});
