Template.socialNetworkBox.onRendered(function(){
  selectOptions = Session.get('optionsAva');
  currentDataUser = Session.get('datauser');
});

Template.socialNetworkBox.events({
  	'click #btnNewSN': function(){
  		var numSocialNetworks = Session.get('countSocialNetworks');
  		if(numSocialNetworks < 3){
  			Session.set('countSocialNetworks', numSocialNetworks + 1);
        var avaSelecOptions = "";

        for (var i = 0; i < selectOptions.length; i++) {
          avaSelecOptions += "<li><a href='#'>" + selectOptions[i] + "</a></li>";
        }
  			
  			$('#containerInputs').append("<div class='input-group' style='margin-bottom: 10px;'>"
  				+ "<div class='input-group-btn' id='containerInputs'>"
  				+ "<button id='" + numSocialNetworks + "' type='button' class='btn btn-default dropdown-toggle btnDropDown' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Choose"
  				+ "<span class='caret'> </span>"
  				+ "</button>"
  				+ "<ul id='dropdownMenu" + numSocialNetworks + "' class='dropdown-menu'>"
  				+ avaSelecOptions
  				+ "</ul>"
  				+ "</div>"
  				+ "<input id='input" + numSocialNetworks + "' type='text' class='form-control inputSN' aria-label='...' placeholder='Username...'>"
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
      var numSele = selectOptions.indexOf(selectOption);
      if(numSele >= 0){
        selectOptions.splice(numSele, 1);
      } 

      //VAMOS A COMPROBAR QUE SI selectOption ES WHATSAPP LE VAMOS A PONER AL INPUT UN FORMATO PARA QUE 
      //EL USUARIO SOLO PUEDA INTRODUCIR NUMEROS
      if(selectOption === "WhatsApp"){
        $('#input' + btnTap).attr("type", "number");
      }

      //UNA VEZ SELECCIONADO LA OPCION DEL DROPDOWN, TRANSFORMAMOS EL DROPDOWN A UN BTN DESHABILITADO
      $('#'+ btnTap).html(selectOption);

      $('#dropdownMenu'+ btnTap).remove();
  	},
    'click .btn-danger': function(event){
      //GUARDAMOS EL ID (numero entre 0 y 2) PARA DESPUES IDENTIFICAR EL INPUT-GROUP Y ASI ELIMINAR LOS DATOS DE MONGODB
      var selectOption = event.target.id;
      console.log($('#clearDataUser' + selectOption));
    },
  	'click #saveData': function(){
  		//DE ESTA MANERA OBTENEMOS TODOS LOS BLOQUES QUE HEMOS AÑADIDO DINÁMICAMENTE
  		//HAY QUE OBTENER TODOS LOS VALORES SELECCIONADOS EN CADA DROPDOWN Y EL CONTENIDO DE SUS RESPECTIVOS INPUT
  		//TODO
      var valuesInput = [];
  		var valuesButton = [];

  		$('.inputSN').each(function() {
        if($(this).val() != ""){
          valuesInput.push($(this).val());
        }
  		});

      $('.input-group button').each(function() {
        valuesButton.push($(this).text());
      });

      //COMPROBAMOS QUE SE HA INTRODUCIDO ALGUN VALOR O SELECCIONADO ALGUNA RED SOCIAL PARA AÑADIRLA
      if(valuesInput && valuesButton){
        //AHORA OBTENEMOS EL _id DEL USUARIO Y LO AÑADIMOS AL OBJETO QUE LE VAMOS A PASAR 
        //A LA LLAMADA A userData.js QUE SE ENCARGARÁ DE ACTUALIZAR EL REGISTRO.
        var newData = new Object();
        newData.userId = Session.get('datauser')._id;

        for ( i = 0; i < valuesButton.length; i++ ){
          var valu = valuesButton[i];
          var num = valuesButton.indexOf(valu);

          if(num >= 0){
            if("WhatsApp" === valu ){
              newData.userWhats = valuesInput[num];
            } else if("Facebook" === valu){
              newData.userFb = valuesInput[num];
            } else if("Instagram" === valu ){
              newData.userInsta = valuesInput[num];
            }
          }
        }
        console.log(newData);
        //POR ULTIMO, REALIZAMOS LA LLAMADA A userData.js
        Meteor.call('updUserDataSocialNetworks', newData);
      }
      
      console.log(valuesButton);
  		console.log(valuesInput);
      

      //HAY QUE DECIRLE AL MODAL QUE SE CIERRE
      $('#dialog-NewSocialNetwork').modal('hide');
  	}
});

Template.socialNetworkBox.helpers({
  'modeAddNewSN': function(){
    var result = new Object();

    var currentDataUser = Session.get('datauser');
    console.log("currentDataUser");
    console.log(currentDataUser);
    var selectOptions = ["WhatsApp", "Instagram", "Facebook"];
    var numSocialNetworks = 0;

    var datauserSN = [];

    if(currentDataUser.userWhats){
      var numSele = selectOptions.indexOf("WhatsApp");
      selectOptions.splice(numSele, 1);
      numSocialNetworks += 1;
      datauserSN.push(currentDataUser.userWhats);
    }

    if(currentDataUser.userFb){
      var numSele = selectOptions.indexOf("Facebook");
      selectOptions.splice(numSele, 1);
      numSocialNetworks += 1;
      datauserSN.push(currentDataUser.userFb);
    }

    if(currentDataUser.userInsta){
      var numSele = selectOptions.indexOf("Instagram");
      selectOptions.splice(numSele, 1);
      numSocialNetworks += 1;
      datauserSN.push(currentDataUser.userInsta);
    }

    console.log("Select Options");
    console.log(selectOptions);
    console.log("datauserSN");
    console.log(datauserSN);

    Session.set('getDataUserSN', datauserSN);

    Session.set('countSocialNetworks', numSocialNetworks);

    Session.set('optionsAva', selectOptions);


    if(selectOptions.length > 0){
      result.messageMode = "Añade tu red social a twiiterClone";
      Session.set('modeToAdd', true);
    } else {
      //POR ULTIMO VAMOS A AÑADIR LOS CAMPOS PARA PODER SER EDITADOS
      var aux = ["WhatsApp", "Instagram", "Facebook"];
      var contentToAppend = [];
      for (var i = 0; i < numSocialNetworks; i++) {
        var objAux = new Object();
        objAux.id = i;
        objAux.valueBtn = aux[i];
        objAux.placeholder = datauserSN[i];

        contentToAppend.push(objAux);
      }
      result.messageMode = "Edita tu red social";
      Session.set('appendThis', contentToAppend);
      Session.set('modeToAdd', false);
    }
    return result;
  },

  'contentToAppend': function(){
    return Session.get('appendThis');
  },

	'userHaveSN' : function(){
    return Session.get('modeToAdd');
  },
});   