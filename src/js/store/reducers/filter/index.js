import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch(type){

    case 'filter-input': {
      
      const value = !!payload && typeof payload === 'string' && payload
      
      const pattern = new RegExp(value, 'gi')

      let suggestions = state.localStorage.filter(item => pattern.test(item.value))

      // set active state based on selection
      suggestions = suggestions.map(filter => ({
        ...filter,
        active: state.selection.some(({ id }) => (id === filter.id))
      }))

      const match = !!suggestions.length

      return { ...state, value, suggestions, match }

    }

    case 'filter-toggle': {

      const { id, active } = payload

      // Update suggestions
      const suggestions = state.suggestions.map(filter => {

        if (id === filter.id) return {
          ...filter,
          active
        }
        else return filter

      })

      // Update selection
      let selection = [ ...state.selection ]
      const inSelection = selection.find(filter => id === filter.id)
      if (active && !inSelection) selection.push(payload)
      else selection = selection.filter(filter => id !== filter.id)


      return { ...state, suggestions, selection }

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

          if (groupExists && !dictionary[key][value]){ 

            dictionary[key][value] = true
            
            result.push({
              id: ++id, 
              name: key.split('.').pop(),
              key,
              value,
              index,
              active: false
            })

          }

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