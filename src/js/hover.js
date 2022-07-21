//=============================================
// Hover : When a marker experiences a mouseover.

var old_hover = null
var current_hover = null
function hoverMarker(marker) {
    old_hover = current_hover;
    current_hover = marker;

    // Stop hovering over the previous marker
    if (old_hover!=null) {
        old_hover.unhover()
    }

    // Start hovering over the new marker
    if (current_hover != null) {
        current_hover.hover()
    }
}

/*
Details of marker selection:
- Markers get selected one at a time.
- They get selected via click.
//*/