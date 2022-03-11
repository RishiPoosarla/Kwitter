//YOUR FIREBASE LINKS
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
     room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message1 = message_data['message'];
like1 = message_data['like'];
name_with_tag = "<h4>" + name1 + "<img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>" + message1 + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value = " + like1 + " onclick = 'updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like1 +" </span> </button>";
row = name_with_tag + message_with_tag + like_button + span_with_tag; 
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
function updateLike(message_id){
      console.log("Clicked on like button: " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
      like: updated_likes
      });
}