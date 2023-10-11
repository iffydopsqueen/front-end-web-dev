// Create a time data function 
function currentTime() {
    // Declare variables
    var d = new Date();          // Get current date 
    var hr = d.getHours();       // Get current hours 
    var min = d.getMinutes();   // Get current minutes 
    var sec = d.getSeconds();   // Get current seconds 
    var ampm;                  // Declare empty variable to store AM or PM

    // Add 0 to single digits for seconds 
    if (sec < 10) {
        sec = "0" + sec;
    }

    // Add 0 to single digits for minutes 
    if (min < 10) {
        min = "0" + min;
    }

    // Convert Greenwich Mean Time from military time to standard time
    var utchr = d.getUTCHours();    // Get current Greenwich Mean Time (GMT)
    if (utchr > 12) {
        utchr -= 12;
    }

    // Calculate time difference between GMT hour and local hour
    var timeDiff;    // To store time difference between GMT hour and Local hour
    timeDiff = utchr - hr;

    // Convert time difference, if negative, to positive (adjusted time difference)
    var adjTimeDiff;   // To store time difference converted to positive number
    adjTimeDiff = Math.abs(timeDiff);

    // Check which time zone based on the converted time difference between GMT Hour and Local Hour
    var timeZone;    // to store the 4 time zones (PST,MST,CST,EST)

    if (adjTimeDiff === 0) {
        timeZone = "GMT";
    } else if (adjTimeDiff === 3) {
        timeZone = "PST";
    } else if (adjTimeDiff === 2) {
        timeZone = "MST";
    } else if (adjTimeDiff === 1) {
        timeZone = "CST";
    } else {
        timeZone = "EST";
    }

    // Determine AM or PM string 
    if (hr == 12) {
        ampm = "PM";    // Set to PM
    } else if (hr > 12) {
        hr -= 12;      // Deduct 12 from hours greater than 12 (military time)
        ampm = "PM";   // Set to PM
    } else {
        ampm = "AM";   // Set to AM
    }

    // Assemble time format to display with time zone
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    // Display current local time and time zone on HTML elements 
    document.getElementById("clock").innerText = time;   // adding time 

    // Run time data function every 1 second 
    setInterval(currentTime, 1000);    // setting timer
}

// Initial run of time data function
currentTime();