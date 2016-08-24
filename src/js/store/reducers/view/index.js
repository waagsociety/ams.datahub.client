import * as initialState from './initial'

export default function(state = initialState, { type, payload }) {

  switch(type){

    case 'view-SearchInput': {
    
      const SearchInput = Object.assign(state.SearchInput, payload)
      return { ...state, SearchInput }

    }

    default: return { ...state }

  }
  
}

export const view = (state = initialState, { type, payload }) => {

  switch(type){

    case 'view-SearchInput': {
    
      const SearchInput = Object.assign(state.SearchInput, payload)
      return { ...state, SearchInput }

    }

    default: return { ...state }

  }

}