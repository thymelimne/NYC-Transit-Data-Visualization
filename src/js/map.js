//=========================================
// Map : Create a map, set in NYC
const center = [40.7628, -73.9860]
const initial_zoom = 11;
var myMap = L.map('map', {preferCanvas:true}).setView(center, initial_zoom);

//==========================================
// Tiles : Use these really good tiles
const tileUrl = 'https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl);
tiles.addTo(myMap);

//==========================================
// Zoom : Have zooming functionality.
myMap.on("zoomend", function(e) {
    var zoom = myMap.getZoom()
    var delta_zoom = (zoom - initial_zoom)
    var zoom_component = (2 ** delta_zoom)

    // Change the size of every marker:
    bikestationsMarkers.forEach(marker => {
        marker.zoomMarker(zoom_component)
    })
});