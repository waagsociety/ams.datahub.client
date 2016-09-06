import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch (type) {

    case 'route-initialise': {
      return { ...state, ...payload }
    }

    case 'route-query': {

      // console.log(state)



      return { ...state }


    }

    case 'route-search': {

      return { ...state, ...payload }
    }

    case 'route-article': {
      const query = payload
      return { state, query }
    }

    default: return { ...state }

  }
  
}
