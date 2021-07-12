const gatsby = new Book(`The Great Gatsby`, `F Scott Fitzgerald`, 255, `yes`);
const madame = new Book(`Madame Bovary`, `Gustave Flaubert`, 368, `no`);
const meta = new Book(`The Metamorphosis`, `Franz Kafka`, 250, `yes`);

let myLibrary = [gatsby, madame, meta];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      if (read === `no`) {
        let read = 'not yet read'
        return `${title} by ${author}, ${pages}, ${read}`
      } else if (read === `yes`) {
        let read = 'read';
        return `${title} by ${author}, ${pages}, ${read}`
      }
    }
};

function addBookToLibrary(book, library) {
    library.push(book);
};

function displayBooks(library) {
    for (i = 0; i < library.length; i++) {

    };
};