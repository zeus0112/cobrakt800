const firebaseConfig = {
      apiKey: "AIzaSyBWy_iA9g76BuMF9flZFhsoZ6vSV_fk0Zg",
      authDomain: "cobrat800-ce075.firebaseapp.com",
      projectId: "cobrat800-ce075",
      storageBucket: "cobrat800-ce075.appspot.com",
      messagingSenderId: "833804897235",
      appId: "1:833804897235:web:ba837ff0b9725dbf163d26"
    };

    const app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
