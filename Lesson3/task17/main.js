// #reLkOkTB29Q
// створити масив книжок (назва, кількість сторінок, автори, жанри).


let books = [
    {
        title: "To Kill a Mockingbird",
        pages: 281,
        authors: ["Harper Lee"],
        genres: ["Fiction", "Southern Gothic"]
    },
    {
        title: "1984",
        pages: 328,
        authors: ["George Orwell"],
        genres: ["Dystopian", "Political Fiction", "Science Fiction"]
    },
    {
        title: "The Great Gatsby",
        pages: 180,
        authors: ["F. Scott Fitzgerald"],
        genres: ["Tragedy", "Fiction"]
    },
    {
        title: "The Hobbit",
        pages: 310,
        authors: ["J.R.R. Tolkien"],
        genres: ["Fantasy", "Adventure"]
    },
    {
        title: "Pride and Prejudice",
        pages: 432,
        authors: ["Jane Austen"],
        genres: ["Romance", "Fiction"]
    },
    {
        title: "The Catcher in the Rye",
        pages: 214,
        authors: ["J.D. Salinger"],
        genres: ["Fiction", "Coming-of-Age"]
    },
    {
        title: "Good Omens",
        pages: 412,
        authors: ["Terry Pratchett", "Neil Gaiman"],
        genres: ["Fantasy", "Apocalyptic"]
    },
    {
        title: "The Name of the Wind",
        pages: 662,
        authors: ["Patrick Rothfuss"],
        genres: ["Fantasy", "Adventure"]
    },
    {
        title: "The Martian",
        pages: 369,
        authors: ["Andy Weir"],
        genres: ["Science Fiction", "Adventure"]
    },
    {
        title: "The Night Circus",
        pages: 516,
        authors: ["Erin Morgenstern"],
        genres: ["Fantasy", "Romance"]
    }
];

// – знайти найбільшу книжку.

let largestBook = books[0];

for (let book of books) {
    if (book.pages > largestBook.pages){
        largestBook = book;
    }
}
console.log(largestBook);

// – знайти книжку/ки з найбільшою кількістю жанрів

let mostGenres = books[0];
for (let book of books) {
    if (book.genres.length > mostGenres.genres.length) {
        mostGenres = book;
    }
}
console.log(mostGenres);

// – знайти книжку/ки з найдовшою назвою

let longestNameBook = books[0];
for (let book of books) {
    if (book.title.length > longestNameBook.title.length) {
        longestNameBook = book;
    }
}
console.log(longestNameBook);


// – знайти книжку/ки, які писали 2 автори

for (let book of books) {
    if (book.authors.length === 2) {
        console.log(book);
    }
}

// – знайти книжку/ки, які писав 1 автор

for (let book of books) {
    if (book.authors.length === 1) {
        console.log(book);
    }
}
