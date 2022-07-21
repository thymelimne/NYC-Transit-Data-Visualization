//=============================================
// Selection : When a marker is selected.

var old_marker = null
var selected_marker = null
function selectMarker(marker) {
    old_marker = selected_marker;
    selected_marker = marker;

    // Stop showing the previous marker
    if (old_marker!=null) {
        old_marker.originalSize()
    }

    // Start showing the new marker
    if (selected_marker != null) {
        selected_marker.selectionSize()
    }
}

/*
Details of marker selection:
- Markers get selected one at a time.
- They get selected via click.
//*/