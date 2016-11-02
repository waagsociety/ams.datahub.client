import React from 'react'
import Map, { GeoJSONLayer, ScaleControl, ZoomControl } from "react-mapbox-gl";

export default function() {
  
  const accessToken = 'pk.eyJ1IjoibWFydGlud2FhZyIsImEiOiJjaWo0NWt6ZWYwMDE0dXlrcm0yenVkNDR5In0.0I9xJzLubP9g3V_NTt1PhA'
  const props = {
    id: 'map',
    accessToken,
    style: 'mapbox://styles/martinwaag/ciqrtw6n4000lcbni674v4vl0',
    popup: null,
    center: [4.820902482840296, 52.3749057570665],
    zoom: [9],
    minZoom: 7.5,
    maxZoom: 15,
    attributionControl: false,
    pitch: 10,
  }

  return <div class="map">
    <Map {...props}>
      <ZoomControl/>
    </Map>
  </div>

}

// <GeoJSONLayer data={geojson}
//         symbolLayout={{
//           "text-field": "{place}",
//           "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
//           "text-offset": [0, 0.6],
//           "text-anchor": "top"
//         }}/>