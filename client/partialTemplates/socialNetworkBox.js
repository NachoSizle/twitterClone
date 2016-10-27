Template.socialNetworkBox.onRendered(function(){
  selectOptions = Session.get('optionsAva');
  currentDataUser = Session.get('datauser');
  Session.set('inputNotEmpty', true);
  Session.set('removeDataSN', false);
});

Template.socialNetworkBox.events({
  	'click #btnNewSN': function(){
  		var numSocialNetworks = Session.get('countSocialNetworks');

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
  				+ "<input required id='input" + numSocialNetworks + "' type='text' class='form-control inputSN inputNewSN' aria-label='...' placeholder='Username...'>"
  				+ "<button id='clearDataUser" + numSocialNetworks + "' type='button' class='btn btn-danger' aria-haspopup='true' aria-expanded='false'>"
          + "<span id='" + numSocialNetworks + "' class='glyphicon glyphicon-remove'></span>"
          + "</button>"
          + "</div>");
  		  numSocialNetworks++;
        Session.set('countSocialNetworks', numSocialNetworks);
      };

      if(numSocialNetworks === 3){
        $('#btnNewSN').hide();
        Session.set('removeDataSN', false);
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

      if(auxCount < 3){
        Session.set('modeToAdd', true);
        $('#btnNewSN').show();
      }
    },
  	'click #saveData': function(){
  		//DE ESTA MANERA OBTENEMOS TODOS LOS BLOQUES QUE HEMOS AÑADIDO DINÁMICAMENTE
  		//HAY QUE OBTENER TODOS LOS VALORES SELECCIONADOS EN CADA DROPDOWN Y EL CONTENIDO DE SUS RESPECTIVOS INPUT
  		//TODO
      var valuesInput = [];
  		var valuesButton = [];
      var foundInputNewSN = false;

      //PARA CADA CASO HAY QUE COMPROBAR QUE LOS INPUT QUE TIENEN, ESTAN RELLENADOS. EN EL CASO DE LAS REDES QUE 
      //YA EXISTEN EN MNONGODB, SE COGERÁ SU PLACEHOLDER.
      if(Session.get('modeToAdd') === true){
        //ESTE ES EL CASO QUE SE DA CUANDO SE HA INTRODUCIDO UNA NUEVA RED SOCIAL PARA ANIADIRLA A MONGODB
        //ESTE CASO SALTA CUANDO SE HA DADO AL BOTON DE addNewSN

        //RECORREMOS LOS INPUT QUE VIENEN DIRECTAMENTE DE MONGODB
        $('.inputSN').each(function() {
          if($(this).val() === ""){
            valuesInput.push($(this).attr('placeholder'));
          } else {
            valuesInput.push($(this).val());
          }
        });

        //RECORREMOS LOS INPUT CREADOS CON EL BTN addNewSN
        $('.inputNewSN').each(function(){
          if($(this).val() != ""){
            valuesInput.push($(this).val());
            Session.set('inputNotEmpty', true);
          } else {
            Session.set('inputNotEmpty', false);
          }
          foundInputNewSN = true;
        });

        if(foundInputNewSN){
          valuesInput.splice(valuesInput.length - 1, 1);
          foundInputNewSN = false;
        }

      } else {
        //ESTE CASO SE PRODUCE CUANDO LAS REDES QUE SE MUESTRAN AL USUARIO SON TODAS YA EXISTENTES EN MONGODB
        //POR TANTO, SOLO RECORREMOS LOS INPUT QUE VIENEN DIRECTAMENTE DE MONGODB
        $('.inputSN').each(function() {
          if($(this).val() === ""){
            valuesInput.push($(this).attr('placeholder'));
          } else {
            valuesInput.push($(this).val());
          }
        });

        Session.set('inputNotEmpty', true);
      };

      //RECOGEMOS LOS VALORES DE LOS BOTONES DESACTIVADOS (NOMBRES REDES SOCIALES)
      $('.btnOptionsSN').each(function() {
        valuesButton.push($(this).text());
      });

      //ESTA PARTE ESTA CORRECTA
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
          //POR ULTIMO, REALIZAMOS LA LLAMADA A userData.js
          Meteor.call('updUserDataSocialNetworks', newData);
        }
        

        //HAY QUE DECIRLE AL MODAL QUE SE CIERRE
        $('#dialog-NewSocialNetwork').modal('hide');
      }

      //EN EL CASO DE QUE SE DE CLICK A SALVAR DATOS DESPUES DE HABER ELIMINADO UNA RED SOCIAL
      //SE TENDRÁ QUE DECIR AL SISTEMA QUE CAMBIE LA OPCION DE EDITAR SN A AÑADIR SN
      if(Session.get('removeDataSN')){
        Session.set('modeToAdd', false);
        Session.set('removeDataSN', false);
      };
  	},
});

Template.socialNetworkBox.helpers({
  'modeAddNewSN': function(){
    var result = new Object();

    var currentDataUser = Session.get('datauser');

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

    Session.set('getDataUserSN', datauserSN);

    Session.set('countSocialNetworks', numSocialNetworks);

    Session.set('optionsAva', selectOptions);


    if(selectOptions.length > 0 && selectOptions.length <= 3){
      result.messageMode = "Añade tu red social a twiiterClone";
      Session.set('modeToAdd', true);
    } else if(selectOptions.length === 0){
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
    if(Session.get('optionsAva').length > 0){
      return true;
    } else if(Session.get('modeToAdd')){
      return true;
    } else {
      return false;
    }
  },
});   