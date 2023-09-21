// Display the partners image
var photos = [];  // An array to store image element
var imageNames = [];   // An array to store image filename
var imageList = [];    // An array to store HTML list that contains image
var image;      // A variable to store the assembled image list codes
var openList = "<li class='partner'>";   // A variable to contain the open list tag
var closeList = "</li>";     // A variable to contain the close list tag

// A loop to create the 6 partner images 
for (var i = 0; i < 6; i++) {
    imageNames.push("partner-" + (i + 1));   // Create image filename and store in the array
    photos.push("<img src='images/partners/" + imageNames[i] + ".png'>");   //Assembling the image filename into a large element
    image = openList + photos[i] + closeList;   // Assemble image element 
    imageList.push(image);    // Store the image element into an array 
}

// Join the imageList elements into a single string
var imageListString = imageList.join('');   // Removes the commas (,) after each images 

// Display all six images
document.getElementById("partners").innerHTML = imageListString;