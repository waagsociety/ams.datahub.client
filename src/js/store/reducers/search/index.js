import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch(type){

    case 'search-fetch': {
      return {  ...state, ...payload }
    }

    case 'search-load': {
      return {  ...state, ...payload }
    }

     case 'search-meta': {
      return {  ...state, ...payload }
    }

    case 'search-error': {
      return {  ...state, ...payload }
    }

    case 'search-clear': {
      return { ...initialState }
    }

    default: return { ...state }

  }

}