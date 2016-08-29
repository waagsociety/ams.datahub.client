function loadMapMouseEvents(map, fillId, hoverId, code, addWijk, addBuurt) {
  map.on('click', (e) => {
    const features = map.queryRenderedFeatures(e.point, { layers: [fillId] });
    console.log(map.getBounds())
    console.log(e.lngLat)

    if (!features.length) return;
    const feature = features[0];

    if (addWijk) addWijken(map, feature.properties[code]);
    if (addBuurt) addBuurten(map, feature.properties[code]);
  });

  // When the user moves their mouse over the page, we look for features
  // at the mouse position (e.point) and within the fillID layer.
  // If a feature is found, then we'll update the filter in the hoverId
  // layer to only show that area, thus making a hover effect.
  map.on('mousemove', (e) => {
    const features = map.queryRenderedFeatures(e.point, { layers: [fillId] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (features.length) {
      map.setFilter(hoverId, ['==', code, features[0].properties[code]]);
    } else {
      map.setFilter(hoverId, ['==', code, '']);
    }
  });

  // Reset the hoverId layer's filter when the mouse leaves the map
  map.on('mouseout', () => {
    map.setFilter(hoverId, ['==', code, '']);
  });
}

export function addSources(map) {
  map.addSource('wijken', {
    type: 'geojson',
    data: '../../assets/data/wijken.geojson',
  });

  map.addSource('buurten', {
    type: 'geojson',
    data: '../../assets/data/buurten.geojson',
  });


  map.addSource('gemeenten', {
    type: 'geojson',
    data: '../../assets/data/gemeenten.geojson',
  });
}

export function addBuurten(map, wkCode) {
  map.addLayer({
    id: `buurten-fills-${wkCode}`,
    type: 'fill',
    source: 'buurten',
    paint: {
      'fill-color': '#3DE3CF',
      'fill-opacity': 0.1,
      'fill-outline-color': '#fff',
    },
    filter: ['==', 'wk_code', wkCode],
  });

  map.addLayer({
    id: `buurten-hover-${wkCode}`,
    type: 'fill',
    source: 'buurten',
    paint: {
      'fill-color': '#3DE3CF',
      'fill-opacity': 0.5,
    },
    filter: ['==', 'wk_code', wkCode],
  });

  map.addLayer({
    id: `buurten-borders-${wkCode}`,
    type: 'line',
    source: 'buurten',
    paint: {
      'line-color': '#2AA293',
      'line-width': 2,
    },
    filter: ['==', 'wk_code', wkCode],
  });

  loadMapMouseEvents(map, `buurten-fills-${wkCode}`, `buurten-hover-${wkCode}`, 'bu_code', false, false);
}

export function addWijken(map, gmCode) {
  console.log('wijken added');
  map.addLayer({
    id: `wijken-fills-${gmCode}`,
    type: 'fill',
    source: 'wijken',
    paint: {
      'fill-color': '#F758FF',
      'fill-opacity': 0.2,
    },
    filter: ['==', 'gm_code', gmCode],
  });

  map.addLayer({
    id: `wijken-hover-${gmCode}`,
    type: 'fill',
    source: 'wijken',
    paint: {
      'fill-color': '#F758FF',
      'fill-opacity': 0.5,
    },
    filter: ['==', 'gm_code', gmCode],
  });

  map.addLayer({
    id: `wijken-borders-${gmCode}`,
    type: 'line',
    source: 'wijken',
    paint: {
      'line-color': '#B33DB9',
      'line-width': 2,
    },
    filter: ['==', 'gm_code', gmCode],
  });
  loadMapMouseEvents(map, `wijken-fills-${gmCode}`, `wijken-hover-${gmCode}`, 'wk_code', false, true);
}

export function addGemeente(map) {
  map.addLayer({
    id: 'gemeenten-fills',
    type: 'fill',
    source: 'gemeenten',
    paint: {
      'fill-color': '#74BCF7',
      'fill-opacity': 0.1,
    },
  });

  map.addLayer({
    id: 'gemeenten-hover',
    type: 'fill',
    source: 'gemeenten',
    paint: {
      'fill-color': '#74BCF7',
      'fill-opacity': 0.5,
    },
  });

  map.addLayer({
    id: 'gemeenten-borders',
    type: 'line',
    source: 'gemeenten',
    paint: {
      'line-color': '#518AB9',
      'line-width': 2,
    },
  });
  loadMapMouseEvents(map, 'gemeenten-fills', 'gemeenten-hover', 'gm_code', true);
}
