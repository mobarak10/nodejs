/* eslint-disable prettier/prettier */
const EventEmmiter = require('events');

class School extends EventEmmiter {
    startPeriod() {
    console.log('start school');
    // rise an event
    setTimeout(() => {
            this.emit('ballRing', {
                period: 'first',
                text: 'period ended',
            });
        }, 2000);
    }
}

module.exports = School;
