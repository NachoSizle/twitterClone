Template.twiitPageNew.onCreated(function() {  
  username = Session.get('currentUser');
  currentFollowings = UserUtils.findFollowings(username);
  arrWithId = [];
});

Template.twiitPageNew.helpers({  
  'convertDateTime': function() {
  	var dateNew = new Date(this.twiitTimeStamp);
  	var dateCon = dateNew.toLocaleString();
    return dateCon;
  },

  'tweetMessage': function() {
    var notify =  Notifications.find({twiitNotifUserName: { $nin: currentFollowings}, read: false}, {sort: {twiitTimeStamp: -1}});
    return notify;
  },

  'countNotifTwiit' : function(){
    var numNotif =  UserUtils.findNumberNotif(username);
    if(numNotif === 0){
      return false;
    } else {
      return true;
    }
  },
  'saveIdInArr' : function(){
    arrWithId.push(this._id);
    console.log(arrWithId);
  }
});

Template.twiitPageNew.events({
  'click button': function() {
    console.log(arrWithId);
    for (var aux in arrWithId){
      var id = arrWithId[aux];
      Notifications.update(id, {$set: {read: true}});
    }
    window.location = "/";
  },
});
