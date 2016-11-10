import * as initialState from './initialise'

export default function(state = initialState, { type, payload }) {

  switch(type){

    case 'view-SearchInput': {
      const SearchInput = { ...state.SearchInput, ...payload }
      return { ...state, SearchInput }
    }

    case 'view-FilterGroup': {
      const FilterGroup = { ...state.FilterGroup, ...payload }
      return { ...state, FilterGroup }
    }

    case 'view-noWebGL': {
      const noWebGL = true
      return { ...state, noWebGL }
    }

    case 'view-mapbox': {
      const mapbox = { ...state.mapbox, ...payload }
      return { ...state, mapbox }
    }

    default: return { ...state }

  }
  
}