import { initialState } from './initialise'

export default function(state = initialState, { type, payload }) {

  switch(type){

    case 'search-fetch': {
      // console.log('search-fetch payload', payload)
      return {  ...state, ...payload }
    }

    case 'search-load': {
      // console.log('search-load payload', payload)
      return {  ...state, ...payload }
    }

    case 'search-error': {
      // console.log('search-error payload', payload)
      return {  ...state, ...payload }
    }

    default: return { ...state }

  }

}