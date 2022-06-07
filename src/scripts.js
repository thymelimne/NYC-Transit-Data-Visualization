// Create the map
const center = [40.7628, -73.9860]
var myMap = L.map('map', {preferCanvas:true}).setView(center, 11);
//var marker = L.marker(center).addTo(myMap)

// Configure the base tiles for the map
const tileUrl = 'https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl);
tiles.addTo(myMap);

// This function will help with the coloring, for a "heatmap" sense.
var gradient = { 1: "rgb(31,0,0)", 2: "rgb(63,0,0)", 3: "rgb(127,0,0)", 4: "rgb(255,0,0)"};

//==========================================
// bikestationsLayer : JS Object; a set of markers for all the stations.
var hello = "hello"
var bikestationsMarkers = []

getData('assets/nycBikestations.csv');
async function getData(filename) {
    const response = await fetch(filename);
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const cols = row.split(',');
        const rides = cols[0];
        const name = cols[1];
        const lat = cols[2];
        const long = cols[3];
        console.log(rides, name, lat, long);

        markerColor = gradient[ Math.log(rides) * Math.LOG10E + 1 | 0 ];
        bikestationsMarkers.push(L.circleMarker([lat,long], {color:markerColor,radius:3,opacity:0.2,fillOpacity:1}));
    })

    bikestationsLayer = L.layerGroup(bikestationsMarkers);
    bikestationsLayer.addTo(myMap);
}

setTimeout(function(){console.log(hello);},2000)

//------------------------------------------
   
// Creating latlng object 
var pointA = [40.385044, -73.486671];
var pointB = [40.686816, -74.218482];
var pointC = [41.506174, -73.648015]
var latlngs = [ pointA, pointB, pointC ]; 
// Creating a polygon 
var c = "blue"
//var polygon = L.polygon(latlngs, {color: 'red',weight:0});
// Creating layer group 
var layerGroup = L.layerGroup([polygon])
// Adding layer group to map 
layerGroup.addTo(myMap);