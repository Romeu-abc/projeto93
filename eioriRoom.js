
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDW19wda6KfMYNulU92UWEgZMAPOi11DkE",
  authDomain: "eiori-2b4ec.firebaseapp.com",
  databaseURL: "https://eiori-2b4ec-default-rtdb.firebaseio.com",
  projectId: "eiori-2b4ec",
  storageBucket: "eiori-2b4ec.appspot.com",
  messagingSenderId: "117065895088",
  appId: "1:117065895088:web:9837a34185ab161208bf75"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "eioriPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "eioriPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
