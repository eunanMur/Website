// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCH14gTyKTXsvRI7VWfb54wM2tl0goBLug",
    authDomain: "website-ab1d4.firebaseapp.com",
    databaseURL: "https://website-ab1d4-default-rtdb.firebaseio.com",
    projectId: "website-ab1d4",
    storageBucket: "website-ab1d4.appspot.com",
    messagingSenderId: "249497437283",
    appId: "1:249497437283:web:54b1aed70d8d73f6e4a456",
    measurementId: "G-GR8NW4NFCW"
};
firebase.initializeApp(firebaseConfig);

var myDB = firebase.database().ref('Data');

function on(){
  myDB.set({
    'Condition':'on'
  });
}

function off(){
  myDB.set({
    'Condition':'off'
  });
}