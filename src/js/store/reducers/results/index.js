import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch (type) {

    case 'results-loading': {
      return { ...state, loading: payload }
    }

    case 'results-add': {

      console.log('results-add', payload)

      const collection = payload

      return {
        ...state, 
        collection,
        match: !!collection.length,
        loading: false,
      }

    }



    default: return { ...state }

  }
  
}