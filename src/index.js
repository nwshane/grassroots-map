import L from "leaflet";

const dhammaHouseCoordinates = [40.7544, -73.9905];

const mymap = L.map("mapid").setView(dhammaHouseCoordinates, 13);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1IjoibmF0YW5pYmFyIiwiYSI6ImNqa2FnMTM5ajM1ajYzbG50dXptMDhjcDIifQ.Dae3BHZd9sexPOk_d76O1g"
  }
).addTo(mymap);

L.marker(dhammaHouseCoordinates).addTo(mymap);
