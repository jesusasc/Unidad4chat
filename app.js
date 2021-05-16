 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBKwyEeBugVhkxP3BucqA5tLhgTXDiGLQI",
  authDomain: "unidad4-f16b8.firebaseapp.com",
  projectId: "unidad4-f16b8",
  storageBucket: "unidad4-f16b8.appspot.com",
  messagingSenderId: "15322318418",
  appId: "1:15322318418:web:3cda0d84f11236f7d3818b"

  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //obtener datos del html

  
  var txtUsuario = document.getElementById("usuario");
  var txtMensaje = document.getElementById("mensaje");
  var btnEnviar = document.getElementById("btnenviar");
  var chatlista = document.getElementById("chatlista");

  //Ejecutar accion en el boton
  btnEnviar.addEventListener("click",function(){
    var usuario = txtUsuario.value;
    var mensaje = txtMensaje.value;
    var html = "<li>"+usuario+" dice: "+mensaje+"</li>";

    chatlista.innerHTML += html;

    firebase.database().ref('chat').push({
        user: usuario,
        message: mensaje
    })
  });

  /*Mostrar datos*/
  firebase.database().ref('chat').on('value', (snapshot) => {
    var html1 = '';
    //console.log(snapshot.val());
    snapshot.forEach(function (e){
      var elemento = e.val();
      var usuario1 = elemento.user;
      var mensaje1 = elemento.message;
      html1 += '<div class="chat-bubble"><div class="chat-bubble-arrow-border"></div><div class="chat-bubble-arrow"></div><h5>'+usuario1+" dice: "+mensaje1+"</h5></div>";
        
    });
    chatlista.innerHTML = html1;
  })