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
    console.log(newData);
    DataUser.update({_id: newData.userId}, {$set: {userDescription : newData.description, userImg : newData.imgId}});
  },

  'updUserDataSocialNetworks': function(newData){
    console.log(newData);
    DataUser.update({_id: newData.userId}, {$set: {userFb : newData.userFb, userWhats : newData.userWhats, userInsta : newData.userInsta}});
  },

  'insertNewImage': function(code){
    return Images.insert({
      imgCode : code
    });
  }
});