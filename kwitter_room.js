const firebaseConfig = {
      apiKey: "AIzaSyCtP4MeP35aFd7FeEzgD5-BcBhkiYc6KfE",
      authDomain: "kwitter-3be02.firebaseapp.com",
      databaseURL: "https://kwitter-3be02-default-rtdb.firebaseio.com",
      projectId: "kwitter-3be02",
      storageBucket: "kwitter-3be02.appspot.com",
      messagingSenderId: "581607159224",
      appId: "1:581607159224:web:137ca4d1229d1e893c4b4d"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
           purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html"
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name"+Room_names);
row = "<div class="room_name" id="+ Room_names+"onclick="redirectToRoomName(this.id)">#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row 
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      window.location = "kwitter.html";
      localStorage.removeItem("room_name");
}