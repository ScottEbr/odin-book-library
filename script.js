const title = document.getElementById("title");
const author = document.getElementById("author");
const status = document.getElementById("status");
const submitBtn = document.querySelector(".submit-btn");

const DEFAULT_DATA = [{ title: "The Art of War", author: "Sun Tzu", status: "Read" }];

function saveData() {
    validateTitle()
    validateAuthor()

}

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
        return;
    }

}

function validateAuthor() {
    const value = author.value.trim();
    
    if (value.length === 0) {
        errorHandle(author, "* Author is required.");
        return;
    }

}