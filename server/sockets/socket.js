const { io } = require('../server');

io.on('connection', (client) => {
    console.log(`Cliente conectado`);

    client.emit('enviarMensaje', {
        nombre: 'Admin',
        mensaje: 'Bienvenido a fundamentos de sockets'
    });

    client.on('disconnect', () => {
        console.log(`Usuario desconectado`);
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.emit('enviarMensaje', data);

        // if (data.usuario) {
        //     callback({
        //         resp: 'Todo salio bien.'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal!!!!!.'
        //     });
        // }
    });

});