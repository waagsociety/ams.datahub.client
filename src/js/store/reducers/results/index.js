import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch (type) {

    case 'results-loading': {
      return { ...state, loading: payload }
    }

    case 'results-add': {

      const { key, value, data } = payload
      const localStorage = { 
        ...state.localStorage, 
        [key + value]: data.map(x => x.id)
      }

      // concat and remove doubles
      const idDictionary = []
      const collection = state.collection.concat(data).filter(item => {
        if (idDictionary[item.id]) return false
        idDictionary[item.id] = true
        return true
      })

      return {
        ...state,
        localStorage, 
        collection,
        selection: collection,
        match: !!collection.length,
        loading: false,
      }

    }

    case 'results-remove': {

      const { key, value } = payload
      const idFilterIndex = state.localStorage[ key + value ]
      state.localStorage[ key + value ] = null

      const selection = state.selection.filter(item => !idFilterIndex.includes(item.id))

      return {
        ...state,
        selection,
        localStorage
      }

    }



    default: return { ...state }

  }
  
}