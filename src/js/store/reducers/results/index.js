import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch (type) {

    case 'results-add': {

      return { ...state }

    }



    default: return { ...state }

  }
  
}