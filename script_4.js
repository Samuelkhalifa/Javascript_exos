//------------------------------------
// Exercice 5 _ Startup Nation
//------------------------------------

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
    ];

//Filtre dans cette liste les entrepreneurs qui sont n s dans les ann es 70 ;
bornAfter1969 = entrepreneurs.filter(entrepreneurs => entrepreneurs.year > 1969)
bornIn70s = bornAfter1969.filter(entrepreneurs => entrepreneurs.year < 1980)
console.log(bornIn70s)
            /*COMMENTAIRES :
                Pourquoi devoir faire l'operation en deux fois ? La fonction filter n'opère qu'avec une seule condition
                Donc faire la fois > 1969 et < 1980 n'est pas possible ...
                */




//Sors une array qui contient le prenom et le nom des entrepreneurs ;
firstAndLastNames = entrepreneurs.map(entrepreneurs => `${entrepreneurs.first} ${entrepreneurs.last}`)
console.log(firstAndLastNames)




//Quel age aurait chaque inventeur aujourd'hui ?
currentYear = 2022
birthYears = entrepreneurs.map(entrepreneurs => entrepreneurs.year)
for(i = 0; i < birthYears.length; i++) 
    console.log(`${entrepreneurs[i].first} ${entrepreneurs[i].last}` + " : age en 2022 => " + `${currentYear - birthYears[i]}` + " ans")



//Trie les entrepreneurs par ordre alphab tique du nom de famille.
function compare( a, b ) {
    if(a.last < b.last)
        return -1
    else if(a.last > b.last)
        return 1
    else
        return 0
}

entrepreneurs.sort(compare)
console.log(entrepreneurs)
