Template.showSocialNetwork.onRendered(function(){
  socialNetwork = Session.get('SocialNetworkToShow');
});

Template.showSocialNetwork.events({
  	
});

Template.showSocialNetwork.helpers({
  'socialNetwork': function(){
    return Session.get('SocialNetworkToShow');
  }
});   


//EN EL MODAL EMERGENTE QUE MSTRARÁ LA INFORMACION AÑADIDA DEL USUARIO SOBRE SU RED SOCIAL
//SE IMPLEMENTARA QUE PINCHE EN EL NOMBRE DE USUARIO Y QUE SE REDIRIJA LA PAGINA A LA 
//PAGINA DE PERFIL DE USUARIO QUE CORRESPONDA

//EN INSTAGRAM SE REDIRIGIRÁ A: https://www.instagram.com/{{currentUser.userInsta}}/
//EN FACEBOOK SE REDIRIGIRÁ A: https://www.facebook.com/search/all/?q={{currentUser.userFb}}

//EL CASO DE WHATSAPP ES MAS DIFERENTE. LO QUE HAREMOS SERÁ SOLICITAR AL USUARIO QUE SI QUIERE
//AÑADIR EL NUMERO DE TELEFONO EN SU AGENDA (SOLO PARA DISPOSITIVOS MÓVILES)