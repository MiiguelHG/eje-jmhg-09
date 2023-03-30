//Declaraciones
const servidorHTTP = require('express');
const app = servidorHTTP();
const port = process.env.PORT || 3000;

//configuraciones - Respuestas para el cliente (Crome, Firefox, Edge, Opera)
/*app.get == solicitamos un recurso del servidor(registro, imagen, archivo, etc)
app.post == creamos un recuro en el servidor
app.delet == eliminamos un recurso del servidor
app.put == actualizamos un registro del servidor*/

app.get("/", (req, res) => {
    res.send('Pagina principal. Servidor en Node.js con express');
});

app.get('*', (req,res) =>{
    res.send('404 | Pagina no encontrada');
});

//Procesos - Respuestas para el desarrollador
app.listen(port, () =>{
    console.log('Servidor corriendo en el puerto', port);
});