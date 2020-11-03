//importa le librerie
const express = require('express');
const path = require('path');
const http = require('http');
const app= express();

var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors());


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


//metodo modificato per mandare un JSON
app.get('/ciaoMondo', (req, res) => {
    var jsonData = {"risText" : ["messaggio : CIAO MONDO ", "Hello"]};                 //dichiaro oggetto JSON
    res.setHeader('Content-Type', 'application/json');                       //inserisco nel header della risposta Http il formato dei dati
    res.send(JSON.stringify(jsonData));                                      //trasformo i dati in stringa e li mando al client
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
   res.send('app works!');  
   //res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port', port);

//Listen on provided port, on all network interfaces.
app.listen(port,  () => {console.log('Example app listening on port 3000!');});