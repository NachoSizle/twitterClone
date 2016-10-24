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
        userDescription : userData.userDescription
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

  'insertNewImage': function(code){
    return Images.insert({
      imgCode : code
    });
  }
});