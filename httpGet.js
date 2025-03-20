const http = require('http');

// Effectuer une requête GET en utilisant http.get
http.get('http://jsonplaceholder.typicode.com/todos/1', (res) => {
    let data = '';

    console.log(`Statut de la réponse : ${res.statusCode}`);

    // Accumuler les données reçues
    res.on('data', (chunk) => {
        data += chunk;
    });

    // Lorsque la réponse est terminée
    res.on('end', () => {
        console.log('Données reçues :', data);
    });
}).on('error', (error) => {
    console.error('Erreur lors de la requête GET :', error);
});
