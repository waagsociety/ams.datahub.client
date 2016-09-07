import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch(type){

    case 'query-fetch': {
      const { hash } = payload
      return {
        ...state,
        hash
      }

    }

    default: return { ...state }

  }

}