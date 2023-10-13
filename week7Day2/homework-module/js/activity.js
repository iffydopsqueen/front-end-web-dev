$(document).ready(function() {
    // Define cliff site names
    var cliffSites = ["West Cliff", "North Cliff", "East Cliff", "South Cliff"];

    // Function to update the modal with selected activities
    function updateModal(selectedActivities) {
        var selectedActivitiesList = $('#selectedActivitiesList');
        selectedActivitiesList.empty();  // Clear the list

        // Populate the list with selected activities
        selectedActivities.forEach(function(activity) {
            selectedActivitiesList.append(activity + '<br><br>');
        });
    }

    // Remove initial highlighting on page load
    $('#activities table tbody td').removeClass('selected');

    // Function to handle cell click
    $("table tbody td").click(function () {

        // check if the cell is selectable 
        if (!$(this).hasClass("not-selectable")) {
            // Toggle the 'selected' class
            $(this).toggleClass("selected");

            // Update the modal content based on selected activities
            var selectedActivities = [];
            $('#activities table tbody td.selected').each(function () {
                var activity = $(this).text();
                var cliffSite = cliffSites[$(this).index() - 1];
                selectedActivities.push(activity + ' at ' + cliffSite);
            });

            // Update the modal with selected activities
            updateModal(selectedActivities);

            // Open the modal
            $('#selectedActivitiesModal').modal('show');
        }
    });
});
