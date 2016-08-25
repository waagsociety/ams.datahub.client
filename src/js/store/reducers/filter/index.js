import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch(type){

    case 'filter-input': {
      
      const query = !!payload && typeof payload === 'string' && payload
      
      const pattern = new RegExp(payload, 'gi')

      const suggestions = state.localStorage.filter(item => pattern.test(item.value))
      const match = !!suggestions.length

      return { ...state, query, suggestions, match }

    }

    case 'filter-toggle': {
      
      const localStorage = state.localStorage.map(filter => {
        
        if (filter.id === payload.id) filter.active = !filter.active

        return filter
      })

      return { ...state, localStorage }
    }

    case 'filter-initialise': {

      let id = 0

      const groupMap = state.groups.reduce((result, { key }, index) => {
        result[key] = index
        return result
      }, {})

      // Prevent double values
      const dictionary = state.groups.reduce((result, { key }) => {
        result[key] = {}
        return result
      }, {})

      const localStorage = payload.reduce((result, { metadata }) => {
        
        metadata.forEach(({ key, value }) => {

          const index = groupMap[key]
          const groupExists = typeof index === 'number'

          if (groupExists && !dictionary[key][value]) result.push({
            id: ++id, 
            name: key.split('.').pop(),
            key,
            value,
            index,
            active: false
          })

        })

        return result

      }, [])

      const initialised = true

      return { ...state, localStorage, initialised  }

    }

    case 'filter-error': {

      const error = payload
      return { ...state, error }

    }

    default: return { ...state }

  }

}