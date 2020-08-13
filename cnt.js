const urlParams = new URLSearchParams(window.location.search);
const offsetHour = parseInt(urlParams.get('h'));
const theDays = document.getElementById('days');
const theHrs = document.getElementById('hrs');
const theMin = document.getElementById('min');
const theSec = document.getElementById('sec');

const setNumbers = arg => {
    return arg.toString().length === 1 ? "0"+arg : arg;
}


const a = moment([urlParams.get('y'), urlParams.get('m')-1, urlParams.get('d'), offsetHour, urlParams.get('mi'), 0, 0]);
let b = moment();
setInterval(function(){
    b = moment();
    let days = a.diff(b, 'days'); 
    let hrs = ( a.diff(b, 'hours')%24); 
    let mins = (a.diff(b, 'minutes')%60);    
    let secs = a.diff(b, 'seconds')%60;
    theDays.innerHTML = setNumbers(days);
    theHrs.innerHTML = setNumbers(hrs);
    theMin.innerHTML = setNumbers(mins);
    theSec.innerHTML = setNumbers(secs);
}, 1000);