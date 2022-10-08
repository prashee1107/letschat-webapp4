var firebaseConfig = {
    apiKey: "AIzaSyCWm_VoIkMBqA109GfiTLST_NOKSl3H9G8",
    authDomain: "letschat-web-app-86f33.firebaseapp.com",
    databaseURL: "https://letschat-web-app-86f33-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-86f33",
    storageBucket: "letschat-web-app-86f33.appspot.com",
    messagingSenderId: "833327235583",
    appId: "1:833327235583:web:a116d2af4321f162c667ca"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name= localStorage.getItem("user_name");
var room_name= localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
       });
 }