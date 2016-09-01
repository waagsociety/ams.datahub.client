import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch(type){

    case 'article-fetched': {

      console.log(state, payload)

      return { ...state, content: payload }

    }

    default: return { ...state }

  }

}