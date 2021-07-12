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
    this.changeReadStatus = function() {
      if (this.read === `no`) {
        this.read = 'yes';
      } else if (this.read === `yes`) {
        this.read = 'no';
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

function removeFromLibrary(title, library){
  for (i = 0; i < library.length; i++) {
    if (library[i].title === title) {
      library.splice(i, 1);
    };
  };
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

    let addButton = elementBuilder("button", "add-book", libraryElement);
    let addButtonContent = document.createTextNode(`Add Book to Library`);
    addButton.appendChild(addButtonContent);

    addButton.addEventListener('click', () => {
      addBookToLibrary(library);
      libraryElement.remove();
      return displayBooks(library, parent);
    });

    let books = elementBuilder("div", "books", libraryElement);

    for (i = 0; i < library.length; i++) {
        let book = library[i];
        let title = library[i].title;

        let card = elementBuilder("article", "book", books);
        let titleElement = elementBuilder("h2", "title", card);
        let titleContent = document.createTextNode(library[i].title);
        titleElement.appendChild(titleContent);

        let authorElement = elementBuilder("p", "author", card);
        let authorContent = document.createTextNode(`Author: ${library[i].author}`);
        authorElement.appendChild(authorContent);

        let pageElement = elementBuilder("p", "pages", card);
        let pageContent = document.createTextNode(`Number of Pages: ${library[i].pages}`);
        pageElement.appendChild(pageContent);

        let readElement = elementBuilder("p", "read", card);
        let readContent = document.createTextNode(`Read: ${library[i].read}`);
        readElement.appendChild(readContent);

        let buttonDiv = elementBuilder("div", "book-buttons", card)
        let readButton = elementBuilder("button", "read-status", buttonDiv);
        let readButtonContent = document.createTextNode(`Change Read Status`);
        readButton.appendChild(readButtonContent);

        readButton.addEventListener('click', () => {
          book.changeReadStatus();
          libraryElement.remove();
          return displayBooks(library, parent);
        });

        let removeButton = elementBuilder("button", "remove-book", buttonDiv);
        let removeButtonContent = document.createTextNode(`Remove From Library`);
        removeButton.appendChild(removeButtonContent);

        removeButton.addEventListener('click', () => {
          removeFromLibrary(title, library);
          libraryElement.remove();
          return displayBooks(library, parent);
        });
    };
};

const body = document.getElementsByTagName("body")[0];

displayBooks(myLibrary, body);

