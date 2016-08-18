const initialState = {}

export const query = (state = initialState, { type, payload }) => {

  switch(type){

    case 'query-initialise': {

      // map location.query Object to query state
      return Object.keys(payload).reduce((result, key) => {
        const parameters = payload[key]
        result[key] = [ ...parameters ]
        return result
      }, {})

    }

    case 'query-update': {
      return {
        ...state
      }
    }

    default: return state

  }

}
