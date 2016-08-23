const initialState = []

export const query = (state = initialState, { type, payload }) => {

  switch(type){

    case 'query-initialise': {

      const { search } = payload

      return search.split(/\?|\&/g).reduce((result, parameter) => {

        const [ key, value ] = parameter.split('=')
        if (key && value) result.push({ key, value })
        return result

      }, [])

    }

    case 'query-remove': {

      const { name, value } = payload

      return state.reduce((result, item) => {
        if (!(item.key === name && item.value === value)) result.push(item)
        return result
      }, [])

    }

    case 'query-add': {

      const { name, value } = payload
      const isActive = state.some(item => item.key === name && item.value === value)
     
      if (!isActive) state.push({ key: name, value })

      return [ ...state ]

    }

    default: return state

  }

}
