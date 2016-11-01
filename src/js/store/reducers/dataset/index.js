import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch(type){

    case 'dataset-loading': {
      return { ...state, ...payload }
    }

    case 'dataset-loaded': {
      return { ...state, ...payload }
    }

    case 'related-loading': {
      return { ...state, ...payload }
    }

    case 'related-loaded': {
      return { ...state, ...payload }
    }

    default: return { ...state }

  }

}