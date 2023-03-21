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
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp(){
	var email = document.getElementById("email");
	var password = document.getElementById("password");
		
	const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
	promise.catch(e => alert(e.message));
		
}
	
function signIn(){
		
	var email = document.getElementById("email");
	var password = document.getElementById("password");
		
	const promise = auth.signInWithEmailAndPassword(email.value, password.value);
	promise.catch(e => alert(e.message));
		
			
}
	
	
function signOut(){
	auth.signOut();
}

auth.onAuthStateChanged(function(user){
	if(user){
		var email = user.email;
		//Take user to a different or home page
		window.location.href="index2.html"; 
		//is signed in
	}
});
