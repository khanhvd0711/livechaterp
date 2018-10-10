import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD4pmMmxNFHmhQqFWp5MKEKaiJMDyx80r4",
    authDomain: "live-chat-12bab.firebaseapp.com",
    databaseURL: "https://live-chat-12bab.firebaseio.com",
    projectId: "live-chat-12bab",
    storageBucket: "",
    messagingSenderId: "641599993586"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;