navigator.geolocation.getCurrentPosition(getPos);
// let latitude;
// let longitude;
// let latitudeInput = document.querySelector('#latitude');
// let longitudeInput = document.querySelector('#longitude');

function getPos(position) {
  // let latitude = position.coords.latitude;
  // let longitude = position.coords.longitude;
  // latitudeInput.value = latitude;
  // longitudeInput.value = longitude;
  let latitudeInput = document.querySelector('#latitude').value = position.coords.latitude;
  let longitudeInput = document.querySelector('#longitude').value = position.coords.longitude;
  console.log(latitudeInput, longitudeInput);
}


let getButton = document.querySelector('#getLocation').addEventListener('click', () => {
  // let form = document.querySelector('#form');
  if (form.checkValidity() == false) {
    event.prevetDefault();
    event.stopPropagation();
  } else {
    document.geoForm.submit();
  }
});

