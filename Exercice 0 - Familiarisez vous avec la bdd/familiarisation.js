// 1 Quels sont les différents bases de données atteignable via cette connexion ? Quelle commande permet de les afficher?

db.adminCommand({listDatabases: 1})

// 2 Allez dans la BDD "exercices". Quelle commande permet de se déplacer à une nouvelle base de données. Que se passe-t-il si cette base n'existe pas ?

db = db.getSiblingDB('exercises') // use exercises
// Lorsque la bdd n'existe pas il créer une nouvelle bdd avec le nom donné

// 3 Quelles sont les différentes collections présentes dans cette BDD ? Quelle commande permet de les afficher.

db.runCommand({listCollections: 1, authorizedCollections: true, nameOnly: true})
// { name: 'cheeses', type: 'collection' },
// { name: 'irons', type: 'collection' },
// { name: 'bel20', type: 'collection' },
// { name: 'laptops', type: 'collection' }

// 4 Quelle est la commande nécessaire pour affichez la liste des documents d'une des collections.

db.cheeses.find() // db.collectionName.find()

// Vous allez maintenant changer de BDD pour pouvoir travailler sur vos propres documents.
// Pour cela, utilisez la commande la commande de la question 2 pour ouvrir la BDD qui porte les noms des membre de votre groupe.
db = db.getSiblingDB('group_7') // use group_7