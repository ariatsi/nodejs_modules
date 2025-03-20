const fs = require('fs');
const rs = fs.createReadStream('./demofile.txt');

// Lorsque le fichier est ouvert
rs.on('open', () => {
    console.log('Le fichier est ouvert.');
});

// Lorsque des données sont lues
rs.on('data', (chunk) => {
    console.log('Données lues:', chunk.toString());
});

// Lorsque la lecture est terminée
rs.on('end', () => {
    console.log('Fin de la lecture.');
});

// En cas d'erreur
rs.on('error', (err) => {
    console.error('Erreur lors de la lecture du fichier:', err);
});



/*
const EventEmitter = require('events');

// Création d'une instance de EventEmitter
const myEmitter = new EventEmitter();

// Enregistrer un listener pour l'événement 'greet'
myEmitter.on('greet', () => {
    console.log('Hello there!');
});

// Émettre l'événement 'greet'
myEmitter.emit('greet');

*/


const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Enregistrer un listener qui prend deux arguments
myEmitter.on('userAction', (username, action) => {
    console.log(`${username} performed ${action}`);
});

// Émettre l'événement 'userAction' avec des arguments
myEmitter.emit('userAction', 'Alice', 'login');




const fs = require('fs');
const rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
    console.log('The file is open');
});




const events = require('events');
const eventEmitter = new events.EventEmitter();

// Exemple : affecter un gestionnaire pour l'événement "scream"
eventEmitter.on('scream', () => {
    console.log('Aaaaah!');
});

// Déclencher l'événement "scream"
eventEmitter.emit('scream');

