/* Using jQuery to highlight cells in the table */
$(document).ready(function() {
    // Remove initial selected class
    $("table tbody td.selected").removeClass("selected");

    // Function handle cell click
    $("table tbody td").click(function() {   // user select a table data cell
        var content = $(this).text();    // get content of cell

        // check if the cell is selectable 
        if (!$(this).hasClass("not-selectable")) {
            // toggle cell selection
            $(this).toggleClass("selected");

            if($(this).hasClass("selected")) {     // check if selected cell has class
                $('#displaySelected').css("visibility","visible");   // make display box visible 
                $('#displaySelected').css("margin-top","2em");    // add spaces above display box 
                $('#result').append("<p>" + content + "</p>");   // add child element with contents of cell 
            } else {   // if selected cell don't have class 
                $('#result p:contains(' + content + ')').remove();  // remove child element 

                if($('#result').has('p').length == false) {   // check if there are any child elements within parent 
                    $('#displaySelected').css("visibility","hidden");   // make display box hidden 
                    $('#displaySelected').css("margin-top","0");    // remove spaces above display box 
                }
            } 
        }
    });
});

