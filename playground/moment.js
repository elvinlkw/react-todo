var moment = require('moment');

var now = moment();

console.log('current timestamp', now.unix());

var timeStamp = 1539294535;

var currentMoment = moment.unix(timeStamp);
// console.log(currentMoment.format('MMM D, YY @ h:mm a'));
console.log(currentMoment.format('MMMM Mo, YYYY @ hh.mm A'));

//january 3rd, 2017 @ 12.13 AM