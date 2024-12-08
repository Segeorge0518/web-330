/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author:
  Date:
  Filename: chefs.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  { name: "Gordon Ramsay", specialty: "Italian Cuisine", weakness: "Desserts", location: "London" },
  { name: "Julia Child", specialty: "French Cuisine", weakness: "Baking", location: "Paris" },
  { name: "Wolfgang Puck", specialty: "Fusion Cuisine", weakness: "Sushi", location: "Los Angeles" }
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() < 0.5 ? resolve(chefs[0]) : reject("Failed to retrieve Chef 1 data.");
    }, 2000);
});
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() < 0.5 ? resolve(chefs[1]) : reject("Failed to retrieve Chef 2 data.");
    }, 3000);
});
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() < 0.5 ? resolve(chefs[2]) : reject("Failed to retrieve Chef 3 data.");
    }, 4000);
});
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
.then(results => {
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            const chef = result.value;
            document.getElementById(`chef${index + 1}-info`).innerText = `Name: ${chef.name}, Specialty: ${chef.specialty}, Weakness: ${chef.weakness}, Location: ${chef.location}`;
        } else {
            document.getElementById(`chef${index + 1}-error`).innerText = result.reason;
        }
    });
});