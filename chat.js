
var firebaseConfig = {
    apiKey: "AIzaSyA8Xk7pKmvHEdCyziBCThPT4YdlDQSxeUQ",
    authDomain: "kwitter-2f68c.firebaseapp.com",
    databaseURL: "https://kwitter-2f68c-default-rtdb.firebaseio.com",
    projectId: "kwitter-2f68c",
    storageBucket: "kwitter-2f68c.appspot.com",
    messagingSenderId: "406822268116",
    appId: "1:406822268116:web:72e9adc9fc1f72f47b5f41"
  };
  firebase.initializeApp(firebaseConfig);





function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



