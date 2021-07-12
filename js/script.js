const gatsby = new Book(`The Great Gatsby`, `F Scott Fitzgerald`, 255, `yes`);
const madame = new Book(`Madame Bovary`, `Gustave Flaubert`, 368, `no`);
const meta = new Book(`The Metamorphosis`, `Franz Kafka`, 250, `yes`);
const psycho = new Book(`American Psycho`, `Bret Easton Ellis`, 399, `no`);

let myLibrary = [gatsby, madame, meta, psycho];

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

function addBookToLibrary(library) {
    let title = window.prompt("Please enter the title of your new book.");
    let author = window.prompt("Please enter the author.");
    let pages = parseInt(window.prompt("Please enter the number of pages."));
    let read = window.prompt("Have you read this book before?");
    let book = new Book(title, author, pages, read);
    library.push(book);
    //displayBooks(library, body);
    return book
};

function elementBuilder (elType, className, parent) {
    const newElement = document.createElement(elType);
    newElement.classList.add(className);
    parent.appendChild(newElement);
    return newElement;
};

function displayBooks(library, parent) {
    let libraryElement = elementBuilder("section", "library", parent);
    let libraryHead = elementBuilder("h1", "library-head", libraryElement);
    let headContent = document.createTextNode(`My Library`);
    libraryHead.appendChild(headContent);

    for (i = 0; i < library.length; i++) {
        let card = elementBuilder("article", `book-${[i + 1]}`, libraryElement);
        let titleElement = elementBuilder("h2", "title", card);
        let titleContent = document.createTextNode(library[i].title);
        titleElement.appendChild(titleContent);

        let authorElement = elementBuilder("p", "author", card);
        let authorContent = document.createTextNode(library[i].author);
        authorElement.appendChild(authorContent);

        let pageElement = elementBuilder("p", "pages", card);
        let pageContent = document.createTextNode(`${library[i].pages}`);
        pageElement.appendChild(pageContent);

        let readElement = elementBuilder("p", "read", card);
        let readContent = document.createTextNode(library[i].read);
        readElement.appendChild(readContent);

    };
};

const body = document.getElementsByTagName("body")[0];

