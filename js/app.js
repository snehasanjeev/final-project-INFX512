const mymap = L.map('mapid').setView([19.182755,72.840157], 15);
L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken:
        "pk.eyJ1Ijoibmlja2RlbmFyZGlzIiwiYSI6ImNqaGRla2pjMjBvYXgzNm13Yzc3aGIwM3kifQ.G2Tr-B7ppCNdj6xuM0Qc5A"
    }
  ).addTo(mymap);

  var circle = L.circle([19.182755,72.840157],{
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
  }).addTo(mymap);

  circle.bindPopup("<b>Apt #501, Unique Deluxe</b>, Evershine Nagar, Malad-W, Mumbai 400 064");