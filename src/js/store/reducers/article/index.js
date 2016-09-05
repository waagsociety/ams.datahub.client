import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch(type){

    case 'article-fetched': {

      console.log('article-fetched', state, payload)

      return { ...state, content: payload, active: true }

    }

    default: return { ...state }

  }

}