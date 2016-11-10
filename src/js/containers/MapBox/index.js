import React from 'react'
import mapboxgl from 'mapbox-gl'
import * as mapActions from './actions'

export default class MapBox extends React.Component {
  
  componentDidMount() {
    
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFydGlud2FhZyIsImEiOiJjaWo0NWt6ZWYwMDE0dXlrcm0yenVkNDR5In0.0I9xJzLubP9g3V_NTt1PhA'

    const map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/martinwaag/ciqrtw6n4000lcbni674v4vl0',
      center: [4.820902482840296, 52.3749057570665], // starting position
      zoom: 8, // starting zoom
      maxBounds: [
	        [3.479712816300946, 52.00462169619678], // Southwest lng lat coordinates
	        [6.106613328193475, 52.90275340148645],  // Northeast lng lat coordinates
	    ],
      minZoom: 8.5,
      attributionControl: false,
      pitch: 10,
    });

    map.on('zoom', () => {
      const currentZoom = map.getZoom();
      const nextZoom = currentZoom + 0.1;
      if (currentZoom < (nextZoom - 0.3)) {
        map.setPitch(map.getPitch() + 0.3);
      }
    });

    // const nav = new mapboxgl.Navigation({ position: 'top-left' }); // position is optional
    // map.addControl(nav);

    map.on('load', () => {
      mapActions.addSources(map);
      mapActions.addGemeente(map);
    });

  }

  render() {
    return <div ref="map" id="map"></div>
  }

}