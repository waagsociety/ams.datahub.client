const initialState = {
  SearchInput: {
    focus: false
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