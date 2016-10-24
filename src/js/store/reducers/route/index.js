import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch (type) {

    case 'route-initialise': {
      return { ...state, ...payload }
    }

    case 'route-query': {
      return { ...state, ...payload }
    }

    case 'route-search': {

      return { ...state, ...payload }
    }

    case 'route-item': {
      const query = payload
      return { state, query }
    }

    default: return { ...state }

  }
  
}
