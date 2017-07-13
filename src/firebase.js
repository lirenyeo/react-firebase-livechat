import firebase from 'firebase'
var config = {
  databaseURL: 'https://react-livechat.firebaseio.com/'
};
var Firebase = firebase.initializeApp(config);
export default Firebase;
