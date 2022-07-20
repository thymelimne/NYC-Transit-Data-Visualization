//=========================================
// Map : Create a map, set in NYC
const center = [40.7628, -73.9860]
var myMap = L.map('map', {preferCanvas:true}).setView(center, 11);

//==========================================
// Tiles : Use these really good tiles
const tileUrl = 'https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl);
tiles.addTo(myMap);

//==========================================
// Zoom : Have zooming functionality.
myMap.on("zoomend", function(e) {
    zoom = myMap.getZoom()
    console.log(zoom)

    // Change the size of every marker
    bikestationsMarkers.forEach(marker => {
        marker.setRadius(10)
    })
});