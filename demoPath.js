// demoPath.js
const path = require('path');

// Joindre plusieurs segments pour créer un chemin
const fullPath = path.join(__dirname, 'folder', 'file.txt');
console.log('Chemin complet:', fullPath);

// Extraire l'extension d'un fichier
const ext = path.extname(fullPath);
console.log('Extension du fichier:', ext);

// Normaliser un chemin (pour éliminer les parties inutiles)
const messyPath = 'folder//subfolder/../file.txt';
const normalizedPath = path.normalize(messyPath);
console.log('Chemin normalisé:', normalizedPath);

// Obtenir le nom du fichier à partir d'un chemin complet
const baseName = path.basename(fullPath);
console.log('Nom du fichier:', baseName);


// path.resolve(...paths)
// Construit un chemin absolu en résolvant une séquence de chemins ou segments.
const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
console.log('Chemin absolu:', absolutePath);


// path.relative(from, to)
// Calcule le chemin relatif entre deux chemins absolus.
const fromPath = '/home/user/docs';
const toPath = '/home/user/images/photo.jpg';
const relativePath = path.relative(fromPath, toPath);
console.log('Chemin relatif:', relativePath);

// path.parse(pathString)
// Analyse un chemin et retourne un objet avec des propriétés
// telles que root, dir, base, ext et name.
const parsed = path.parse('/home/user/docs/file.txt');
console.log('Analyse du chemin:', parsed);


// path.format(pathObject)
// Fait l'inverse de path.parse : il retourne un chemin à partir d'un objet
// ayant des propriétés comme dir, base, etc.
const formattedPath = path.format({
    dir: '/home/user/docs',
    base: 'file.txt'
});
console.log('Chemin formaté:', formattedPath);

// path.sep - C'est le séparateur de chemin spécifique à la plateforme
// (par exemple / sur Linux/macOS et \ sur Windows).
console.log('Séparateur de chemin:', path.sep);

// path.delimiter - Le délimiteur de chemin (pour les variables d'environnement,
// par exemple : sur Linux/macOS et ; sur Windows).
console.log('Délimiteur de chemin:', path.delimiter);