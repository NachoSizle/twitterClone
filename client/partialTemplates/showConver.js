Template.showConver.onCreated(function() {  
  Meteor.subscribe('chats');
  Session.set('messageInputEmpty', true);
  Session.set('recepUsernameChat', this.data.name);
});

Template.showConver.helpers({
  'messagesInChat' : function(){
    recoverChat();
    return Session.get('chatFound');
  },

  'btnDisabled' : function() {
    return Session.get('messageInputEmpty');
  },

  'recepUserChat' : function(){
    var user = new Object();
    user.name = Session.get('recepUsernameChat');
    return user;
  },

  'messageIsMine' : function(isMine){
    if(isMine === Session.get('currentUser')){
      return "messageIsMine";
    } else {
      return "messageNotMine";
    }
  },

  'convertDateTime': function(dateToConvert) {
    var dateNew = new Date(dateToConvert);
    var dateCon = dateNew.toLocaleString();

    var elem = dateCon.split(' ');

    return elem[0];
  },
});

Template.showConver.events({
  'click #btnSendMessage' : function(){
    var chatData = new Object();
    var contentMessage = $('#inputMessage').val();
    var userRecepMsg = Session.get('recepUsernameChat');

    chatData.contentMessage = contentMessage;
    chatData.userRecepMsg = userRecepMsg;
    if(Session.get('chatEmpty')){
      Meteor.call('insertMsgChat', chatData);
    } else {
      chatData.nameChat = Session.get('nameChat');
      Meteor.call('insertMsg', chatData);
    }
    //HAY QUE MANDAR UNA NOTIFICACIÓN AL OTRO USUARIO PARA QUE SE ENTERE DE 
    //QUE LE HEMOS ESCRITO UN MENSAJE

    //INSERTAR UN NUEVO MENSAJE PARA PRODUCIR EL EFECTO DE QUE SE HA ENVIADO
    recoverChat();
    //LIMPIAMOS EL TEXTO QUE HEMOS PUESTO EN EL #inputMessage
    $('#inputMessage').val("");
  },

  'input #inputMessage' : function(){
    var lengthMessage = $('#inputMessage').val().length;
    if(lengthMessage > 0){
      Session.set('messageInputEmpty', false);
    } else if(lengthMessage === 0){
      Session.set('messageInputEmpty', true);
    }
  },

  'click #cleanHistory' : function(){
    console.log(Session.get('recepUsernameChat'));
    Meteor.call('removeChat', Session.get('recepUsernameChat'));
  }
});

function recoverChat(){
  var userNameToFindChat = Session.get('recepUsernameChat');

  Meteor.call('findChatFromUser', userNameToFindChat, function(err, res){
    if(res){
      Session.set('chatFound', res);
      if(res.length === 0){
        Session.set('chatEmpty', true);
      } else {
        Session.set('nameChat', res[0].nameChat);
        Session.set('chatEmpty', false);
      }
    } 

    if(err){
      console.log(err);
    }
  });
}