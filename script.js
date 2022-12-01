const date = new Date();
const span = document.getElementById("today")

let day = date.getDate();
let month = date.toLocaleString('default', { month: 'long' });
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day} ${month}, ${year}`;
console.log(currentDate);

// changing value of span
span.innerText = currentDate;