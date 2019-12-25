/*
  changeImage
    Change obituary image with a simple click
 */
function changeImage() {
  var imageURL = prompt("Please enter a new image URL with protocol\nRectangular images are preferred (16:9 ratio for example)", "https://example.com/newimage.jpg");
  if (imageURL != '' && imageURL != null) {
    document.getElementById('image').src = imageURL;
  }
  return;
}

/*
  showAdvanced
    Show advanced new obituary options
 */
function showAdvanced() {
  document.getElementById('advanced').classList.remove('dn');
  document.getElementById('show').classList.add('dn');
}

/*
  Trigger functions on click event
 */
document.getElementById('image').addEventListener('click', function() {changeImage();} );
document.getElementById('show').addEventListener('click', function() {showAdvanced();});
