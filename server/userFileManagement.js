Meteor.methods({
  'removeThisFile': function(idFileToRem) {
    console.log(idFileToRem);
    if(Meteor.isServer){
      //var fileFound = Files.find({_id: idFileToRem}).fetch();
      Files.remove({_id : idFileToRem});
    }
  },

  'searchFiles' : function(){
    if(Meteor.isServer){
      console.log('Searching files..');
      var filesFound = Files.find().fetch();
      console.log(filesFound);
      return filesFound;
    }
  },

  'searchOneFile' : function(){
    if(Meteor.isServer){
      console.log('Search one file..');
      var fileFound = Files.findOne().fetch();
      return fileFound;
    }
  },

  'searchThisFile' : function(idFile){
    if(Meteor.isServer){
      console.log('Search file ' + idFile);
      var fileFound = Files.findOne({_id : idFile}).fetch();
      return fileFound;
    }
  }
});
