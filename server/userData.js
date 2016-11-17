Meteor.methods({ 
  'findUserFromDB': function(username) {
    //Meteor._sleepForMs(1000);
    return Meteor.users.findOne({"username" : username});
  },

  'insertDataUser': function(userData) {

    //BUSCAMOS AL USUARIO QUE SE HA CREADO ANTES PARA RECUPERAR SU _ID
    Meteor.call('findUserFromDB', userData.userNameProfile, function(err, res){
      userData.userId = res._id;
    });

    if (Meteor.user()) {
      DataUser.insert({
        userId : userData.userId,
        userNameProfile : userData.userNameProfile,
        userName : userData.userName,
        userImg : userData.userImg,
        userDescription : userData.userDescription,
        showWhatsTo: []
      });
    }
  },

  'findUserData': function(userName){
    return DataUser.findOne({userNameProfile : userName});
  },

  'findUserImg': function(userImg){
    return Images.findOne({_id : userImg}).imgCode;
  },

  'updUserData': function(newData){
    DataUser.update({_id: newData.userId}, {$set: {userDescription : newData.description, userImg : newData.imgId}});
  },

  'updUserDataSocialNetworks': function(newData){
    if((newData.userFb != null) && (newData.userInsta != null) && (newData.userWhats != null)){
      DataUser.update({_id: newData.userId}, {$set: {userFb : newData.userFb, userWhats : newData.userWhats, userInsta : newData.userInsta}});
    } else {
      if(newData.userFb != null){
        DataUser.update({_id: newData.userId}, {$set: {userFb : newData.userFb}});
      }

      if(newData.userInsta != null){
        DataUser.update({_id: newData.userId}, {$set: {userInsta : newData.userInsta}});
      }

      if(newData.userWhats != null){
        DataUser.update({_id: newData.userId}, {$set: {userWhats : newData.userWhats}});
      }
    }
  },

  'removeDataSocialNetworks': function(newData){
    console.log(newData.userId + " " + newData.propertyToRem);

    switch(newData.propertyToRem){
        case "WhatsApp": {
          DataUser.update({_id: newData.userId},  {$unset: { "userWhats" : 1 }});
        };
          break;
        case "Instagram": {
          DataUser.update({_id: newData.userId},  {$unset: { "userInsta" : 1 }});
        };
          break;
        case "Facebook": {
          DataUser.update({_id: newData.userId},  {$unset: { "userFb" : 1 }});
        };
          break;
      }
    
    //ESTE COMANDO ES EL QUE SE UTILIZA EN MONGO
    //db.dataUser.update({"_id": "rQTzzDMfr4ZkiR7S8"},  {"$unset":{"userWhats":1}});
  },

  'insertNewImage': function(code){
    return Images.insert({
      imgCode : code
    });
  },

  'removeThisUser': function(userToRemove){
    //HAY QUE ELIMINAR EL USUARIO DE dataUser Y DE users
    var idImgUser = DataUser.findOne({userId: userToRemove.id}).userImg;

    if(idImgUser){
      Images.remove({_id: idImgUser});
    }
   
    Notifications.remove({recepNotif: userToRemove.name});
    Relationships.remove({follower: userToRemove.name});
    Relationships.remove({following: userToRemove.name});

    Favs.find({idUserTapFav: userToRemove.id}).fetch().map(function(data) {
      if(data.idUserTapFav){
        var aux = data.idUserTapFav;
        var pos = aux.indexOf(userToRemove.id);
        if(pos != -1){
          UserUtils.removeFavToTwiit(data.idTwiit, userToRemove.id);
        }
      }
    });

    Twitts.remove({user: userToRemove.name});
    Meteor.users.remove({_id: userToRemove.id});
    DataUser.remove({userId: userToRemove.id});
  }, 

  'updateArrayWhatsAppAuthorize': function(data){
    var user = DataUser.findOne({userNameProfile: data.user});
    var arrShowWhats = user.showWhatsTo;
    console.log("Array: ");
    console.log(arrShowWhats);

    //BUSCAMOS EL USUARIO QUE VAMOS A AÑADIR AL ARRAY
    var userToAdd = DataUser.findOne({userNameProfile: data.userToShow});
    arrShowWhats.push(userToAdd.userId);

    console.log(arrShowWhats);
    console.log(user);

    var a = DataUser.update({userId: user.userId}, {$set: {showWhatsTo : arrShowWhats}});
    
  }
});