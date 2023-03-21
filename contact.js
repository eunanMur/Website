//Unique Firebase Object
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


//initialise Firebase
firebase.initializeApp(firebaseConfig);

//create connection to store data in FB, use connection handler variable
const myDBCxn = firebase.database().ref('/Feedback');

//Get Submit Form
let submitButton = document.getElementById('submit')

//Define Variables
let firstName = document.getElementById('fname').value
let lastName = document.getElementById('lname').value
let emailaddress = document.getElementById('email').value
let complaint = document.getElementById('message').value

//function to stop user entering from entering numbers/special characters
function onlyLetters(char)
{
  let re = /[^a-z]/gi;
  char.value = char.value.replace(re, "");
}

//function to validate email
function validateEmail(mail)
{
  let re = /\S+@\S+\.\S+/;
  //alert(re.test(mail));      //for testing purposes
  //alert("Correct format: test@example.com");
  return re.test(mail);
}

function validateForm()
{
  //grab user entries from the form and store in variables
  let firstName = document.getElementById('fname').value
  let lastName = document.getElementById('lname').value
  let emailaddress = document.getElementById('email').value
  let complaint = document.getElementById('message').value
  let email_syntax = validateEmail(emailaddress)
  //check input details - give user some interactive feedback if incorrect
  
  if (firstName == "") 
  {
    alert("First name must be entered!");
    return false;
  }
  else if (lastName == "")
  {
    alert("Last name must be entered!");
    return false;
  }
  else if (emailaddress == "")
  {
    alert("Email must be entered!");
    return false;
  }
  else if (email_syntax == false)
  {
    alert("Invalid Email");
    alert("Correct format: test@example.com");
    return false;
  }
  else
  {
    console.log("Form True");
    return true;
  }
}
  
  //insert records into database
function insertRecord()
{
  //get result of validation
  let result = validateForm();

  if (result == true)
  {
    alert("Form Submitted");
  
    //get info from first name box
    let fN = document.getElementById("fname");
    let fNValue = fN.value;
    fN.value = "";
    
    //get info from last name box
    let lN = document.getElementById("lname");
    let lNValue = lN.value;
    lN.value = "";
    
    //get info from email input box
    let emailField = document.getElementById("email");
    let emailFieldValue = emailField.value;
    emailField.value = "";
    
    
    //get query from text area
    let enquiry = document.getElementById("message");
    let enquiryValue = enquiry.value;
    enquiry.value = "";
     
    //get ready to push the data into firebase
    let fb_data = myDBCxn.push();
  
    //put data you want to send in JSON form (Firebase Structure)
    client_data = {
      fName: fNValue,
      lName: lNValue,
      email: emailFieldValue,
      enquiry: enquiryValue,
    }
    
    //write data to firebase using the set method
    fb_data.set(client_data);
    
    
    //write data to firebase using the set method
    
    //once data has been submitted, focus cursor in the first name box
    fN.focus();

    //move to feedback submission page
    //window.location ='feedback_sub.html';
    window.location.assign('index.html');
  }
}