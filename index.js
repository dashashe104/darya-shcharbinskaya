// Initialize and add the map
function initMap() {
  // The location of Talo apartments
  const talo = { lat: 44.971536, lng: -93.345989 };
  // The map, centered at Talo apartments
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: talo,
  });
  // The marker, positioned at Talo apartments
  const marker = new google.maps.Marker({
    position: talo,
    map: map,
  });
}
