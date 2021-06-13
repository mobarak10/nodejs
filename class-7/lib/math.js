/* eslint-disable prettier/prettier */

/**
 * Title: Math library
 * Description: Utility library for math ralated function
 * Author: Mobarak Hossain
 * Date: 12/06/2021
 */

// Math object - Module Scaffolding
const math = {};

// Get a ramdom integer between two integer
// Inspired by: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

math.getRandomNumber = function getRandomNumber(min, max) {
    let minimum = min;
    let maximum = max;

    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;

    return Math.floor(Math.random() * (maximum - minimum + 1) + min);
};

// Export the library
module.exports = math;
