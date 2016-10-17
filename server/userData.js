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

  'updUserData': function(newData){
    DataUser.update({_id: newData.userId}, {$set: {userDescription : newData.description}});
  }
});