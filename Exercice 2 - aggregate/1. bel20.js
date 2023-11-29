

//Donner par action le cours de clôture moyen, le cours de clôture minimum, le cours de clôture maximum et le nombre moyen d'actions négociées par jour.
db.bel20.aggregate( [
    {
        $group: { _id: '$name', avgClosing : { $avg: '$price.end'}, minClosing : { $min: '$price.end'}, maxClosing : { $max: '$price.end'}, avgTransPerDay: { $avg: '$number'}}
    }
])


//Indiquez par action le cours minimum de clôture et la semaine au cours de laquelle ce cours minimum de clôture est survenu. E.g.
//KBC: minprice = 39.1 ; week = 44
//Elia: minprice = 33.38 ; week = 46
db.bel20.aggregate( [
    {
        $group: { _id: '$name', avgCsing : { $avg: '$price.end'}, minClosing : { $min: '$price.end'}, maxClosing : { $max: '$price.end'}, avgTransPerDay: { $avg: '$number'}}
    }
])
