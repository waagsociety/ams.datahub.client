import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch (type) {

    case 'results-loading': {
      return { ...state, loading: true }
    }

    case 'results-store': {

      const { key, value, data } = payload

      // Add results to storage
      const keyStorage = state.localStorage[key] || {}
      keyStorage[value] = data
      const localStorage = { 
        ...state.localStorage, 
        [key]: keyStorage,
      }

      return {
        ...state,
        localStorage,
        loading: false
      }

    }

    default: return { ...state }

  }
  
}