const initialState = {}
import { browserHistory } from 'react-router'

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

    case 'query-update': {

      const { name, value } = payload
      
      console.log(state, name, value)

      return {
        ...state
      }

    }

    default: return state

  }

}
