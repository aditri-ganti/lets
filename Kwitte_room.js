const firebaseConfig = {
    apiKey: "AIzaSyD7rJxirgRD42b5ves55ec9xZHRHhyNtEI",
    authDomain: "lets-chat-850f9.firebaseapp.com",
    projectId: "lets-chat-850f9",
    storageBucket: "lets-chat-850f9.appspot.com",
    messagingSenderId: "992620710840",
    appId: "1:992620710840:web:1436733896efbc0fa39d4d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome" + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
console.log("room name-"+Room_names);
    
    });});}
getData();

function addroom(){
    Room_names=document.getElementById("Room_names");
    firebase.database().ref("/").child("Room_names").update({purpose: "adding room name"});
    localStorage.setItem("Room_names",Room_names);
    window.location="kwitter_rooom.html"
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("Room_names",name);
    window.location = "kwitter_room.html";
}







