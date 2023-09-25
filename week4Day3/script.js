/*--------- Gallery display ---------*/

// Get all elements with class 'photo'
var photos = document.querySelectorAll('.photo');

// Loop through each 'photo' element
photos.forEach((photo, index) => {
    var img = photo.querySelector('img');
    var description = photo.querySelector('.description');

    img.alt = caption[index];
    caption.textContent = caption[index];
    description.textContent = description[index];
});

/*--------- Information box ---------*/

// Function to open/show the information box
function openInfoBox(heading, text) {
  var infoHeading = document.getElementById('info-heading');
  var infoText = document.getElementById('info-text');
  var infoBox = document.getElementById('info-box');

  infoHeading.innerText = heading;
  infoText.innerText = text;
  infoBox.style.display = 'block';
}

// Function to close the information box
function closeInfoBox() {
  var infoBox = document.getElementById('info-box');
  infoBox.style.display = 'none';
}

// Loop through each 'photo' element
photos.forEach((photo) => {
  var description = photo.querySelector('.description');
  var caption = photo.querySelector('.caption').innerText;
  var descriptionText = description.innerText;

  // Add event listener to description
  description.addEventListener('click', () => {
    openInfoBox(caption, descriptionText);
  });
});