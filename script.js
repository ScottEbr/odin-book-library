const title = document.getElementById("title");
const author = document.getElementById("author");
const readStat = document.getElementById("status");
const submitBtn = document.querySelector(".submit-btn");
const tableBody = document.getElementById("table-body")
const library = [];

const DEFAULT_DATA = { title: "The Art of War", author: "Sun Tzu", readStat: "Read" };
library.unshift(DEFAULT_DATA);
console.log(library)
renderLibrary()

submitBtn.addEventListener("click", (e) => {

    let valid = true;

    if (!validateTitle()) valid = false;
    if (!validateAuthor()) valid = false;

    if (!valid) return;

    // if form inputs are valid, then code below executes

    const newBook = new SaveData(title.value, author.value, readStat.value);

    library.unshift(newBook);
    renderLibrary()

});


function SaveData(title, author, readStat) {
    this.title = title;
    this.author = author;
    this.readStat = readStat;
}

function renderLibrary() {
    tableBody.innerHTML = "";

    library.forEach((book, index) => {
        const row = document.createElement("tr");

        row.innerHTML= `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.readStat}</td>
            <td>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);


    });
}

tableBody.addEventListener("click", (e) => {
    if (!e.target.classList.contains("delete-btn")) return;

    const index = Number(e.target.dataset.index);
    const bookTitle = library[index].title;

    const confirmed = confirm(`Are you sure you want to delete "${bookTitle}"?`);
    if (!confirmed) return;

    library.splice(index, 1);
    renderLibrary();
});


function getErrorDiv(input) {
    return input.parentElement.nextElementSibling;
}

function errorHandle(input, message) {
    input.setCustomValidity(message); 
    getErrorDiv(input).textContent = message;
}

function clearError(input, message) {
    input.setCustomValidity(""); 
    getErrorDiv(input).textContent = "";
}

title.addEventListener("focus", () => clearError(title));
author.addEventListener("focus", () => clearError(author));


function validateTitle() {
    const value = title.value.trim();
    
    if (value.length === 0) {
        errorHandle(title, "* Title is required.");
        return false;
    }

    return true;

}

function validateAuthor() {
    const value = author.value.trim();
    
    if (value.length === 0) {
        errorHandle(author, "* Author is required.");
        return false;
    }

    return true;

}

