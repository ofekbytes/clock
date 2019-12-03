
// var glTest = "yeaaaaa";

function fnOnload() {

     window.onload = function fnOnload() {
        setInterval(printTime, 100);
    };

}


function getFnDay(day) {

    var todayIs = "";

    switch (day) {
        case 0:
            todayIs = "Sunday";
            break;
        case 1:
            todayIs = "Monday";
            break;
        case 2:
            todayIs = "Tuesday";
            break;
        case 3:
            todayIs = "Wednesday";
            break;
        case 4:
            todayIs = "Thursday";
            break;
        case 5:
            todayIs = "Friday";
            break;
        case 6:
            todayIs = "Saturday";
            break;
        default:
            todayIs = "today :-)";
            break;
    }

    return todayIs;
}


function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    var gregorianCalendars = "";

    var getHour = document.getElementById("getHour");
    var getDay = document.getElementById("getDay");
    var getDate = document.getElementById("getDate");

    day = getFnDay(day);
    

    
    /* hours */
    if (hours < 10) {
        hours = "0" + hours;
    }

    /* minutes */
    if (mins < 10) {
        mins = "0" + mins;
    }

    /* seconds */
    if (secs < 10) {
        secs = "0" + secs;
    }

    /* date */
    if (date < 10) {
        date = "0" + date;
    }

    month = month + 1;
    
    /* month */
    if (month < 10) {
        month = "0" + month;
    }

    /* year */
    if (year < 10) {
        year = "0" + year;
    }

   
    gregorianCalendars = date + "/" + month + "/" + year;
    getHour.innerHTML = hours + ":" + mins + ":" + secs;
    getDay.innerHTML = day;
    getDate.innerHTML = gregorianCalendars;
}

function fnLoadAllEvents() {
    document.getElementById("btnlove").addEventListener("click", function() {
        console.log("btnlove");
        });
    document.getElementById("btnNeon").addEventListener("click", function() {
        console.log("btnNeon");
        });
    document.getElementById("btnfire").addEventListener("click", function() {
        console.log("btnfire");
        });
        
}

// function getTest() {
//     return glTest;
// }

