var x = document.getElementById("loc");
var y = document.getElementById("mapholder");
var z = document.getElementById("info");
const map_api = "YOUR_KEY";
const geoinfo_token = "YOUR_TOKEN";

var options = {
   enableHighAccuracy: true,
   timeout: 5000,
   maximumAge: 0
 };

function getLocation() {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition,showError,options);
   } else { 
      z.innerHTML = "<br><br><b>Geo-Location is not supported on this browser.</b>";
   }
 }

function showPosition(position) {
   var latlon = position.coords.latitude + ',' + position.coords.longitude;

   x.innerHTML = "<b>Latitude: </b>" + position.coords.latitude + "<br><b>Longitude: </b>" + position.coords.longitude;

   var img_url = "https://www.google.com/maps/embed/v1/place?key="+map_api+"&q="+latlon+"&maptype=satellite&center="+latlon+"&zoom=18";

   y.innerHTML = "<iframe style='border:0' loading='lazy' allowfullscreen src='"+img_url+"'>";
}

function showError(error) {
   switch(error.code) {
      case error.PERMISSION_DENIED:
         z.innerHTML = "<br><br><b>User denied the request for location.<br>Click allow to see your location on map.</b>"
         break;
      case error.POSITION_UNAVAILABLE:
         z.innerHTML = "<br><br><b>Map is currently unavailable.<br>Turn on your Location(GPS).</b>"
         break;
      case error.TIMEOUT:
         z.innerHTML = "<br><br><b>The request for map location timed out.</b>"
         break;
      case error.UNKNOWN_ERROR:
         z.innerHTML = "<br><br><b>An unknown error occurred.</b>"
         break;
   }
}

$.getJSON('https://geolocation-db.com/json/')
.done (function(location) {
   $('#country').html(location.country_name);
   $('#ip').html(location.IPv4);
});

$.get("https://ipinfo.io/json?token="+geoinfo_token+"", function (response) {
   $("#address").html(response.city + ", " + response.region);
   $("#postal").html(response.postal);
   $("#org").html(response.org);
   $("#loc").html("<b>Latitude/Longitude: </b>"+ response.loc);
}, "jsonp");