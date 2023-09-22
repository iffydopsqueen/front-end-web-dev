// Array to hold captions for each photo
/*var captionTexts = ['Beagle', 'Bulldog', 'Chihuahua', 'Poodle', 'Dachshund', 'Poodle', 'German Shepherd', 'Golden Retriever', 'Labrador Retriever', 'Rottweiler', 'Siberian Husky', 'Yorkshire Terrier'];*/

// Array to hold descriptions for each photo
/*var descTexts = ['A beagle laying in the shade of a tree', 'An English bulldog', 'Sad looking chihuahua', 'Clapton the poodle in the water', 'A long-bodied dachshund dog standing in a field', 'Diana the poodle standing on a beach', 'A German shepherd dog standing in the grass', 'A golden retriever sitting in a park', 'A Labrador retriever dog standing close to a river', 'A happy Rottweiler standing in the field', 'A Siberian husky standing on a rock', 'A Yorkshire terrier laying on a boat deck'];*/

// Get all elements with class 'photo'
var photos = document.querySelectorAll('.photo');

var img = photo.querySelector('img');
var caption = photo.querySelector('.caption');
var description = photo.querySelector('.description');

// Loop through each 'photo' element
photos.forEach((photo, index) => {
    img.alt = captionTexts[index];
    caption.textContent = captionTexts[index];
    description.textContent = descTexts[index];
});

// Information box 

var infoBox = document.getElementById('info-box');
var infoHeading = document.getElementById('info-heading');
var infoText = document.getElementById('info-text');
var closeInfoButton = document.getElementById('close-info');

var infoBoxDesc = [
  'A small to medium-sized hound dog known for its keen sense of smell and distinctive howl, the Beagle is friendly, curious, and great with families.',
  'Recognizable by its loose, wrinkled skin and distinctive pushed-in nose, the Bulldog is a gentle and affectionate companion, characterized by its sturdy and muscular build.',
  'The Chihuahua is a tiny dog with a big personality. Known for its loyalty and strong bond with its owner, this breed is often fearless and alert.',
  'An intelligent and versatile breed, the Poodle is known for its curly, hypoallergenic coat and comes in standard, miniature, and toy sizes. They are highly trainable and excel in various dog sports.',
  'A small, long-bodied dog with short legs, the Dachshund is a playful and curious breed. They are known for their unique shape and brave, spunky personality.',
  'An intelligent and versatile breed, the Poodle is known for its curly, hypoallergenic coat and comes in standard, miniature, and toy sizes. They are highly trainable and excel in various dog sports.',
  'A highly intelligent and versatile breed, the German Shepherd is known for its loyalty, trainability, and protective instincts. They are often used as working dogs in roles like police and search and rescue.',
  'Friendly, intelligent, and gentle, the Golden Retriever is a popular family dog and is known for its beautiful golden coat. They are eager to please and excel in various activities, including obedience and therapy work.',
  'An affectionate and outgoing breed, the Labrador Retriever is known for its friendly nature and intelligence. They are often used as guide dogs, search and rescue dogs, and family pets.',
  'A powerful and confident breed, the Rottweiler is known for its strength, loyalty, and protective nature. They are often used as working dogs in roles like police and guard dogs.',
  'Recognizable by its striking appearance and thick double coat, the Siberian Husky is energetic, independent, and known for its friendly demeanor. They are excellent sled dogs and require regular exercise.',
  'A small and elegant toy breed, the Yorkshire Terrier is known for its long, silky coat and confident personality. Despite their size, they are spirited and brave, making them great companions.'
];

function openInfoBox(heading, text) {
  infoHeading.innerText = heading;
  infoText.innerText = text;
  infoBox.style.display = 'block';
}

function closeInfoBox() {
  infoBox.style.display = 'none';
}

photos.forEach((photo, index) => {
    description.addEventListener("click", () => {
      openInfoBox(captionTexts[index], infoBoxDesc[index]);
    });
  });
  
closeInfoButton.addEventListener("click", closeInfoBox);
