Meteor.methods({
  'removeThisFile': function(idFileToRem) {
    console.log(idFileToRem);
    if(Meteor.isServer){
      //var fileFound = Files.find({_id: idFileToRem}).fetch();
      Files.remove({_id : idFileToRem});
    }
  },
});
