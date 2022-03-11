navigator.geolocation.getCurrentPosition(getPos);

function getPos(position) {
  let latitudeInput = document.querySelector('#latitude').value = position.coords.latitude;
  let longitudeInput = document.querySelector('#longitude').value = position.coords.longitude;
}


let getButton = document.querySelector('#getLocation').addEventListener('click', () => {
  if (form.checkValidity() == false) {
    event.prevetDefault();
    event.stopPropagation();
  } else {
    document.geoForm.submit();
  }
});

