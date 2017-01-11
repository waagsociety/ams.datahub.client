import React, { Component } from "react";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";

const accessToken = 'pk.eyJ1IjoibWFydGlud2FhZyIsImEiOiJ'
  + 'jaWo0NWt6ZWYwMDE0dXlrcm0yenVkNDR5In0.0I9xJzLubP9g3V_NTt1PhA'
const style = 'mapbox://styles/martinwaag/ciqrtw6n4000lcbni674v4vl0'

const longitude = 4.8
const latitude = 52.35
const maxBounds = [
  [longitude - 1, latitude - 0.5], // Southwest lng lat coordinates
  [longitude + 1, latitude + 0.5],  // Northeast lng lat coordinates
]

const state = {
  zoom: 9,
  center: [longitude, latitude],
}

export default class Map extends Component {

   _onZoom(map) {
    Object.assign(state, {
      zoom: map.getZoom()
    })
  }
  
  _onlayerclick() {
    console.log('okay')
  }

  componentWillMount() {

    fetch('../../assets/data/gemeenten.geojson', { method: 'get' })
    .then(response => response.json())
    .then(response => {
      this.setState({ gemeenten: response })
    })

  }

  //onStyleLoad={x}

  render() {

    return <div class="map">
      <ReactMapboxGl
        accessToken={accessToken}
        center={state.center}
        style={style}
        zoom={[state.zoom]}
        onZoom={this._onZoom}
        maxBounds={maxBounds}
      >
      </ReactMapboxGl>
    </div>
  }
}

// import React from 'react'
// import Map, { GeoJSONLayer, ScaleControl, ZoomControl } from "react-mapbox-gl";
// import { view } from '../../store'

// function isSimilar(a, b) {
//   return Math.abs(a - b) < 0.2
// }

// const move = (dispatch, mapbox) => event => {
//   const { center, zoom } = event.transform
//   const [longitude, latitude] = [center.lng, center.lat]
//   console.log(mapbox,longitude)
//   if(
//     !isSimilar(mapbox.longitude, longitude) ||
//     !isSimilar(mapbox.latitude, latitude)
//   ) dispatch(view.Map({ longitude, latitude, zoom }))
// }

// const load = event => console.log(event)

// export default function({ props }) {
  
//   const accessToken = 'pk.eyJ1IjoibWFydGlud2FhZyIsImEiOiJjaWo0NWt6ZWYwMDE0dXlrcm0yen
//VkNDR5In0.0I9xJzLubP9g3V_NTt1PhA'
//   const { dispatch, store } = props
//   const { mapbox } = store.view
//   const { longitude, latitude, zoom, maxBounds } = mapbox

//   const state = {
//     id: 'map',
//     accessToken,
//     style: 'mapbox://styles/martinwaag/ciqrtw6n4000lcbni674v4vl0',
//     // style: 'mapbox://styles/mapbox/light-v8',
//     popup: null,
//     center: [longitude, latitude],
//     maxBounds,
//     zoom: [zoom],
//     minZoom: 9,
//     maxZoom: 15,
//     attributionControl: false,
//     pitch: 40,
//   }

//   return <div class="map">
//     <Map {...state} onDrag={move(dispatch, mapbox)}>
//       <ZoomControl/>
//     </Map>
//   </div>

// }

// // <GeoJSONLayer data={geojson}
// //         symbolLayout={{
// //           "text-field": "{place}",
// //           "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
// //           "text-offset": [0, 0.6],
// //           "text-anchor": "top"
// //         }}/>