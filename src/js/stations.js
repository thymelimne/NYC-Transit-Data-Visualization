//==========================================
// Stations
var min = 0
var max = 1
var bikestationsMarkers = []
async function stations(filename) {
    const response = await fetch(filename);
    const data = await response.text();
    const table = data.split('\n').slice(1);

    min = table[table.length - 1].split(',') [0]
    max = table[0].split(',') [0]

    // For each row of the data...
    table.reverse().forEach(row => {
        const rV = row.split(',');
        v = {
            rides: rV[0],
            name: rV[1],
            lat: rV[2],
            lng: rV[3]
        }
        marker = make_station_marker(v);
        bikestationsMarkers.push(marker);
    })

    // Put the list onto a layer.
    bikestationsLayer = L.layerGroup(bikestationsMarkers);

    // Put the layer onto the map.
    bikestationsLayer.addTo(myMap);
}

// Call the function that just got made:
stations(stations_csv);