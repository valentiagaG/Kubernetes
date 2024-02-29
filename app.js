// app.js
const express = require('express');
const app = express();
// Usa la variable de entorno PORT o el valor predeterminado 8080 si PORT no está definido
const port = process.env.PORT || 8080;
let counter = 0;

app.get('/', (req, res) => {
    res.send('Bienvenido al servicio de healthcheck. Accede a /healthcheck para ver el estado.');
});

app.get('/healthcheck', (req, res) => {
    counter = counter + 1;
    if(counter < 3){
        console.log('Healthcheck funciona: ' + counter);
        res.status(200).json({ status: true });
    } else {
        res.status(500).json({ status: false });
        // counter = 0;
        console.log('Fallo');
    }
});

app.get('/readiness', (req, res) => {
    console.log('Readiness probe llamado');
    res.status(200).json({ status: 'ready' });
});

app.listen(port, () => {
    console.log(`Healthcheck service listening at http://localhost:${port}`);
}); 