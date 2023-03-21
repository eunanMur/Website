                                                              // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCH14gTyKTXsvRI7VWfb54wM2tl0goBLug",
    authDomain: "website-ab1d4.firebaseapp.com",
    databaseURL: "https://website-ab1d4-default-rtdb.firebaseio.com",
    projectId: "website-ab1d4",
    storageBucket: "website-ab1d4.appspot.com",
    messagingSenderId: "249497437283",
    appId: "1:249497437283:web:54b1aed70d8d73f6e4a456",
    measurementId: "G-GR8NW4NFCW"
//firebase config stuff
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signOut(){
  auth.signOut();
  window.location.href="index.html";
  
}