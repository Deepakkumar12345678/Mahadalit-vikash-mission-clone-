// GEO LOCATION DEMO
document.querySelector(".geo-btn").addEventListener("click", function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        alert(
          "Location Allowed!\n" +
          "Latitude: " + position.coords.latitude + 
          "\nLongitude: " + position.coords.longitude
        );
      },
      function() {
        alert("Location access denied");
      }
    );
  } else {
    alert("Geolocation not supported");
  }
});

function toggleMenu() {
  var menu = document.getElementById("menuItems");
  menu.classList.toggle("active");
}
