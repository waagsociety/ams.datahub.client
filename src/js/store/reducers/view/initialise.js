export const SearchInput = {
  focus: false,
  value: '',
}

export const FilterGroup = {
  focus: null,
}

export const noWebGL = false


const longitude = 4.8
const latitude = 52.35
export const mapbox = {
  longitude, latitude,
  zoom: 9,
  maxBounds: [
      [longitude - 1, latitude - 0.5], // Southwest lng lat coordinates
      [longitude + 1, latitude + 0.5],  // Northeast lng lat coordinates
  ],
}