export const mapStyle = {
  buurten: {
    id: 'buurten',
    type: 'fill',
    source: 'buurten',
    layout: {},
    paint: {
      'fill-color': '#ff0000',
      'fill-opacity': 0.1,
    },
  },
  buurtBorders: {
    id: 'buurten-borders',
    type: 'line',
    source: 'buurten',
    layout: {},
    paint: {
      'line-color': '#ff0000',
      'line-width': 2,
    },
  },
  buurtHover: {
    id: 'buurten-hover',
    type: 'fill',
    source: 'buurten',
    layout: {},
    paint: {
      'fill-color': '#ff0000',
      'fill-opacity': 0.4,
    },
  },
  wijkFill: {
    id: 'wijken-fills',
    type: 'fill',
    source: 'wijken',
    layout: {},
    paint: {
      'fill-color': '#fff',
      'fill-opacity': 0.1,
      'fill-outline-color': '#fff',
    },
  },
  wijkBorder: {
    id: 'wijken-borders',
    type: 'line',
    source: 'wijken',
    layout: {},
    paint: {
      'line-color': '#5f46bd',
      'line-width': 2,
    },
  },
  wijkHover: {
    id: 'wijken-hover',
    type: 'fill',
    source: 'wijken',
    layout: {},
    paint: {
      'fill-color': '#F758FF',
      'fill-opacity': 0.4,
    },
  },

  gemeenteFill: {
    id: 'gemeenten-fills',
    type: 'fill',
    source: 'gemeenten',
    layout: {},
    paint: {
      'fill-color': '#9291FB',
      'fill-opacity': 0,
      'fill-outline-color': '#fff',
    },
  },

  gemeenteBorder: {
    id: 'gemeenten-borders',
    type: 'line',
    source: 'gemeenten',
    layout: {},
    paint: {
      'line-color': '#5958FF',
      'line-width': 2,
    },
  },

  gemeenteHover: {
    id: 'gemeenten-hover',
    type: 'fill',
    source: 'gemeenten',
    layout: {},
    paint: {
      'fill-color': '#9291FB',
      'fill-opacity': 0.5,
    },
  },
}
