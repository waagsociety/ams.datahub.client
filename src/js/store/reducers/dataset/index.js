import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch(type){

    case 'dataset-loading': {
      return { ...state, ...payload }
    }

    default: return { ...state }

  }

}