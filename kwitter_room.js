function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC2Egr9RGKWi0JXFs6YEdAR-KuO4ndOVUE",
      authDomain: "kwitter-542df.firebaseapp.com",
      databaseURL: "https://kwitter-542df-default-rtdb.firebaseio.com",
      projectId: "kwitter-542df",
      storageBucket: "kwitter-542df.appspot.com",
      messagingSenderId: "758473993896",
      appId: "1:758473993896:web:aa4edc2341cbacc8eb5c9d"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room names:" + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Roomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}