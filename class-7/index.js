/* eslint-disable prettier/prettier */

/**
 * Title: basic node application
 * Description: Simple node application that prind random code per second interval
 * Author: Mobarak Hossain
 * Date: 12/06/2021
 */

// Dependancies
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

// App project -Mofule scaffolding
const app = {};

// configuration
app.config = {
    timeBetweenQuotes: 1000,
};

// function that print a random code
app.printQuote = function printQuote() {
    // Get all the quote
    const allQuotes = quotesLibrary.allQuotes();

    // Get the length of quotes
    const numberofQuotes = allQuotes.length;

    // Pick a random number between 1 and the number of quotes
    const randomNumber = mathLibrary.getRandomNumber(1, numberofQuotes);

    // Get the quote qt that position in the array (minus one)
    const selectedQuote = allQuotes[randomNumber - 1];

    // Prtint the quote in console
    console.log(selectedQuote);
};

// Function that loop indefinitely, calling a printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
    // Create the interval, using the config variable define above
    setInterval(app.printQuote, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();
