const initialState = {}

export const query = (state = initialState, { type, payload }) => {

  switch(type){

    case 'query-initialise': {

      return Object.keys(payload).reduce((result, key) => {
        const parameters = payload[key]
        result[key] = [ parameters ]
        return result
      }, {})

    }

    case 'query-update': {

      const { name, value } = payload
      console.log(name in state)

      return {
        ...state
      }
    }

    default: return state

  }

}
