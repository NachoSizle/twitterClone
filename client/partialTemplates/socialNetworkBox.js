Template.socialNetworkBox.onRendered(function(){
  selectOptions = Session.get('optionsAva');
  currentDataUser = Session.get('datauser');
  Session.set('inputNotEmpty', true);
  Session.set('removeDataSN', false);
});

Template.socialNetworkBox.events({
  	'click #btnNewSN': function(){
  		var numSocialNetworks = Session.get('countSocialNetworks');
      console.log(numSocialNetworks);

  		if(numSocialNetworks < 3){

        var avaSelecOptions = "";
        var selectOptionsArray = Session.get('optionsAva');

        for (var i = 0; i < selectOptionsArray.length; i++) {
          avaSelecOptions += "<li><a href='#'>" + selectOptionsArray[i] + "</a></li>";
        }
  			
  			$('#containerInputs').append("<div class='input-group' id='inputGroup" + numSocialNetworks + "' style='margin-bottom: 10px;'>"
  				+ "<div class='input-group-btn'>"
  				+ "<button id='" + numSocialNetworks + "' type='button' class='btn btn-default dropdown-toggle btnDropDown btnOptionsSN' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Choose"
  				+ "<span class='caret'></span>"
  				+ "</button>"
  				+ "<ul id='dropdownMenu" + numSocialNetworks + "' class='dropdown-menu'>"
  				+ avaSelecOptions
  				+ "</ul>"
  				+ "</div>"
  				+ "<input id='input" + numSocialNetworks + "' type='text' class='form-control inputSN' aria-label='...' placeholder='Username...'>"
  				+ "<button id='clearDataUser" + numSocialNetworks + "' type='button' class='btn btn-danger' aria-haspopup='true' aria-expanded='false'>"
          + "<span id='" + numSocialNetworks + "' class='glyphicon glyphicon-remove'></span>"
          + "</button>"
          + "</div>");
  		  numSocialNetworks++;
        Session.set('countSocialNetworks', numSocialNetworks);
      };

      if(numSocialNetworks === 3){
        $('#btnNewSN').hide();
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
      var arrOptions = Session.get('optionsAva');

      var numSele = arrOptions.indexOf(selectOption);
      if(numSele >= 0){
        arrOptions.splice(numSele, 1);
      } 

      //VAMOS A COMPROBAR QUE SI selectOption ES WHATSAPP LE VAMOS A PONER AL INPUT UN FORMATO PARA QUE 
      //EL USUARIO SOLO PUEDA INTRODUCIR NUMEROS
      if(selectOption === "WhatsApp"){
        $('#input' + btnTap).attr("type", "number");
      }

      //UNA VEZ SELECCIONADO LA OPCION DEL DROPDOWN, TRANSFORMAMOS EL DROPDOWN A UN BTN DESHABILITADO
      $('#'+ btnTap).html(selectOption);

      $('#dropdownMenu'+ btnTap).remove();

      Session.set('optionsAva', arrOptions);
  	},
    'click .btn-danger': function(event){

      //GUARDAMOS EL ID (numero entre 0 y 2) PARA DESPUES IDENTIFICAR EL INPUT-GROUP Y ASI ELIMINAR LOS DATOS DE MONGODB
      var selectOption = event.target.id;
      //AHORA BUSCAMOS EL CAMPO A ELIMINAR Y LLAMAMOS AL METODO DE userData.js
      var btnToRem = $('#' + selectOption).text();
      var newData = new Object();

      if(btnToRem != 'Choose'){
        newData.userId = Session.get('datauser')._id;
        newData.propertyToRem = btnToRem;

        Meteor.call('removeDataSocialNetworks', newData);
      };
      
      //POR ULTIMO VAMOS A INFORMAR AL USUARIO QUE SE HA ELIMINADO LA RED SOCIAL
      //PARA ELLO, VAMOS A ELIMINAR EL inputGroup DE LA SN QUE SE HA ELIMINADO
      $('#inputGroup' + selectOption).remove();
      Session.set('removeDataSN', true);

      //ACTUALIZAMOS EL VALOR DE optionsAva EN Session.keys
      var auxOptions = Session.get('optionsAva');

      if(btnToRem != "Choose"){
        if(auxOptions.indexOf(newData.propertyToRem) === -1){
          auxOptions.push(newData.propertyToRem);
          Session.set('optionsAva', auxOptions);
        };
      };

      //ACTUALIZAMOS EL VALOR DE countSocialNetworks EN Session.keys
      var auxCount = Session.get('countSocialNetworks');
      auxCount--;
      Session.set('countSocialNetworks', auxCount);

      //CUANDO SE BORRA UN INPUTGROUP HAY QUE REESTABLECER LOS ID PARA QUE EMPIECEN POR 0 HASTA 2

      for (var i = 0; i < auxCount; i++) {
        $('.input-group').attr('id', 'inputGroup' + i);

        $('.btnOptionsSN').attr('id', i);

        $('.dropdown-menu').attr('id', 'dropdownMenu' + i);

        $('.inputSN').attr('id', 'input' + i);

        $('.glyphicon-remove').attr('id', i);

        $('.btn-danger').attr('id', 'clearDataUser' +  i);
      }

      console.log("countSocialNetworks");
      console.log(auxCount);

      if(auxCount < 3){
        $('#btnNewSN').show();
      }
    },
  	'click #saveData': function(){
  		//DE ESTA MANERA OBTENEMOS TODOS LOS BLOQUES QUE HEMOS AÑADIDO DINÁMICAMENTE
  		//HAY QUE OBTENER TODOS LOS VALORES SELECCIONADOS EN CADA DROPDOWN Y EL CONTENIDO DE SUS RESPECTIVOS INPUT
  		//TODO
      var valuesInput = [];
  		var valuesButton = [];
      var inputsEmpty = [];

  		$('.inputSN').each(function() {
        if(Session.get('modeToAdd') === false){
          //ESTAMOS EDITANDO LAS REDES SOCIALES EXISTENTES
          if($(this).val() === ""){
            valuesInput.push($(this).attr('placeholder'));
          } else {
            valuesInput.push($(this).val());
          }
          Session.set('inputNotEmpty', true);
        } else {
          //ESTAMOS AÑADIENDO UNA NUEVA RED SOCIAL
          if($(this).val() != ""){
            valuesInput.push($(this).val());
            Session.set('inputNotEmpty', true);
          } else {
            //ESTE ES EL CASO DE QUE EL USUARIO NO INTRODUZCA NADA EN EL INPUT DE LA RED SOCIAL
            //SI ENTRA EN ESTE else HAY QUE PARAR LA EJECUCION DEL RESTO DEL METODO
            //PARA ELLO GUARDAMOS UN BOOLEAN EN UNA Session.key
            Session.set('inputNotEmpty', false);
            inputsEmpty.push($(this).attr('id'));
            console.log("inputsEmpty");
            console.log(inputsEmpty);
          }
        };
  		});

      $('.btnOptionsSN').each(function() {
        valuesButton.push($(this).text());
      });

      if(Session.get('inputNotEmpty')){
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
        
        console.log("valuesButton");
        console.log(valuesButton);
        console.log("valuesInput");
        console.log(valuesInput);
        

        //HAY QUE DECIRLE AL MODAL QUE SE CIERRE
        $('#dialog-NewSocialNetwork').modal('hide');
      } else {
        //SI ENCUENTRA QUE ALGUN INPUT ESTÁ VACIO SE ILUMINARÁ EN ROJO DICHO INPUT PARA ELLO TOMAMOS EL VALOR DE 
        //var inputsEmpty = [];
        
      };

      //EN EL CASO DE QUE SE DE CLICK A SALVAR DATOS DESPUES DE HABER ELIMINADO UNA RED SOCIAL
      //SE TENDRÁ QUE DECIR AL SISTEMA QUE CAMBIE LA OPCION DE EDITAR SN A AÑADIR SN
      if(Session.get('removeDataSN')){
        Session.set('modeToAdd', true);
        Session.set('removeDataSN', false);
      };
  	},
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
      var aux = ["WhatsApp", "Facebook", "Instagram"];
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