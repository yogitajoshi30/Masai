const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

    addBook(book) {
        if (!book || typeof book !== "object") {
            console.log("Invalid book entry.");
            return false;
        }

        const { title, author, year } = book;
        if (!title || !author || !year) {
            console.log("Book information is incomplete.");
            return false;
        }

        this.books.push({ title, author, year });
        console.log(`Book "${title}" added successfully.`);
        return true;
    },

    findBookByTitle(title) {
        if (!title) {
            console.log("Please provide a title.");
            return null;
        }

        return this.books.find(book => book.title === title) || "Book not found.";
    },

    removeBook(title) {
        if (!title) {
            console.log("Please provide a title to remove.");
            return false;
        }

        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Book is removed successfully.`);
            return true;
        } else {
            console.log("Book not found.");
            return false;
        }
    }
};


library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
console.log(library.books.length);

console.log(library.findBookByTitle("The Hobbit"));

library.removeBook("1984");
console.log(library.books.length);


