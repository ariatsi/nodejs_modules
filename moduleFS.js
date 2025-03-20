const fs = require('fs');

fs.writeFile('example.txt', 'Hello, world!', (err) => {
    if (err) {
        console.error('Erreur lors de l\'écriture du fichier:', err);
        return;
    }
    console.log('File written successfully!');
});



//const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier:', err);
        return;
    }
    console.log('File content:', data);
});


//const fs = require('fs');

fs.appendFile('example.txt', '\nAppended text!', (err) => {
    if (err) {
        console.error('Erreur lors de l\'ajout au fichier:', err);
        return;
    }
    console.log('Content appended successfully!');
});


//const fs = require('fs');

fs.unlink('example.txt', (err) => {
    if (err) {
        console.error('Erreur lors de la suppression du fichier:', err);
        return;
    }
    console.log('File deleted successfully!');
});


const fs = require('fs');

// Ouvrir le fichier 'example.txt' en mode lecture ('r')
fs.open('example.txt', 'r', (err, fd) => {
    if (err) {
        console.error('Erreur lors de l\'ouverture du fichier:', err);
        return;
    }
    console.log('File opened successfully, file descriptor:', fd);

    // N'oubliez pas de fermer le fichier après utilisation
    fs.close(fd, (err) => {
        if (err) {
            console.error('Erreur lors de la fermeture du fichier:', err);
            return;
        }
        console.log('File closed successfully!');
    });
});
