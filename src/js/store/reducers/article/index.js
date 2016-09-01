import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch(type){

    case 'article-load': {

      return { ...state }

    }

    default: return { ...state }

  }

}