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
