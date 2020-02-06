//import {FormatBase} from './FormatBase';
//const FormatBase = require('./FormatBase');
const FormatYear3MonthDay_Dash = require('./FormatYear3MonthDay_Dash');

// Format date in 3 different formats

// Format1 (Year3MonthDay_Dash) -> YYY-MM-DD HH:mm
// Format2 (DayMontYear_Dash) -> DD-MM-YYYY HH:mm
// Format3 (DayMontYear_Slash) -> DD/MM/YYY HH:mm

// Take the date and call the correct format. Only work for GUI now
function formatDate(date) {
    let year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate(),
        hour = date.getHours(),
        minutes = date.getMinutes();
    
    //let formattedDate = new FormatYear3MonthDay_Dash(year, month, day, hour, minutes);
    let formattedDate = new FormatYear3MonthDay_Dash(year, month, day, hour, minutes);
    console.log(formattedDate.toString());
}

formatDate(new Date())