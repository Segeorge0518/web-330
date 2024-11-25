/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

    Author: Sara George
    Date: 11/22/2024
    Filename: index.html
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 8, isReserved: false },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  const table = tables.find(t => t.tableNumber === tableNumber);
  if (table && !table.isReserved) {
      table.isReserved = true;
      setTimeout(() => {
          callback(`Table ${tableNumber} has been reserved.`);
      }, time);
  } else {
      callback(`Error: Table ${tableNumber} is not available.`);
  }
}

// When the form is submitted, call the reserveTable function
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const tableNumber = parseInt(document.getElementById('tableNumber').value);
  reserveTable(tableNumber, function(message) {
    document.getElementById('message').innerText = message;
  }, 15000);
  });
