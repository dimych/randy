
// key - value
// property/field

const book1 = {
  id: 1,
  name: "titanic",
  returnDate: 2011,
  currentHolder: "thomas",
};

const book2 = {
  id: 2,
  name: "titanic 2",
  returnDate: 2012,
  currentHolder: "john",
};

const library = [{}, {}, {}, {}, book1, book2];

let foundBook = null; // []
for (let i = 0; i < library.length; i++) {
    if (library[i].name === 'titanic 2') {
       foundBook = library[i]
        // console.log(library[i])
    }
}
if (foundBook === null) {
    console.log('Book not found!')
} else {
    console.log(foundBook)
}
// mainUserOfLibrary -> libraryMainUser


// 1. list of tracks
// 2. find tracks by name
 // shouldn't use filter method
 // tit -> titanic 1, titanic 2, titan
// 3. type search term inside input and run our function by button click
// 4. simple case - result should be in console.log
// 5. more difficult case - result should be in <div> 