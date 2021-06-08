/* eslint-disable prettier/prettier */
const School = require('./school');

const school = new School();

// register a listner an event for ball ring
school.on('ballRing', ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
});

school.startPeriod();
