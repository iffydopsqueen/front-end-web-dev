/* Using jQuery to highlight cells in the table */
$(document).ready(function() {
    // Remove initial selected class
    $("table tbody td.selected").removeClass("selected");

    // Function handle cell click
    $("table tbody td").click(function() {
        // check if the cell is selectable 
        if (!$(this).hasClass("not-selectable")) {
            // toggle cell selection
            $(this).toggleClass("selected");
        }
    });
});

