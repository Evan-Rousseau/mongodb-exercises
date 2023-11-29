db.createCollection('utilisateurs')
db.createCollection('restaurants')
db.createCollection('produits')
db.createCollection('commandes')


db.utilisateurs.insertMany([
    { UserID: 1, Nom: 'Dupont', Prénom: 'Jean', Adresse: '123 Rue de la République', NumTel: '0123456789', AdresseMail: 'jean.dupont@email.com' },
    { UserID: 2, Nom: 'Martin', Prénom: 'Marie', Adresse: '456 Avenue des Fleurs', NumTel: '0987654321', AdresseMail: 'marie.martin@email.com' },
    { UserID: 3, Nom: 'Martin', Prénom: 'Claude', Adresse: '456 Avenue des Fleurs', NumTel: '0987654321', AdresseMail: 'claude.martin@email.com' },
])

db.restaurants.insertMany([
    { RestaurantID: 101, NomResto: 'Chez Paul', Adresse: '789 Boulevard des Gourmets', NumTel: '1112223333', TypeCuisine: 'Française', Heures: '10:00 - 22:00' },
    { RestaurantID: 102, NomResto: 'Sushi Express', Adresse: '234 Rue des Sushis', NumTel: '4445556666', TypeCuisine: 'Japonaise', Heures: '11:00 - 23:00' },
])

db.produits.insertMany([
    { ProductID: 201, NomProduit: 'Boeuf Bourguignon', Description: 'Plat traditionnel français', Prix: 15.99, RestaurantID: 101 },
    { ProductID: 202, NomProduit: 'Sashimi Mix', Description: 'Assortiment de sashimis', Prix: 20.99, RestaurantID: 102 },
])

db.commandes.insertMany([
    { OrderID: 301, UserID: 1, DateComm: new ISODate('2023-01-15T12:30:00'), Statut: 'En cours' },
    { OrderID: 302, UserID: 2, DateComm: new ISODate('2023-01-16T18:45:00'), Statut: 'Livrée' },
])