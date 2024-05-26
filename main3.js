user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")

// Your web app's Firebase configuration
//YOUR FIRE BASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB7Jj50UcarVJuedR8YDEWtw1PQneC9gBQ",
      authDomain: "kwitter-60ad6.firebaseapp.com",
      databaseURL: "https://kwitter-60ad6-default-rtdb.firebaseio.com",
      projectId: "kwitter-60ad6",
      storageBucket: "kwitter-60ad6.appspot.com",
      messagingSenderId: "267786226055",
      appId: "1:267786226055:web:33636c3a7b8a247e0beb22"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 function back(){
  window.location = "kwitter_room.html";
 }

 function send(){

//take the value of the text input from html-- document.getElementById('msg').value
 msg = document.getElementById('msg').value;

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }


    //Add the code for the logout button
    function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }
    
