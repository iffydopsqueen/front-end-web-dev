/* Using jQuery to highlight cells in the table */
$(document).ready(function() {
    // Define cliff site names
    var cliffSites = ["West Cliff", "North Cliff", "East Cliff", "South Cliff"];

    // Remove initial selected class
    $("table tbody td.selected").removeClass("selected");

    // Function handle cell click
    $("table tbody td").click(function() {   // user select a table data cell
        var content = $(this).text();    // get content of cell
        var columnIndex = $(this).index(); // Get the column index

        // check if the cell is selectable 
        if (!$(this).hasClass("not-selectable")) {
            // toggle cell selection
            $(this).toggleClass("selected");

            if($(this).hasClass("selected")) {     // check if selected cell has class
                // Get the cliff site name based on the column index
                var cliffSite = cliffSites[columnIndex - 1]; // Subtract 1 for activity column

                $('#displaySelected').css("visibility", "visible");   // make display box visible 
                $('#displaySelected').css("margin-top", "2em");    // add spaces above display box 

                // Append selected activity and cliff site to result
                $('#result').append("<p>" + content + " at " + cliffSite + "</p>");    // add child element with contents of cell 
            } else {   
                // if selected cell don't have class 
                // Remove the selected activity from result
                $('#result p:contains(' + content + ')').remove();

                if($('#result').has('p').length === 0) {   // check if there are any child elements within parent 
                    // Hide the display box if no selected activities
                    $('#displaySelected').css("visibility", "hidden");   // make display box hidden
                    $('#displaySelected').css("margin-top", "0");    // remove spaces above display box 
                }
            } 
        }
    });
});