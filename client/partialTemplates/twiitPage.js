Template.twiitPage.helpers({  
  'convertDateTime': function() {
  	var dateNew = new Date(this.twiitTimeStamp);
  	var dateCon = dateNew.toLocaleString();
    return dateCon;
  },

  'tweetMessage': function() {
    console.log(this._id);
    var notify =  Notifications.find({_id: this._id});
    return notify;
  },

  'countNotifTwiit' : function(){
    var num =  Notifications.find({_id: this._id}).count();
    if(num === 0){
      return false;
    } else {
      return true;
    }
  }
});

Template.twiitPage.events({
  'click button': function() {
    console.log(this._id);
    Notifications.update(this._id, {$set: {read: true}});
    console.log("Clean!");
    window.location = "/";
  },
});
