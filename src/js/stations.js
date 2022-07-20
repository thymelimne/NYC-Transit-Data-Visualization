//==========================================
// Stations
var bikestationsMarkers = []
async function stations(filename) {
    const response = await fetch(filename);
    const data = await response.text();
    const table = data.split('\n').slice(1);

    var min = table[table.length - 1].split(',') [0]
    var max = table[0].split(',') [0]

    // For each row of the data...
    table.reverse().forEach(row => {
        const rV = row.split(',');
        v = {
            rides: rV[0],
            name: rV[1],
            lat: rV[2],
            lng: rV[3]
        }
        console.log(v.name)
        console.log(v.lat)
        console.log(v.lng)

        mag = (v.rides - min) / (max - min) // 0 to 1
        color = colors(v.rides / max).hex()
        radius = 2 + 2 * mag;
        marker = L.circleMarker([v.lat, v.lng], {
            color: color,
            radius: radius,
            opacity: mag,
            fillOpacity: .8 + .2 * mag
        });

        marker.values = v;
        marker.on("click", function(e) {
            this.setRadius(40)
        })

        // Put the marker into the list.
        bikestationsMarkers.push(marker);
    })

    // Put the list onto a layer.
    bikestationsLayer = L.layerGroup(bikestationsMarkers);

    // Put the layer onto the map.
    bikestationsLayer.addTo(myMap);
}

// Call the function that just got made:
stations(stations_csv);