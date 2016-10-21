Template.socialNetworkBox.onRendered(function(){
	Session.set('countSocialNetworks', 0);
});

Template.socialNetworkBox.events({
  	'click #btnNewSN': function(){
  		var numSocialNetworks = Session.get('countSocialNetworks');
  		if(numSocialNetworks < 3){
  			Session.set('countSocialNetworks', numSocialNetworks+1);
  			
  			$('#containerInputs').append("<div class='input-group' style='margin-bottom: 10px;'>"
  				+ "<div class='input-group-btn' id='containerInputs'>"
  				+ "<button id='" + numSocialNetworks + "' type='button' class='btn btn-default dropdown-toggle btnDropDown' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Choose"
  				+ "<span class='caret'> </span>"
  				+ "</button>"
  				+ "<ul id='dropdownMenu" + numSocialNetworks + "' class='dropdown-menu'>"
  				+ "<li><a href='#'>WhatsApp</a></li><li><a href='#'>Facebook</a></li><li><a href='#'>Instagram</a></li>"
  				+ "</ul>"
  				+ "</div>"
  				+ "<input type='text' class='form-control inputSN' aria-label='...' placeholder='Username...'>"
  				+ "</div>");
  		}; 
  	},
  	'click .btnDropDown': function(event){
  		Session.set('btnTap', event.target.id);
  	},
  	'click .dropdown-menu li a': function(event){

  		var btnTap = Session.get('btnTap');
  		var selectOption = event.target.text;
      //AÑADIR A UN ARRAY LAS SELECCIONES QUE HACEMOS PARA QUE NO SE PUEDAN REPETIR.
      //ES DECIR, UN USUARIO SOLO VA A PODER ENLAZAR 1 CUENTA DE FACEBOOK, INSTAGRAM 
      //O WHATSAPP.

  		$('#'+ btnTap).html(selectOption + " " + "<span class='caret'></span>");
  	},
  	'click #saveData': function(){
  		//DE ESTA MANERA OBTENEMOS TODOS LOS BLOQUES QUE HEMOS AÑADIDO DINÁMICAMENTE
  		//HAY QUE OBTENER TODOS LOS VALORES SELECCIONADOS EN CADA DROPDOWN Y EL CONTENIDO DE SUS RESPECTIVOS INPUT
  		//TODO
      var valuesInput = [];
  		var valuesButton = [];

  		$('.inputSN').each(function() {
  		    valuesInput.push($(this).val());
  		});
      $('.input-group button').each(function() {
          valuesButton.push($(this).text());
      });

      //AHORA OBTENEMOS EL _id DEL USUARIO Y LO AÑADIMOS AL OBJETO QUE LE VAMOS A PASAR 
      //A LA LLAMADA A userData.js QUE SE ENCARGARÁ DE ACTUALIZAR EL REGISTRO.
      var newData = new Object();
      newData.userId = Session.get('datauser')._id;

      if(valuesInput){
        for ( i = 0; i < valuesButton.length; i++ ){
          var valu = valuesButton[i];
          var num = valuesButton.indexOf(valu);
          console.log(num);
          if(num >= 0){
            if("WhatsApp " === valu ){
              newData.userWhats = valuesInput[num];
            } else if("Facebook " === valu){
              newData.userFb = valuesInput[num];
            } else if("Instagram " === valu ){
              newData.userInsta = valuesInput[num];
            }
          }
        }
      }
      
      console.log(valuesButton);
  		console.log(valuesInput);
      console.log(newData);

      //POR ULTIMO, REALIZAMOS LA LLAMADA A userData.js
      Meteor.call('updUserDataSocialNetworks', newData);

      //HAY QUE DECIRLE AL MODAL QUE SE CIERRE
  	}
});

Template.socialNetworkBox.helpers({  
	
});   