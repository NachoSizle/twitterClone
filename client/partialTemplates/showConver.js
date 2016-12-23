Template.showConver.onCreated(function() {  
  Session.set('messageInputEmpty', true);
  Session.set('recepUsernameChat', this.data.name);
});

Template.showConver.helpers({
  'messagesInChat' : function(){

  },
  'btnDisabled' : function() {
    return Session.get('messageInputEmpty');
  },
  'recepUserChat' : function(){
    var user = new Object();
    user.name = Session.get('recepUsernameChat');
    return user;
  }
});

Template.showConver.events({
  'click #btnSendMessage' : function(){
    /*CREAMOS UN MENSAJE Y ACTUALIZAMOS LA SESSION VAR CON ESE MENSAJE*/
    console.log("CLICK");
  },
  'input #inputMessage':function(){
    var lengthMessage = $('#inputMessage').val().length;
    if(lengthMessage > 0){
      Session.set('messageInputEmpty', false);
    } else if(lengthMessage === 0){
      Session.set('messageInputEmpty', true);
    }
  },
});