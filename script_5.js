//------------------------------------
// Exercice 6 _ Bibliothécaire
//------------------------------------

const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Pr jug s', id: 873495, rented: 67 },
    { title: 'Les fr res Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les for ts de Sib rie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mang  mon p re', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
    ];

//Est-ce que tous les livres ont  t  au moins emprunt s une fois ?
rentedOnce = books.map(books => books.rented !== 0)
console.log(rentedOnce)

rented = true
for(i = 0; i < books.length; i++) {
    if(books[i].rented == 0) {
        rent = false
    }
}
if(rented)
    console.log("Each book has been rented at least once.")
else console.log("Some books haven't been rented yet.")



//Quel est livre le plus emprunt  ?
function mostRented( a, b ) {
    if(a.rented > b.rented)
        return -1
    else if(a.rented > b.rented)
        return 1
    else
        return 0
}
books.sort(mostRented);
console.log("The most rented book si this one :" +`${books[0].title}`)



//Quel est le livre le moins emprunt  ?
function lessRented( a, b ) {
    if(a.rented < b.rented)
        return -1
    else if(a.rented > b.rented)
        return 1
    else
        return 0
}
books.sort(lessRented);
console.log("The less rented book si this one :" +`${books[0].title}`)



//Trouve le livre avec l'ID  873495 ;
function findBookById(books) {
    return books.id == 873495;
}
bookFound = books.find(findBookById)
console.log(bookFound)



//Supprime le livre avec l'ID  133712 ;


//Trie les livres par ordre alphab tique (sans celui avec l'ID 133712 car il est supprim ).