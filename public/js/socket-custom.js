var socket = io();

// Escuchar sucesos
socket.on('connect', function() {
    console.log(`Conectado al servidor`);
});

socket.on('disconnect', function() {
    console.log(`Conexión perdida con el servidor`);
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: "Hair",
    mensaje: "Hola Mundo!"
}, function(resp) {
    console.log(`Respuesta server: `, resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(data) {
    console.log(`Servidor:`, data);
});