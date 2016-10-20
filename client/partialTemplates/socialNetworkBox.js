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
  				+ "<button id='" + numSocialNetworks + "' type='button' class='btn btn-default dropdown-toggle btnDropDown' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Choose "
  				+ "<span class='caret'></span>"
  				+ "</button>"
  				+ "<ul id='dropdownMenu'" + numSocialNetworks + " class='dropdown-menu'>"
  				+ "<li><a href='#'>WhatsApp</a></li><li><a href='#'>Facebook</a></li><li><a href='#'>Instagram</a></li>"
  				+ "</ul>"
  				+ "</div>"
  				+ "<input type='text' class='form-control' aria-label='...' placeholder='Username...'>"
  				+ "</div>");
  		}; 
  	},
  	'click .btnDropDown': function(event){
  		Session.set('btnTap', event.target.id);
  	},
  	'click .dropdown-menu li a': function(event){

  		var btnTap = Session.get('btnTap');
  		var selectOption = event.target.text;

  		$('#'+ btnTap).html(selectOption + " " + "<span class='caret'></span>");
  	},
  	'click #saveData': function(){
  		//DE ESTA MANERA OBTENEMOS TODOS LOS BLOQUES QUE HEMOS AÑADIDO DINÁMICAMENTE
  		console.log($('.input-group'));
  		//HAY QUE OBTENER TODOS LOS VALORES SELECCIONADOS EN CADA DROPDOWN Y EL CONTENIDO DE SUS RESPECTIVOS INPUT
  		//TODO
  	}
});

Template.socialNetworkBox.helpers({  
	
});   