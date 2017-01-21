Twitts = new Meteor.Collection('twitts');
Relationships = new Meteor.Collection('relationships');
DataUser = new Meteor.Collection('dataUser');
Favs = new Meteor.Collection('favs');
Notifications = new Mongo.Collection('notifications');
Images = new Mongo.Collection('images');
ChatsMsg = new Mongo.Collection('chatsMsg');
Chats = new Mongo.Collection('chats');
Files = new FilesCollection({
  collectionName: 'Files',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload: function (file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg|mp4/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  }
});
