Template.twiitCommentPage.onCreated(function() {  
	this.subscribe('twitts');
  	this.subscribe('favs');
});

Template.twiitCommentPage.helpers({
	//DEVUELVE EL MENSAJE ORIGINAL DEL QUE SE PRODUCEN LOS COMENTARIOS
  'tweetMessage' : function(){
  	//HAY QUE CONSEGUIR PASAR A ESTA VISTA EL this._id DE tweetFeed PARA PODER 
  	//DEVOLVER EL TWEET INICIAL Y DE AHI PASAR A MOSTRAR CON tweetThatCommentMessage
  	//TODOS LOS COMENTARIOS QUE TENGA!
  	var tweetInitialToComment = Twitts.find({}, {sort: {timestamp: -1}});
  	return tweetInitialToComment;
  },/*	  
  'tweetThatCommentMessage': function() {
    var tweet =  Twitts.find({twiitIdComment : tweetInitialToComment._id}, {sort: {timestamp: -1}} );
    console.log(tweet);
    return tweet;
  },*/
  'convertDateTime': function() {
    var dateNew = new Date(this.timestamp);
    var dateCon = dateNew.toLocaleString();
    return dateCon;
  }
});

Template.twiitCommentPage.events({
  'click #btnFav': function(){
    var currentUser = Session.get('currentUser');
    var idUser = Meteor.users.findOne({ username: currentUser })._id;
    //BUSCAMOS A LOS USUARIOS QUE HAN DADO FAV AL TWIIT QUE SE HA PULSADO
    var userTapFav = UserUtils.findFavsForTwiit(this._id);
    var arrAux = userTapFav.idUserTapFav;

    //SI EL USUARIO YA LE HA DADO FAV A UN TWIIT, NO SE PERMITE DARLE MAS FAVS
    if(arrAux.indexOf(idUser) === -1){
      UserUtils.addFavToTwiit(this._id, idUser);
    } else {
      //EN EL CASO DE QUE YA LE HAYA DADO A FAV Y QUIERA QUITAR EL FAV QUE LE HA DADO
      //SE EJECUTARÁ ESTE OTRO MÉTODO QUE LO QUE HACE ES LO MISMO QUE addFavToTwiit PERO
      //LA OPERACION INVERSA
      UserUtils.removeFavToTwiit(this._id, idUser);
    }
  },
  'click #btnComm' : function(){
	$("#dialog-NewTwiit").modal();
	Session.set('commentMode', true);
  }
});

/* ESTE CACHO VA DENTRO DE twiitCommentPage PARA MOSTRAR LOS COMENTARIOS DEL TWIIT INICIAL

        {{#each tweetThatCommentMessage}}
          <div class="panel panel-info"><!--Contenido de la cabecera + el mensaje del twiit-->
            <div class="panel-heading"><!--Cabecera del twiit-->
              <h3 class="panel-title">@{{this.user}} OLIKI 
                <span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>
                {{convertDateTime}}
              </h3>
            </div><!--Cabecera del twiit-->
            <div class="panel-body"><!--Contenido del twiit-->
              {{this.message}}
            </div><!--Contenido del twiit-->

            <div class="btn-group" role="group" id="btnGroupInteractions">
              <button type="button" class="btn btn-secondary">
                <span class="glyphicon glyphicon-bullhorn"></span>
              </button>

              <button type="button" id="btnComm" class="btn btn-secondary">
                <span class="glyphicon glyphicon-comment"></span>
                <span class="badge-numFav badge">{{this.numComment}}</span>
              </button>

              <button type="button" id="btnFav" class="btn btn-secondary">
                <span class="glyphicon glyphicon-heart"></span>
                <span class="badge-numFav badge">{{this.numFav}}</span>
              </button>
            </div>
          </div><!--Contenido de la cabecera + el mensaje del twiit-->
        {{/each}}
*/