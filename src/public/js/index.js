const socket = io();

socket.on("chat", (data) => {
  if(data){
  console.log(data)
  for (mensaje of data) {
    let ul = document.getElementById("chat");
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = `<strong style='color: blue'>${mensaje.email}</strong> ${mensaje.time} <em style='color: green'>${mensaje.mensaje}</em>`;
}  } else {
  let ul = document.getElementById("chat");
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = `<strong style='color: blue'>No hay mensajes para mostrar</em>`;
}
});

socket.on("newChat", (mensaje) => {
  let ul = document.getElementById("chat");
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = `<strong style='color: blue'>${mensaje.email}</strong> ${mensaje.time} <em style='color: green'>${mensaje.mensaje}</em>`;
  document.getElementById("email").value = "";
  document.getElementById("mensaje").value = "";
});

function sendMsg() {
  console.log('entre en la funcion')
  let emailInput = document.getElementById("email").value;
  if (emailInput == "" || emailInput == null) {
    alert("El campo email es requerido");
  } else {
    let mensajeInput = document.getElementById("mensaje").value;
    let mensaje = {
      email: emailInput,
      mensaje: mensajeInput,
    };
    socket.emit("newMensaje", mensaje);
  }
}

const url = 'http://localhost:8080/productos';

function getData () {fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(myJson){
  for (producto of myJson) {
      let ul = document.getElementById("productos");
      let li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = `ID: ${producto.id} - Title: ${producto.title} - Price: ${producto.price} - Thumbnail: ${producto.thumbnail}`;
 }}
);
}
/*
const getData = async () => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    const data = response.json();
    console.log('responseee', data );
    for (producto of data) {
        let ul = document.getElementById("productos");
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = `ID: ${producto.id} - Title: ${producto.title} - Price: ${producto.price} - Thumbnail: ${producto.thumbnail}`;
    }
*/
