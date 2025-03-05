//--------------------------------------------------------------------------------------------------
//                                  Convert Hour to Second
// 
// This algorithm convert hour to second
//--------------------------------------------------------------------------------------------------

const timestamp = new Date();
let time = ("HH:MM:SS");

function convertHourToSecond(time){
    let hours = time.getHours();
    let hours_seconds = hours * 3600;
    let minutes = time.getMinutes();
    let minutes_seconds = minutes * 60;
    let seconds = time.getSeconds();
    let totalSeconds = hours_seconds + minutes_seconds + seconds;
    return totalSeconds;
}

console.log("The exact hours, minutes and seconds converted below:");
console.log(convertHourToSecond(timestamp));