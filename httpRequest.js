const http = require('http');

// Options de la requête
const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 80,
    path: '/todos/1',
    method: 'GET', // Ici, nous utilisons la méthode GET
    headers: {
        'Content-Type': 'application/json'
    }
};

// Créer la requête
const req = http.request(options, (res) => {
    let data = '';

    console.log(`Statut de la réponse : ${res.statusCode}`);

    // Lorsque des données sont reçues
    res.on('data', (chunk) => {
        data += chunk;
    });

    // Lorsque la réponse est terminée
    res.on('end', () => {
        console.log('Données reçues :', data);
    });
});

// Gérer les erreurs éventuelles
req.on('error', (error) => {
    console.error('Erreur lors de la requête :', error);
});

// Finir la requête (dans ce cas, aucune donnée à envoyer pour une requête GET)
req.end();
