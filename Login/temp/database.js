
var output = document.getElementById('a');

const firebaseConfig = {
    apiKey: "AIzaSyAjn6BX6RDYNgcH57erYyZTw_iQ8NnyPIg",
    authDomain: "real-estate-e1ba2.firebaseapp.com",
    databaseURL: "https://real-estate-e1ba2-default-rtdb.firebaseio.com",
    projectId: "real-estate-e1ba2",
    storageBucket: "real-estate-e1ba2.appspot.com",
    messagingSenderId: "980117749137",
    appId: "1:980117749137:web:a2e8032f53e301ca0eae30",
    measurementId: "G-HNR1Y4SZHD"
  };

  firebase.initializeApp(firebaseConfig);
 
  var database = firebase.database();

  output.innerHTML=database;
  console.log(database);

  var user = document.getElementById('username');
  const name = document.getElementById("name");
  const number = document.getElementById("contact");


  function adddata(){
     let n = name.value;
     let u = user.value;
     let c = number.value;
     console.log(n,u,c);

     create(n,u,c);



  }



  function create(n,u,c){
    database.ref("trials/" + u ).set({
      name: n,
      contact : c
    })
    console.log("User Added");
  }



  function showalldata(){
    database.ref("trials").on('value', function(snapshot){
      snapshot.forEach(childsnapshot =>{
        var child = childsnapshot.val();
        if (child.name == "Pranav Patil"){
          console.log(child.name)
        }
        else{
          console.log(child)
        }
       
      })
      // var data = snapshot.val();
      // console.log(data);
    })
  }



  function updatedata(){
     let info = "Changed";

     let username = name.value;

     database.ref("trials/" + username).update({name : info})
  }