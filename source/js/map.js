let map;
let marker;
let geocoder;
let responseDiv;
let response;

function initMap() {
  map = new google.maps.Map(document.querySelector(".contacts__map"), {
    zoom: 13,
    center: { lat: 59.9968353, lng: 30.3531303 },
  });

  const image = "../img/map/map-marker1.png";
  marker = new google.maps.Marker({
    map,
    position: map.center,
    icon: image,
  });
}
