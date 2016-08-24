import { view, filter } from '../../store'

const SearchInput = ({ dispatch }) => ({
    
  setFocus({ target }) {
    const focus = (target === document.activeElement)
    dispatch(view.SearchInput({ focus }))
  },

  getSuggestions({ target }) {
      dispatch(filter.query(target.value))
  },

})

export default SearchInput
