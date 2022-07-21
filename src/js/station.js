//===================================================
// Station marker

// Turn the values into a marker:
function make_station_marker(v) {

    mag = (v.rides - min) / (max - min) // 0 to 1
    color = colors(v.rides / max).hex()
    radius = 2 + 2 * mag;
    marker = L.circleMarker([v.lat, v.lng], {
        color: color,
        radius: radius,
        opacity: .5 + .5 * mag,
        fillOpacity: .8
    });

    marker.initial_radius = radius
    marker.current_radius = radius
    marker.values = v

    // Marker selection:
    marker.on("click", function(e) {
        selectMarker(this)
    })
    marker.originalSize = function() {
        var zoom = myMap.getZoom()
        var component = 2 ** (zoom - initial_zoom)
        this.current_radius = this.initial_radius * component
        this.setRadius(this.current_radius)
    }
    marker.selectionSize = function() {
        this.current_radius *= 1.8
        this.setRadius(this.current_radius)
    }

    // Hovering on marker:
    marker.on("mouseover", function(e) {
        hoverMarker(this)
    })
    marker.unhover = function() {
        this.setStyle({fill: true})
    }
    marker.hover = function() {
        this.setStyle({fill: false})
    }

    // Zooming:
    marker.zoomMarker = function(zoom_component) {
        this.current_radius = this.initial_radius * zoom_component
        this.setRadius(this.current_radius)
    }

    return marker;
}