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
    room_name = localStorage.getItem("room_name");



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['name'];
         like = message_data['like'];
         name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>"
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button ="<button class+'btn-btn-warning'id="+firebase_message_id+"value"+like+" onclick='updateLike(this.id)>'";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+"</span></button><hr>";
         
         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML + = row;




        



      } });  }); }
getData();


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref("room_name").push({
           name:user_name,
           message:msg
           like:0 
      });
      document.getElementById("msg").value = ""

}
function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_idl;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : update_likes
      });

}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}